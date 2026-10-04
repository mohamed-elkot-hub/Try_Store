import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { PaymentMethodEnum } from '../../../common/Enum/payment.enum';
import { paymentStatusEnum } from '../../../common/Enum/payment.enum';

export class CreateOrderDto {
  @IsMongoId()
  @IsNotEmpty()
  addressId!: string;

  @IsEnum(PaymentMethodEnum)
  @IsNotEmpty()
  paymentMethod!: PaymentMethodEnum;
}

export class UpdatePaymentStatusDto {
  @IsEnum(paymentStatusEnum)
  @IsNotEmpty()
  paymentStatus!: paymentStatusEnum;
}
