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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const cart_dto_1 = require("./dto/cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const user_decorators_1 = require("../../common/decorators/User/user.decorators");
let CartController = class CartController {
    cartService;
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(userId, cartDto) {
        return await this.cartService.addToCart(userId, cartDto);
    }
    async getCart(userId) {
        return await this.cartService.getCart(userId);
    }
    async updateQuantity(userId, updateCartDto) {
        return await this.cartService.updateQuantity(userId, updateCartDto);
    }
    async clearCart(userId) {
        return await this.cartService.clearCart(userId);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, user_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cart_dto_1.CartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
__decorate([
    (0, common_1.Patch)('update-quantity'),
    __param(0, (0, user_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateQuantity", null);
__decorate([
    (0, common_1.Patch)('clear'),
    __param(0, (0, user_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map