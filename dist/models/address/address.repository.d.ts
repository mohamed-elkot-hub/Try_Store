import { AbstractRepository } from '../abstract.repository';
import { Taddress } from './address.schema';
import { Model } from 'mongoose';
export declare class AddressRepository extends AbstractRepository<Taddress> {
    constructor(addressModel: Model<Taddress>);
}
