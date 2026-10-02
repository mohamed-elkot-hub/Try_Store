import { Document, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Customer } from './customer.schema';
type Tcustomer = Document & Customer;
export declare class CustomerRepository extends AbstractRepository<Tcustomer> {
    constructor(customerModel: Model<Tcustomer>);
}
export {};
