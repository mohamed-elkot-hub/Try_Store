import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminRepository } from 'src/models/admin/admin.repository';
import { Admin, AdminSchema } from 'src/models/admin/admin.schema';
import {  CustomerRepository } from 'src/models/customer/customer.repository';
import { Customer, CustomerSchema } from 'src/models/customer/customer.schema';
import { userRepository } from 'src/models/users/user.repository';
import { User, userSchema } from 'src/models/users/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
        discriminators: [
          { name: Admin.name, schema: AdminSchema },
          { name: Customer.name, schema: CustomerSchema },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [userRepository,CustomerRepository,AdminRepository],
  exports: [userRepository,CustomerRepository,AdminRepository],
})
export class UserMongoModule {}
