"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("../../models/category/category.repository");
const category_factory_1 = require("./factory/category.factory");
let CategoryService = class CategoryService {
    categoryRepository;
    categoryFactory;
    constructor(categoryRepository, categoryFactory) {
        this.categoryRepository = categoryRepository;
        this.categoryFactory = categoryFactory;
    }
    async addCategory(categoryDto) {
        const categoryEntity = this.categoryFactory.createCategoryEntity(categoryDto);
        const category = await this.categoryRepository.getOne({
            slug: categoryEntity.slug,
        });
        if (category) {
            throw new common_1.BadRequestException('Category already exists');
        }
        return await this.categoryRepository.create(categoryEntity);
    }
    async getAllCategories() {
        return await this.categoryRepository.getAll();
    }
    async getCategoryById(categoryId) {
        const category = await this.categoryRepository.getOne({ _id: categoryId });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async deleteCategory(categoryId) {
        return await this.categoryRepository.deleteOne({ _id: categoryId });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository,
        category_factory_1.CategoryFactoryService])
], CategoryService);
//# sourceMappingURL=category.service.js.map