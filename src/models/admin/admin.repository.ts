import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Admin } from './admin.schema';
import { Model } from 'mongoose';

type Tadmin = Admin & Document;

export class AdminRepository extends AbstractRepository<Tadmin> {
  constructor(@InjectModel(Admin.name) AdminModel: Model<Tadmin>) {
    super(AdminModel);
  }
}
