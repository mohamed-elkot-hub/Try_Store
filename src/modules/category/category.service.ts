import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CategoryRepository } from 'src/models/category/category.repository';
import { CategoryDto } from './dto/category.dto';
import { CategoryFactoryService } from './factory/category.factory';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly categoryFactory: CategoryFactoryService,
  ) {}

  async addCategory(categoryDto: CategoryDto) {
    const categoryEntity =
      this.categoryFactory.createCategoryEntity(categoryDto);
    const category = await this.categoryRepository.getOne({
      slug: categoryEntity.slug,
    });
    if (category) {
      throw new BadRequestException('Category already exists');
    }
    return await this.categoryRepository.create(categoryEntity);
  }

  async getAllCategories() {
    return await this.categoryRepository.getAll();
  }

  async getCategoryById(categoryId: string) {
    const category = await this.categoryRepository.getOne({ _id: categoryId });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async deleteCategory(categoryId: string) {
    return await this.categoryRepository.deleteOne({ _id: categoryId });
  }
}
