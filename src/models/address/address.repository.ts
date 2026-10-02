import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from '../abstract.repository';
import { Address, Taddress } from './address.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressRepository  extends AbstractRepository<Taddress> {
  constructor(@InjectModel(Address.name) addressModel: Model<Taddress>) {
    super(addressModel);
  }
}
