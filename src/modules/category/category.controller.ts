import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { IsPublic } from 'src/common/decorators/public/public.decorators';
import { ROLE } from 'src/common/decorators/role/role.decorators';
import { Role } from 'src/common/Enum/role.enum';
import { RoleGuard } from 'src/common/guard/role.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Post('add-category')
  async addCategory(@Body() categoryDto: CategoryDto) {
    return await this.categoryService.addCategory(categoryDto);
  }
  @IsPublic()
  @Get('/')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }
  @IsPublic()
  @Get('/:categoryId')
  async getCategoryById(@Param('categoryId') categoryId: string) {
    return await this.categoryService.getCategoryById(categoryId);
  }
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  @Post('delete-category/:categoryId')
  async deleteCategory(@Param('categoryId') categoryId: string) {
    return await this.categoryService.deleteCategory(categoryId);
  }
}
