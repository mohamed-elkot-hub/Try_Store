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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./dto/product.dto");
const public_decorators_1 = require("../../common/decorators/public/public.decorators");
const role_decorators_1 = require("../../common/decorators/role/role.decorators");
const role_enum_1 = require("../../common/Enum/role.enum");
const role_guard_1 = require("../../common/guard/role.guard");
const platform_express_1 = require("@nestjs/platform-express");
let ProductController = class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(productDto, files) {
        return await this.productService.createProduct(productDto, files.mainImage?.[0], files.subImages || []);
    }
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }
    async getProductById(id) {
        return await this.productService.getProductById(id);
    }
    async updateProduct(id, productDto) {
        return await this.productService.updateProduct(id, productDto);
    }
    async deleteProduct(id) {
        return await this.productService.deleteProduct(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, role_decorators_1.ROLE)(role_enum_1.Role.admin),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'mainImage', maxCount: 1 },
        { name: 'subImages', maxCount: 10 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, public_decorators_1.IsPublic)(),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, public_decorators_1.IsPublic)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, role_decorators_1.ROLE)(role_enum_1.Role.admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, role_decorators_1.ROLE)(role_enum_1.Role.admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map