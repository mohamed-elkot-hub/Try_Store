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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../../models/product/product.repository");
const product_factory_1 = require("./factory/product.factory");
const category_repository_1 = require("../../models/category/category.repository");
const storage_service_1 = require("../../common/cloud/abstract/storage.service");
let ProductService = class ProductService {
    productFactory;
    productRepository;
    categoryRepository;
    storageServive;
    constructor(productFactory, productRepository, categoryRepository, storageServive) {
        this.productFactory = productFactory;
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.storageServive = storageServive;
    }
    async createProduct(productDto, mainImage, subImages) {
        const existingProduct = await this.productRepository.getOne({
            name: productDto.name,
        });
        const category = await this.categoryRepository.getOne({
            _id: productDto.categoryId,
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        if (existingProduct) {
            existingProduct.stock += productDto.stock;
            return await this.productRepository.updateOne({ _id: existingProduct._id }, existingProduct);
        }
        if (!mainImage) {
            throw new common_1.BadRequestException('Main image is required');
        }
        const mainImageResult = await this.storageServive.uploadFile(mainImage);
        if (!mainImageResult) {
            throw new common_1.BadRequestException('Failed to upload main image');
        }
        const subImagesResults = await Promise.all(subImages.map((image) => this.storageServive.uploadFile(image)));
        const dataMianImage = {
            url: mainImageResult?.url,
            public_id: mainImageResult?.public_id,
        };
        const dataSubImages = subImagesResults.map((image) => {
            if (!image?.url || !image?.public_id) {
                throw new common_1.BadRequestException('Failed to upload sub image');
            }
            return {
                url: image.url,
                public_id: image.public_id,
            };
        });
        const product = await this.productFactory.createProductEntity(productDto, dataMianImage, dataSubImages);
        return await this.productRepository.create(product);
    }
    async getAllProducts() {
        return await this.productRepository.getAll({});
    }
    async getProductById(id) {
        const product = await this.productRepository.getOne({
            _id: id,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async updateProduct(id, productDto) {
        const product = await this.productRepository.getOne({
            _id: id,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return await this.productRepository.updateAll({ _id: id }, productDto);
    }
    async deleteProduct(id) {
        const product = await this.productRepository.getOne({
            _id: id,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return await this.productRepository.deleteOne({
            _id: id,
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_factory_1.ProductFactoryService,
        product_repository_1.ProductRepository,
        category_repository_1.CategoryRepository,
        storage_service_1.StorageService])
], ProductService);
//# sourceMappingURL=product.service.js.map