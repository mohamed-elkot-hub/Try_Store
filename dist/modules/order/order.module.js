"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("../../models/order/order.schema");
const product_module_1 = require("../product/product.module");
const cart_module_1 = require("../cart/cart.module");
const order_factory_1 = require("./factory/order.factory");
const order_repository_1 = require("../../models/order/order.repository");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const address_module_1 = require("../address/address.module");
const payment_service_1 = require("../payment/payment.service");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema }]),
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            address_module_1.AddressModule
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_factory_1.OrderFactory, order_repository_1.OrderRepository, order_service_1.OrderService, payment_service_1.KashierService],
        exports: [order_factory_1.OrderFactory, order_repository_1.OrderRepository, order_service_1.OrderService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map