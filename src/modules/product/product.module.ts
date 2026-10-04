import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductFactoryService } from './factory/product.factory';
import { ProductRepository } from '../../models/product/product.repository';
import { CategoryRepository } from '../../models/category/category.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from '../../models/product/product.schema';
import { CategoryModule } from '../category/category.module';
import { CloudModule } from '../../common/cloud/cloud.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }]),
    CategoryModule,
    CloudModule
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductFactoryService,
    ProductRepository,

  ],
  exports: [ProductService, ProductRepository],
})
export class ProductModule {}
