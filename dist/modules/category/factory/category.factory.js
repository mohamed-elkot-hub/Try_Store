"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactoryService = void 0;
const common_1 = require("@nestjs/common");
const slug_1 = __importDefault(require("./../../../../node_modules/slug/slug"));
const category_entity_1 = require("../entity/category.entity");
let CategoryFactoryService = class CategoryFactoryService {
    createCategoryEntity(categoryDto) {
        const newcategoryEntity = new category_entity_1.categoryEntity();
        newcategoryEntity.name = categoryDto.name.trim().toLowerCase();
        newcategoryEntity.slug = (0, slug_1.default)(categoryDto.name);
        return newcategoryEntity;
    }
};
exports.CategoryFactoryService = CategoryFactoryService;
exports.CategoryFactoryService = CategoryFactoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryFactoryService);
//# sourceMappingURL=category.factory.js.map