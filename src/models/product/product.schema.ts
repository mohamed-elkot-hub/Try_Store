import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { DiscountEnum } from '../../common/Enum/discount.enum';

export type Tproduct = Document & Product;

@Schema({ _id: false })
export class ProductImage {
  @Prop({ type: String, required: true })
  url!: string;

  @Prop({ type: String, required: true })
  public_id!: string;
}

export const productImageSchema = SchemaFactory.createForClass(ProductImage);

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String, required: true })
  name!: string;
  @Prop({ type: String })
  slug!: string;
  @Prop({ type: String, required: true })
  description!: string;
  @Prop({ type: Number, required: true })
  price!: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  categoryId!: Types.ObjectId;
  @Prop({ type: Number, required: true })
  stock!: number;
  @Prop({
    type: String,
    enum: DiscountEnum,
    required: true,
  })
  discountType!: DiscountEnum;
  @Prop({ type: Number })
  discount!: number;
  @Prop({
    type: Number,
    default: function (this: Product) {
      if (this.discountType === DiscountEnum.fiexedAmount) {
        return this.price - this.discount;
      } else if (this.discountType === DiscountEnum.percentage) {
        return this.price - (this.price * this.discount) / 100;
      }
      return this.price;
    },
  })
  finalPrice!: number;
  @Prop({
    type: productImageSchema,
    required: true,
  })
  mainImage!: ProductImage;

  @Prop({
    type: [productImageSchema],
    default: [],
  })
  subImages!: ProductImage[];
}

export const productSchema = SchemaFactory.createForClass(Product);
