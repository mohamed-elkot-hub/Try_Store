import { Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { TCart } from './cart.schema';
export declare class CartRepository extends AbstractRepository<TCart> {
    constructor(cartModel: Model<TCart>);
}
