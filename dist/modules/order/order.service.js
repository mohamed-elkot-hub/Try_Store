"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("../../models/order/order.repository");
const cart_repository_1 = require("../../models/cart/cart.repository");
const address_repository_1 = require("../../models/address/address.repository");
const product_repository_1 = require("../../models/product/product.repository");
const mongoose_1 = require("mongoose");
const order_factory_1 = require("./factory/order.factory");
const payment_enum_1 = require("../../common/Enum/payment.enum");
const status_1 = require("../../common/Enum/status");
const payment_service_1 = require("../payment/payment.service");
let OrderService = class OrderService {
    orderRepository;
    cartRepository;
    addressRepository;
    productRepository;
    orderFactory;
    kashierService;
    constructor(orderRepository, cartRepository, addressRepository, productRepository, orderFactory, kashierService) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
        this.addressRepository = addressRepository;
        this.productRepository = productRepository;
        this.orderFactory = orderFactory;
        this.kashierService = kashierService;
    }
    async createOrder(orderData, userId) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const cart = await this.cartRepository.getOne({ userId: userObjectId });
        if (!cart || !cart.items.length) {
            throw new common_1.BadRequestException('Cart is empty');
        }
        for (const item of cart.items) {
            const product = await this.productRepository.getOne({
                _id: item.productId,
            });
            if (!product) {
                throw new common_1.NotFoundException({
                    message: 'Product not found',
                    productId: item.productId,
                });
            }
            if (product.stock < item.quantity) {
                throw new common_1.BadRequestException({
                    message: 'Not enough stock',
                    productId: item.productId,
                });
            }
        }
        const address = await this.addressRepository.getOne({
            _id: new mongoose_1.Types.ObjectId(orderData.addressId),
            user: userObjectId,
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        if (orderData.paymentMethod === payment_enum_1.PaymentMethodEnum.Cash) {
            const order = await this.orderFactory.createOrder(orderData, cart);
            order.paymentStatus = payment_enum_1.paymentStatusEnum.Pending;
            order.status = status_1.OrderStatus.PENDING;
            const createdOrder = await this.orderRepository.create(order);
            for (const item of cart.items) {
                await this.productRepository.updateOne({ _id: item.productId }, { $inc: { stock: -item.quantity } });
            }
            await this.cartRepository.updateOne({ userId: userObjectId }, { items: [], totalPrice: 0 });
            return createdOrder;
        }
        if (orderData.paymentMethod === payment_enum_1.PaymentMethodEnum.Credit) {
            const order = await this.orderFactory.createOrder(orderData, cart);
            order.paymentStatus = payment_enum_1.paymentStatusEnum.Pending;
            order.status = status_1.OrderStatus.PENDING;
            const createdOrder = await this.orderRepository.create(order);
            const Payment = await this.kashierService.createPaymentSession(createdOrder);
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
    async handleKashierWebhook(body) {
        const paymentData = body.data;
        const orderId = paymentData.merchantOrderId;
        const order = await this.orderRepository.getOne({
            _id: new mongoose_1.Types.ObjectId(orderId),
        });
        if (!order) {
            return {
                message: 'Order not found',
            };
        }
        if (paymentData.status === 'SUCCESS') {
            await this.orderRepository.updateOne({ _id: new mongoose_1.Types.ObjectId(orderId) }, {
                paymentStatus: payment_enum_1.paymentStatusEnum.Paid,
                paymentId: paymentData.id,
                transactionId: paymentData.transactionId,
            });
            await this.cartRepository.updateOne({ userId: order.userId }, {
                $set: {
                    items: [],
                },
            });
            return {
                message: 'Payment successful and cart cleared',
            };
        }
        if (paymentData.status === 'FAILED') {
            return await this.orderRepository.deleteOne({
                _id: new mongoose_1.Types.ObjectId(orderId),
            });
        }
    }
    async getOrdersByUser(userId) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        return await this.orderRepository.getAll({ userId: userObjectId });
    }
    async getOrderById(orderId, userId) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const order = await this.orderRepository.getOne({
            _id: orderId,
            userId: userObjectId,
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
    async updateOrderStatus(orderId, status) {
        const order = await this.orderRepository.getOne({ _id: orderId });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return await this.orderRepository.updateOne({ _id: orderId }, { status });
    }
    async updatePaymentStatus(orderId, paymentStatus) {
        const order = await this.orderRepository.getOne({ _id: orderId });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return await this.orderRepository.updateOne({ _id: orderId }, { paymentStatus });
    }
    async cancelOrder(orderId, userId) {
        const order = await this.orderRepository.getOne({
            _id: new mongoose_1.Types.ObjectId(orderId),
            userId: new mongoose_1.Types.ObjectId(userId),
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (order.status === status_1.OrderStatus.SHIPPED ||
            order.status === status_1.OrderStatus.DELIVERED) {
            throw new common_1.BadRequestException('This order cannot be cancelled');
        }
        return this.orderRepository.updateOne({
            _id: new mongoose_1.Types.ObjectId(orderId),
            userId: new mongoose_1.Types.ObjectId(userId),
        }, {
            status: status_1.OrderStatus.CANCELLED,
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        cart_repository_1.CartRepository,
        address_repository_1.AddressRepository,
        product_repository_1.ProductRepository,
        order_factory_1.OrderFactory,
        payment_service_1.KashierService])
], OrderService);
//# sourceMappingURL=order.service.js.map