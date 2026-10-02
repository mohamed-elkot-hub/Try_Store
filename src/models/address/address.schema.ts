import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Types } from 'mongoose';

export type Taddress = Document & Address;

@Schema({ timestamps: true })
export class Address {
  @Prop({ type:Types.ObjectId,ref:'User',required:true})
  user!: Types.ObjectId;
  @Prop({ type: String, require: true })
  city!: string;
  @Prop({ type: String, require: true })
  country!: string;
  @Prop({ type: String })
  detailes!: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
