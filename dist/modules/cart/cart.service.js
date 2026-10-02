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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const cart_repository_1 = require("../../models/cart/cart.repository");
const product_repository_1 = require("../../models/product/product.repository");
let CartService = class CartService {
    cartRepository;
    productRepository;
    constructor(cartRepository, productRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }
    async addToCart(userId, cartDto) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const product = await this.productRepository.getOne({
            _id: cartDto.productId,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (cartDto.quantity <= 0) {
            throw new common_1.BadRequestException('Quantity must be greater than 0');
        }
        if (cartDto.quantity > product.stock) {
            throw new common_1.BadRequestException(`Only ${product.stock} items are available`);
        }
        const cart = await this.cartRepository.getOne({
            userId: userObjectId,
        });
        if (!cart) {
            return await this.cartRepository.create({
                userId: userObjectId,
                items: [
                    {
                        productId: product._id,
                        quantity: cartDto.quantity,
                        price: product.price,
                        finalPrice: product.finalPrice,
                    },
                ],
                totalPrice: product.finalPrice * cartDto.quantity,
            });
        }
        const existingItem = cart.items.find((item) => item.productId.toString() === product._id.toString());
        if (existingItem) {
            const newQuantity = existingItem.quantity + cartDto.quantity;
            if (newQuantity > product.stock) {
                throw new common_1.BadRequestException(`Only ${product.stock} items are available`);
            }
            return await this.cartRepository.updateOne({
                userId: userObjectId,
                'items.productId': product._id,
            }, {
                $inc: {
                    'items.$.quantity': cartDto.quantity,
                    totalPrice: product.finalPrice * cartDto.quantity,
                },
            });
        }
        return await this.cartRepository.updateOne({
            userId: userObjectId,
        }, {
            $push: {
                items: {
                    productId: product._id,
                    quantity: cartDto.quantity,
                    price: product.price,
                    finalPrice: product.finalPrice,
                },
            },
            $inc: {
                totalPrice: product.finalPrice * cartDto.quantity,
            },
        });
    }
    async getCart(userId) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const cart = await this.cartRepository.getOne({
            userId: userObjectId,
        });
        if (!cart) {
            return {
                userId: userObjectId,
                items: [],
                totalPrice: 0,
            };
        }
        return cart;
    }
    async updateQuantity(userId, updateCartDto) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const productObjectId = new mongoose_1.Types.ObjectId(updateCartDto.productId);
        console.log('userId:', userObjectId);
        console.log('productId:', productObjectId);
        console.log('quantity:', updateCartDto.quantity);
        const cart = await this.cartRepository.getOne({
            userId: userObjectId,
        });
        console.log('cart:', cart);
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
        }
        const item = cart.items.find((item) => item.productId.toString() ===
            productObjectId.toString());
        console.log('item:', item);
        if (!item) {
            throw new common_1.NotFoundException('Product not found in cart');
        }
        if (updateCartDto.quantity === 0) {
            return await this.cartRepository.updateOne({ _id: cart._id }, {
                $pull: {
                    items: {
                        productId: productObjectId,
                    },
                },
                $inc: {
                    totalPrice: -(item.finalPrice * item.quantity),
                },
            });
        }
        const product = await this.productRepository.getOne({
            _id: productObjectId,
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (updateCartDto.quantity > product.stock) {
            throw new common_1.BadRequestException(`Only ${product.stock} items are available`);
        }
        const oldTotal = item.finalPrice * item.quantity;
        const newTotal = product.finalPrice * updateCartDto.quantity;
        const difference = newTotal - oldTotal;
        const result = await this.cartRepository.updateOne({
            _id: cart._id,
            'items.productId': productObjectId,
        }, {
            $set: {
                'items.$.quantity': updateCartDto.quantity,
                'items.$.price': product.price,
                'items.$.finalPrice': product.finalPrice,
            },
            $inc: {
                totalPrice: difference,
            },
        });
        console.log('update result:', result);
        return result;
    }
    async clearCart(userId) {
        const userObjectId = new mongoose_1.Types.ObjectId(userId);
        const cart = await this.cartRepository.getOne({
            userId: userObjectId,
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
        }
        return await this.cartRepository.updateOne({
            userId: userObjectId,
        }, {
            $set: {
                items: [],
                totalPrice: 0,
            },
        });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        product_repository_1.ProductRepository])
], CartService);
//# sourceMappingURL=cart.service.js.map