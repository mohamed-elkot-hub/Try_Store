import { TCart } from "../../../models/cart/cart.schema";
import { CreateOrderDto } from "../dto/order.dto";
import { OrderEntity } from "../entities/order.entity";
import { Types } from "mongoose";
import { paymentStatusEnum } from "../../../common/Enum/payment.enum";


export class OrderFactory {
    async createOrder(orderData: CreateOrderDto,cart:TCart) {
      const newOrder = new OrderEntity();
      newOrder.userId =  cart.userId;
      newOrder.items = cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        finalPrice: item.finalPrice,
        total: item.finalPrice * item.quantity,
      }));
      newOrder.totalPrice = cart.totalPrice;
      newOrder.addressId = new Types.ObjectId(orderData.addressId);
      newOrder.paymentMethod = orderData.paymentMethod;
      newOrder.paymentStatus =paymentStatusEnum.Pending;
      return newOrder;
    }
}