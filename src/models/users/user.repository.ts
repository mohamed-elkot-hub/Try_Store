import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../abstract.repository';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

type Tuser = User & Document;
@Injectable()
export class userRepository extends AbstractRepository<Tuser> {
  constructor(@InjectModel(User.name) userModel: Model<Tuser>) {
    super(userModel);
  }
}
