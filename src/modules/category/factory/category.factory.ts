import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../dto/category.dto';
import slugify from 'slugify';
import { categoryEntity } from '../entity/category.entity';

@Injectable()
export class CategoryFactoryService {
  createCategoryEntity(categoryDto: CategoryDto) {
    const newcategoryEntity = new categoryEntity();
    newcategoryEntity.name = categoryDto.name.trim().toLowerCase();
    newcategoryEntity.slug = slugify(categoryDto.name);
    return newcategoryEntity;
  }
}
