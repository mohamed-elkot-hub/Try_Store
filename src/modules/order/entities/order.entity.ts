import {
  PaymentMethodEnum,
  paymentStatusEnum,
} from 'src/common/Enum/payment.enum';
import { OrderStatus } from 'src/common/Enum/status';

import { Types } from 'mongoose';

export class OrderItemEntity {
  productId!: Types.ObjectId;

  quantity!: number;

  price!: number;

  finalPrice!: number;

  total!: number;
}

export class OrderEntity {
  userId!: Types.ObjectId;
  items!: OrderItemEntity[];
  totalPrice!: number;
  addressId!: Types.ObjectId;
  paymentMethod!: PaymentMethodEnum;
  paymentStatus!: paymentStatusEnum;
  status!: OrderStatus;
}