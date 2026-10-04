import { PaymentMethodEnum } from '../../../common/Enum/payment.enum';
import { paymentStatusEnum } from '../../../common/Enum/payment.enum';
export declare class CreateOrderDto {
    addressId: string;
    paymentMethod: PaymentMethodEnum;
}
export declare class UpdatePaymentStatusDto {
    paymentStatus: paymentStatusEnum;
}
