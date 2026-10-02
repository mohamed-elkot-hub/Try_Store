import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { Role } from 'src/common/Enum/role.enum';

@Schema({ timestamps: true, discriminatorKey: 'role' })
export class User {
  @Prop({ type: String, require: true })
  firstName!: string;
  @Prop({ type: String, require: true })
  lastName!: string;
  @Prop({ type: String, require: true })
  email!: string;
  @Prop({ type: String, require: true })
  password!: string;

  @Prop({ type: String })
  phoneNumber!: string;
  @Prop({ type: String })
  role!: Role;

}

export const userSchema = SchemaFactory.createForClass(User);
