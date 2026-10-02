import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../abstract.repository';
import { Category, Tcategory } from './category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryRepository extends AbstractRepository<Tcategory> {
  constructor(@InjectModel(Category.name) categoryModel: Model<Tcategory>) {
    super(categoryModel);
  }
}
