import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { IsPublic } from 'src/common/decorators/public/public.decorators';
import { ROLE } from 'src/common/decorators/role/role.decorators';
import { Role } from 'src/common/Enum/role.enum';
import { RoleGuard } from 'src/common/guard/role.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Create Product
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage', maxCount: 1 },
      { name: 'subImages', maxCount: 10 },
    ]),
  )
  async createProduct(
    @Body() productDto: ProductDto,
    @UploadedFiles()
    files: {
      mainImage?: Express.Multer.File[];
      subImages?: Express.Multer.File[];
    },
  ) {
    return await this.productService.createProduct(
      productDto,
      files.mainImage?.[0],
      files.subImages || [],
    );
  }

  // Get All Products
  @IsPublic()
  @Get('/')
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  // Get Product By ID
  @IsPublic()
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  // Update Product
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) {
    return await this.productService.updateProduct(id, productDto);
  }

  // Delete Product
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
