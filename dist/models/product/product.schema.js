"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.Product = exports.productImageSchema = exports.ProductImage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const discount_enum_1 = require("../../common/Enum/discount.enum");
let ProductImage = class ProductImage {
    url;
    public_id;
};
exports.ProductImage = ProductImage;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ProductImage.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ProductImage.prototype, "public_id", void 0);
exports.ProductImage = ProductImage = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ProductImage);
exports.productImageSchema = mongoose_1.SchemaFactory.createForClass(ProductImage);
let Product = class Product {
    name;
    slug;
    description;
    price;
    categoryId;
    stock;
    discountType;
    discount;
    finalPrice;
    mainImage;
    subImages;
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: discount_enum_1.DiscountEnum,
        required: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "discountType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: function () {
            if (this.discountType === discount_enum_1.DiscountEnum.fiexedAmount) {
                return this.price - this.discount;
            }
            else if (this.discountType === discount_enum_1.DiscountEnum.percentage) {
                return this.price - (this.price * this.discount) / 100;
            }
            return this.price;
        },
    }),
    __metadata("design:type", Number)
], Product.prototype, "finalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: exports.productImageSchema,
        required: true,
    }),
    __metadata("design:type", ProductImage)
], Product.prototype, "mainImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [exports.productImageSchema],
        default: [],
    }),
    __metadata("design:type", Array)
], Product.prototype, "subImages", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Product);
exports.productSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map