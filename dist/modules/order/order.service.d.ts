import { OrderRepository } from '../../models/order/order.repository';
import { CreateOrderDto } from './dto/order.dto';
import { CartRepository } from '../../models/cart/cart.repository';
import { AddressRepository } from '../../models/address/address.repository';
import { ProductRepository } from '../../models/product/product.repository';
import { Types } from 'mongoose';
import { OrderFactory } from './factory/order.factory';
import { KashierService } from '../payment/payment.service';
export declare class OrderService {
    private readonly orderRepository;
    private readonly cartRepository;
    private readonly addressRepository;
    private readonly productRepository;
    private readonly orderFactory;
    private readonly kashierService;
    constructor(orderRepository: OrderRepository, cartRepository: CartRepository, addressRepository: AddressRepository, productRepository: ProductRepository, orderFactory: OrderFactory, kashierService: KashierService);
    createOrder(orderData: CreateOrderDto, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | {
        createdOrder: (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        } & {
            id: string;
        });
        payment: {
            sessionUrl: any;
            status: any;
            expireAt: any;
        };
    } | undefined>;
    handleKashierWebhook(body: any): Promise<import("mongodb").DeleteResult | {
        message: string;
    } | undefined>;
    getOrdersByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/order/order.schema").Order & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getOrderById(orderId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/order/order.schema").Order & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateOrderStatus(orderId: string, status: string): Promise<import("mongoose").UpdateWriteOpResult>;
    updatePaymentStatus(orderId: string, paymentStatus: string): Promise<import("mongoose").UpdateWriteOpResult>;
    cancelOrder(orderId: string, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
}
