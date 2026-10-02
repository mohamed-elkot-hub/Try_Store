import { Document, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Customer } from './customer.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

type Tcustomer = Document & Customer;
@Injectable()
export class CustomerRepository extends AbstractRepository<Tcustomer> {
  constructor(@InjectModel(Customer.name) customerModel: Model<Tcustomer>) {
    super(customerModel);
  }
}
