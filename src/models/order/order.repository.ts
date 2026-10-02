import { Model } from 'mongoose';
import { Order, TOrder } from './order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository extends AbstractRepository<TOrder> {
  constructor(@InjectModel(Order.name) orderModel: Model<TOrder>) {
    super(orderModel);
  }
}
