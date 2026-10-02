import { CategoryDto } from '../dto/category.dto';
import { categoryEntity } from '../entity/category.entity';
export declare class CategoryFactoryService {
    createCategoryEntity(categoryDto: CategoryDto): categoryEntity;
}
