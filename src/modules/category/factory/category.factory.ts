import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../dto/category.dto';
import slug from './../../../../node_modules/slug/slug';
import { categoryEntity } from '../entity/category.entity';

@Injectable()
export class CategoryFactoryService {
  createCategoryEntity(categoryDto: CategoryDto) {
    const newcategoryEntity = new categoryEntity();
    newcategoryEntity.name = categoryDto.name.trim().toLowerCase();
    newcategoryEntity.slug = slug(categoryDto.name);
    return newcategoryEntity;
  }
}
