import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';

import { Cart, CartSchema } from 'src/models/cart/cart.schema';
import { CartRepository } from 'src/models/cart/cart.repository';

import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
    ProductModule,
  ],

  controllers: [CartController],

  providers: [
    CartService,
    CartRepository,
  ],

  exports: [
    CartService,
    CartRepository,
  ],
})
export class CartModule {}
