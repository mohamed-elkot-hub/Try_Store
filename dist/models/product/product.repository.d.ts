import { AbstractRepository } from '../abstract.repository';
import { Tproduct } from './product.schema';
import { Model } from 'mongoose';
export declare class ProductRepository extends AbstractRepository<Tproduct> {
    constructor(productModel: Model<Tproduct>);
}
