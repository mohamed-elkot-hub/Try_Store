import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Tcategory = Document & Category;

@Schema({ timestamps: true })
export class Category {
  @Prop({ type: String, required: true, unique: true, trim: true })
  name!: string;

  @Prop({ type: String, required: true, unique: true, trim: true })
  slug!: string;

  @Prop({ type: String })
  image?: string;

}

export const categorySchema = SchemaFactory.createForClass(Category);
