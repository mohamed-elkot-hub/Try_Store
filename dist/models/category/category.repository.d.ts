import { AbstractRepository } from '../abstract.repository';
import { Tcategory } from './category.schema';
import { Model } from 'mongoose';
export declare class CategoryRepository extends AbstractRepository<Tcategory> {
    constructor(categoryModel: Model<Tcategory>);
}
