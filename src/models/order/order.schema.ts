import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {
  PaymentMethodEnum,
  paymentStatusEnum,
} from 'src/common/Enum/payment.enum';
import { OrderStatus } from 'src/common/Enum/status';

export type TOrder = Document & Order;

@Schema({ _id: false })
export class OrderItem {
  @Prop({
    type: Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  productId!: Types.ObjectId;

  @Prop({
    type: Number,
    required: true,
    min: 1,
  })
  quantity!: number;

  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  price!: number;

  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  finalPrice!: number;

  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  total!: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class Order {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  userId!: Types.ObjectId;

  @Prop({
    type: [OrderItemSchema],
    required: true,
    default: [],
  })
  items!: OrderItem[];




  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  totalPrice!: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'Address',
    required: true,
  })
  addressId!: Types.ObjectId;


  @Prop({
    type: String,
    enum: [PaymentMethodEnum.Cash, PaymentMethodEnum.Credit],
    required: true,
  })
  paymentMethod!: PaymentMethodEnum;

  @Prop({
    type: String,
    enum: [
      paymentStatusEnum.Pending,
      paymentStatusEnum.Paid,
      paymentStatusEnum.Failed,
    ],
    default: paymentStatusEnum.Pending,
  })
  paymentStatus!: paymentStatusEnum;

  @Prop({
    type: String,
    enum: [
      OrderStatus.PENDING,
      OrderStatus.CONFIRMED,
      OrderStatus.PROCESSING,
      OrderStatus.SHIPPED,
      OrderStatus.DELIVERED,
      OrderStatus.CANCELLED,
    ],
    default: OrderStatus.PENDING,
  })
  status!: OrderStatus;

  @Prop({
    type: String,
    default: null,
  })
  paymentId?: string;

  @Prop({
    type: String,
    default: null,
  })
  transactionId?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
