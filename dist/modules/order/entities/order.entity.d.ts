import { PaymentMethodEnum, paymentStatusEnum } from "../../../common/Enum/payment.enum";
import { OrderStatus } from "../../../common/Enum/status";
import { Types } from 'mongoose';
export declare class OrderItemEntity {
    productId: Types.ObjectId;
    quantity: number;
    price: number;
    finalPrice: number;
    total: number;
}
export declare class OrderEntity {
    userId: Types.ObjectId;
    items: OrderItemEntity[];
    totalPrice: number;
    addressId: Types.ObjectId;
    paymentMethod: PaymentMethodEnum;
    paymentStatus: paymentStatusEnum;
    status: OrderStatus;
}
