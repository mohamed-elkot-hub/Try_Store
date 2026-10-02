import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerRepository } from './../../models/customer/customer.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async getProfile(userId: string) {
    const user = await this.customerRepository.getOne({ _id: userId });

    if (!user) {
      throw new NotFoundException('user Not found');
    }
    const { password, ...userData } = user.toObject();

    return userData;
  }
  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.customerRepository.getOne({ _id: userId });
    if (!user) throw new NotFoundException('User Not Found');
    return await this.customerRepository.updateAll({ _id: userId }, updateUserDto);
  }

  async deleteUser(userId: string) {
    const user = await this.customerRepository.getOne({ _id: userId });
    if (!user) throw new NotFoundException('User Not Found');
    return await this.customerRepository.deleteOne({ _id: userId });
  }
}
