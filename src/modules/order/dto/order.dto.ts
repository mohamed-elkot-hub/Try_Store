import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { PaymentMethodEnum } from 'src/common/Enum/payment.enum';
import { paymentStatusEnum } from 'src/common/Enum/payment.enum';

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
