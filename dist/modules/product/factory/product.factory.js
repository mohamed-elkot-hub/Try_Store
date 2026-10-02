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
exports.ProductFactoryService = void 0;
const common_1 = require("@nestjs/common");
const slugify_1 = __importDefault(require("slugify"));
const mongoose_1 = require("mongoose");
const product_entity_1 = require("../entities/product.entity");
let ProductFactoryService = class ProductFactoryService {
    async createProductEntity(productDto, mainImage, subImages) {
        const newProduct = new product_entity_1.ProductEntity();
        newProduct.name = productDto.name;
        newProduct.slug = (0, slugify_1.default)(productDto.name, {
            lower: true,
            strict: true,
        });
        newProduct.description = productDto.description;
        newProduct.price = productDto.price;
        newProduct.categoryId = new mongoose_1.Types.ObjectId(productDto.categoryId);
        newProduct.stock = productDto.stock;
        newProduct.discountType = productDto.discountType;
        newProduct.discount = productDto.discount;
        newProduct.finalPrice = productDto.finalPrice;
        newProduct.mainImage = mainImage;
        newProduct.subImages = subImages;
        return newProduct;
    }
};
exports.ProductFactoryService = ProductFactoryService;
exports.ProductFactoryService = ProductFactoryService = __decorate([
    (0, common_1.Injectable)()
], ProductFactoryService);
//# sourceMappingURL=product.factory.js.map