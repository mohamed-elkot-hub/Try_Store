import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AddressRepository } from 'src/models/address/address.repository';
import { AddressDto } from './dto/address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CustomerRepository } from 'src/models/customer/customer.repository';
import { Types } from 'mongoose';

@Injectable()
export class AddressService {
  constructor(
    private readonly addressRepository: AddressRepository,
    private readonly customerRepository: CustomerRepository,
  ) {}
  async AddAddress(userId: string, addAdressDto: AddressDto) {
    const user = await this.customerRepository.getOne({ _id: userId });
    if (!user) {
      throw new NotFoundException('user Not found');
    }
    const count = await this.addressRepository.count({
      user: new Types.ObjectId(userId),
    });
    console.log(count, 'count');
    if (count >= 3) {
      throw new BadRequestException('you can add maximum 2 address');
    }

    return await this.addressRepository.create({
      ...addAdressDto,
      user: new Types.ObjectId(userId),
    });
  }

  async updateAddress(
    userId: string,
    addressId: string,
    updateAddressDto: UpdateAddressDto,
  ) {
    const address = await this.addressRepository.getOne({
      _id: new Types.ObjectId(addressId),
      user: new Types.ObjectId(userId),
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    return this.addressRepository.updateOne(
      {
      _id: new Types.ObjectId(addressId),
      user: new Types.ObjectId(userId),
      },
      updateAddressDto,
    );
  }

  async deleteAddress(userId: string, addressId: string) {
  const address = await this.addressRepository.getOne({
    user: new Types.ObjectId(userId),
    _id: addressId,
  });

  if (!address) {
    throw new NotFoundException('Address not found');
  }

  await this.addressRepository.deleteOne({
    _id: addressId,
    user: new Types.ObjectId(userId),
  });

  return {
    message: 'Address deleted successfully',
  };
}
}
