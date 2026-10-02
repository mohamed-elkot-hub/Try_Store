import { AbstractRepository } from '../abstract.repository';
import { Admin } from './admin.schema';
import { Model } from 'mongoose';
type Tadmin = Admin & Document;
export declare class AdminRepository extends AbstractRepository<Tadmin> {
    constructor(AdminModel: Model<Tadmin>);
}
export {};
