import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

import { ProductRepository } from 'src/models/product/product.repository';
import { ProductFactoryService } from './factory/product.factory';
import { CategoryRepository } from 'src/models/category/category.repository';
import { StorageService } from 'src/common/cloud/abstract/storage.service';
import { CloudinaryResponseDto } from 'src/common/cloud/dto/cloudinary.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly productFactory: ProductFactoryService,
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly storageServive: StorageService,
  ) {}

  // Create Product
  async createProduct(
    productDto: ProductDto,
    mainImage: Express.Multer.File | undefined,
    subImages: Express.Multer.File[],
  ) {
    // Check if product already exists
    const existingProduct = await this.productRepository.getOne({
      name: productDto.name,
    });

    const category = await this.categoryRepository.getOne({
      _id: productDto.categoryId,
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    // If product exists -> increase stock
    if (existingProduct) {
      existingProduct.stock += productDto.stock;

      return await this.productRepository.updateOne(
        { _id: existingProduct._id },
        existingProduct,
      );
    }
    // 5. Upload image to Cloudinary
    if (!mainImage) {
      throw new BadRequestException('Main image is required');
    }

    const mainImageResult = await this.storageServive.uploadFile(mainImage);

    if (!mainImageResult) {
      throw new BadRequestException('Failed to upload main image');
    }

    const subImagesResults = await Promise.all(
      subImages.map((image) => this.storageServive.uploadFile(image)),
    );

    const dataMianImage: CloudinaryResponseDto = {
      url: mainImageResult?.url as string,
      public_id: mainImageResult?.public_id as string,
    };

    const dataSubImages: CloudinaryResponseDto[] = subImagesResults.map(
      (image) => {
        if (!image?.url || !image?.public_id) {
          throw new BadRequestException('Failed to upload sub image');
        }

        return {
          url: image.url,
          public_id: image.public_id,
        };
      },
    );
  

    // Create entity using factory
    const product = await this.productFactory.createProductEntity(
      productDto,
      dataMianImage,
      dataSubImages,
    );

    // Save product
    return await this.productRepository.create(product);
  }

  // Get All Products
  async getAllProducts() {
    return await this.productRepository.getAll({});
  }

  // Get Product By ID
  async getProductById(id: string) {
    const product = await this.productRepository.getOne({
      _id: id,
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // Update Product
  async updateProduct(id: string, productDto: ProductDto) {
    const product = await this.productRepository.getOne({
      _id: id,
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepository.updateAll({ _id: id }, productDto);
  }

  // Delete Product
  async deleteProduct(id: string) {
    const product = await this.productRepository.getOne({
      _id: id,
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepository.deleteOne({
      _id: id,
    });
  }
}
