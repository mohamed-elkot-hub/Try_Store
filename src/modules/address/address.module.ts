import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Address, AddressSchema } from '../../models/address/address.schema';
import { addressController } from './address.controller';
import { AddressRepository } from '../../models/address/address.repository';
import { AddressService } from './address.service';
import { UserMongoModule } from '../../shared/mongo/users-mongo.module';

@Module({
  imports: [
    UserMongoModule,
    MongooseModule.forFeature([
      {
        name: Address.name,
        schema: AddressSchema,
      },
    ]),
  ],
  controllers: [addressController],
  providers: [AddressRepository,AddressService],
  exports:[AddressRepository]
})
export class AddressModule {}
