import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '../../models/order/order.schema';
import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';
import { OrderFactory } from './factory/order.factory';
import { OrderRepository } from '../../models/order/order.repository';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AddressModule } from '../address/address.module';
import { KashierService } from '../payment/payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    ProductModule,
    CartModule,
    AddressModule
  ],
  controllers: [OrderController],
  providers: [OrderFactory, OrderRepository,OrderService,KashierService],
  exports: [OrderFactory, OrderRepository,OrderService],
})
export class OrderModule {}
