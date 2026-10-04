import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, categorySchema } from "../../models/category/category.schema";
import { CategoryService } from "./category.service";
import { CategoryRepository } from "../../models/category/category.repository";
import { CategoryController } from "./category.controller";
import { CategoryFactoryService } from "./factory/category.factory";

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: categorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, CategoryFactoryService],
  exports: [CategoryService, CategoryRepository],
})


export class CategoryModule {}