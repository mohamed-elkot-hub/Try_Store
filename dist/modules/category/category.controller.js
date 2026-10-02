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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const category_dto_1 = require("./dto/category.dto");
const public_decorators_1 = require("../../common/decorators/public/public.decorators");
const role_decorators_1 = require("../../common/decorators/role/role.decorators");
const role_enum_1 = require("../../common/Enum/role.enum");
const role_guard_1 = require("../../common/guard/role.guard");
let CategoryController = class CategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async addCategory(categoryDto) {
        return await this.categoryService.addCategory(categoryDto);
    }
    async getAllCategories() {
        return await this.categoryService.getAllCategories();
    }
    async getCategoryById(categoryId) {
        return await this.categoryService.getCategoryById(categoryId);
    }
    async deleteCategory(categoryId) {
        return await this.categoryService.deleteCategory(categoryId);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, role_decorators_1.ROLE)(role_enum_1.Role.admin),
    (0, common_1.Post)('add-category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
__decorate([
    (0, public_decorators_1.IsPublic)(),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, public_decorators_1.IsPublic)(),
    (0, common_1.Get)('/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, role_decorators_1.ROLE)(role_enum_1.Role.admin),
    (0, common_1.Post)('delete-category/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map