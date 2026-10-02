import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

@Schema({ timestamps: true, discriminatorKey: 'role' })
export class Customer {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phoneNumer!: string;

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
