import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Cart, TCart } from './cart.schema';
import { InjectModel } from '@nestjs/mongoose';

export class CartRepository extends AbstractRepository<TCart> {
  constructor(@InjectModel(Cart.name) cartModel: Model<TCart>) {
    super(cartModel);
  }
}
