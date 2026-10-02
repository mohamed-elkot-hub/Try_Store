import { Inject, Injectable } from '@nestjs/common';
import { AbstractRepository } from '../abstract.repository';
import { Product, Tproduct } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository extends AbstractRepository<Tproduct> {
  constructor(@InjectModel(Product.name) productModel: Model<Tproduct>) {
    super(productModel);
  }
}
