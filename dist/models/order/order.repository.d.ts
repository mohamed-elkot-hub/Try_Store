import { Model } from 'mongoose';
import { TOrder } from './order.schema';
import { AbstractRepository } from '../abstract.repository';
export declare class OrderRepository extends AbstractRepository<TOrder> {
    constructor(orderModel: Model<TOrder>);
}
