import { AbstractRepository } from '../abstract.repository';
import { User } from './user.schema';
import { Model } from 'mongoose';
type Tuser = User & Document;
export declare class userRepository extends AbstractRepository<Tuser> {
    constructor(userModel: Model<Tuser>);
}
export {};
