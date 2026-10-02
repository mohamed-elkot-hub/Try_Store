import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { Types } from 'mongoose';

import { ProductDto } from '../dto/product.dto';
import { ProductEntity } from '../entities/product.entity';
import { CloudinaryResponseDto } from 'src/common/cloud/dto/cloudinary.dto';

@Injectable()
export class ProductFactoryService {
  async createProductEntity(
    productDto: ProductDto,
    mainImage: CloudinaryResponseDto,
    subImages: CloudinaryResponseDto[],
  ) {
    const newProduct = new ProductEntity();

    newProduct.name = productDto.name;

    newProduct.slug = slugify(productDto.name, {
      lower: true,
      strict: true,
    });

    newProduct.description = productDto.description;
    newProduct.price = productDto.price;
    newProduct.categoryId = new Types.ObjectId(productDto.categoryId);
    newProduct.stock = productDto.stock;
    newProduct.discountType = productDto.discountType;
    newProduct.discount = productDto.discount;
    newProduct.finalPrice = productDto.finalPrice;

    newProduct.mainImage = mainImage;
    newProduct.subImages = subImages;

    return newProduct;
  }
}