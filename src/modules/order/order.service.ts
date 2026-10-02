import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrderRepository } from 'src/models/order/order.repository';
import { CreateOrderDto } from './dto/order.dto';
import { CartRepository } from 'src/models/cart/cart.repository';
import { AddressRepository } from 'src/models/address/address.repository';
import { ProductRepository } from 'src/models/product/product.repository';
import { Types } from 'mongoose';
import { OrderFactory } from './factory/order.factory';
import {
  PaymentMethodEnum,
  paymentStatusEnum,
} from 'src/common/Enum/payment.enum';
import { OrderStatus } from 'src/common/Enum/status';
import { KashierService } from '../payment/payment.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly cartRepository: CartRepository,
    private readonly addressRepository: AddressRepository,
    private readonly productRepository: ProductRepository,
    private readonly orderFactory: OrderFactory,
    private readonly kashierService: KashierService,
  ) {}

  async createOrder(orderData: CreateOrderDto, userId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const cart = await this.cartRepository.getOne({ userId: userObjectId });
    if (!cart || !cart.items.length) {
      throw new BadRequestException('Cart is empty');
    }
    for (const item of cart.items) {
      const product = await this.productRepository.getOne({
        _id: item.productId,
      });

      if (!product) {
        throw new NotFoundException({
          message: 'Product not found',
          productId: item.productId,
        });
      }

      if (product.stock < item.quantity) {
        throw new BadRequestException({
          message: 'Not enough stock',
          productId: item.productId,
        });
      }
    }

    const address = await this.addressRepository.getOne({
      _id: new Types.ObjectId(orderData.addressId),
      user: userObjectId,
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }
    if (orderData.paymentMethod === PaymentMethodEnum.Cash) {
      // Handle Kashier payment method
      const order = await this.orderFactory.createOrder(orderData, cart);
      order.paymentStatus = paymentStatusEnum.Pending;
      order.status = OrderStatus.PENDING;
      const createdOrder = await this.orderRepository.create(order);
      // Decrease product stock
      for (const item of cart.items) {
        await this.productRepository.updateOne(
          { _id: item.productId },
          { $inc: { stock: -item.quantity } },
        );
      }
      // Clear the cart after order creation
      await this.cartRepository.updateOne(
        { userId: userObjectId },
        { items: [], totalPrice: 0 },
      );

      return createdOrder;
    }
    if (orderData.paymentMethod === PaymentMethodEnum.Credit) {
      const order = await this.orderFactory.createOrder(orderData, cart);
      order.paymentStatus = paymentStatusEnum.Pending;
      order.status = OrderStatus.PENDING;
      const createdOrder = await this.orderRepository.create(order);
      const Payment =
        await this.kashierService.createPaymentSession(createdOrder);
      return {
        createdOrder,
        payment: {
          sessionUrl: Payment.sessionUrl,
          status: Payment.status,
          expireAt: Payment.expireAt,
        },
      };
    }
  }

  async handleKashierWebhook(body: any) {
    const paymentData = body.data;
    const orderId = paymentData.merchantOrderId;

    const order = await this.orderRepository.getOne({
      _id: new Types.ObjectId(orderId),
    });

    if (!order) {
      return {
        message: 'Order not found',
      };
    }

  if (paymentData.status === 'SUCCESS') {
    // Update order payment information
    await this.orderRepository.updateOne(
      { _id: new Types.ObjectId(orderId) },
      {
        paymentStatus: paymentStatusEnum.Paid,
        paymentId: paymentData.id,
        transactionId: paymentData.transactionId,
      },
    );

    // Clear cart after successful payment
    await this.cartRepository.updateOne(
      { userId: order.userId },
      {
        $set: {
          items: [],
        },
      },
    );

    return {
      message: 'Payment successful and cart cleared',
    };
  }

    if (paymentData.status === 'FAILED') {
      return await this.orderRepository.deleteOne({
        _id: new Types.ObjectId(orderId),
      });
    }
  }

  async getOrdersByUser(userId: string) {
    const userObjectId = new Types.ObjectId(userId);
    return await this.orderRepository.getAll({ userId: userObjectId });
  }
  async getOrderById(orderId: string, userId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const order = await this.orderRepository.getOne({
      _id: orderId,
      userId: userObjectId,
    });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.orderRepository.getOne({ _id: orderId });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return await this.orderRepository.updateOne({ _id: orderId }, { status });
  }
  async updatePaymentStatus(orderId: string, paymentStatus: string) {
    const order = await this.orderRepository.getOne({ _id: orderId });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return await this.orderRepository.updateOne(
      { _id: orderId },
      { paymentStatus },
    );
  }
  async cancelOrder(orderId: string, userId: string) {
    const order = await this.orderRepository.getOne({
      _id: new Types.ObjectId(orderId),
      userId: new Types.ObjectId(userId),
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (
      order.status === OrderStatus.SHIPPED ||
      order.status === OrderStatus.DELIVERED
    ) {
      throw new BadRequestException('This order cannot be cancelled');
    }

    return this.orderRepository.updateOne(
      {
        _id: new Types.ObjectId(orderId),
        userId: new Types.ObjectId(userId),
      },
      {
        status: OrderStatus.CANCELLED,
      },
    );
  }
}
