import { OrderService } from './order.service';
import { CreateOrderDto, UpdatePaymentStatusDto } from './dto/order.dto';
import { UpdateOrderStatusDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(userId: string, orderData: CreateOrderDto): Promise<(import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
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
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: import("mongoose").Types.ObjectId;
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
    getOrdersByUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/order/order.schema").Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getOrderById(userId: string, orderId: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/order/order.schema").TOrder, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/order/order.schema").Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    cancelOrder(userId: string, orderId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    updateOrderStatus(orderId: string, data: UpdateOrderStatusDto): Promise<import("mongoose").UpdateWriteOpResult>;
    updatePaymentStatus(orderId: string, data: UpdatePaymentStatusDto): Promise<import("mongoose").UpdateWriteOpResult>;
    kashierWebhook(body: any): Promise<import("mongodb").DeleteResult | {
        message: string;
    } | undefined>;
}
