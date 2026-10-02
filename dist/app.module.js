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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const configurtion_1 = __importDefault(require("./config/configurtion"));
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/users/user.module");
const address_module_1 = require("./modules/address/address.module");
const category_module_1 = require("./modules/category/category.module");
const product_module_1 = require("./modules/product/product.module");
const cart_module_1 = require("./modules/cart/cart.module");
const order_module_1 = require("./modules/order/order.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [configurtion_1.default] }),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get('database').url,
                    onConnectionCreate: (connection) => {
                        connection.on('connected', () => console.log('connected'));
                        return connection;
                    },
                }),
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            address_module_1.AddressModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            dashboard_module_1.DashBoardModule,
        ],
        controllers: [],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map