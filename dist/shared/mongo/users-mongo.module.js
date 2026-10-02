"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMongoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_repository_1 = require("../../models/admin/admin.repository");
const admin_schema_1 = require("../../models/admin/admin.schema");
const customer_repository_1 = require("../../models/customer/customer.repository");
const customer_schema_1 = require("../../models/customer/customer.schema");
const user_repository_1 = require("../../models/users/user.repository");
const user_schema_1 = require("../../models/users/user.schema");
let UserMongoModule = class UserMongoModule {
};
exports.UserMongoModule = UserMongoModule;
exports.UserMongoModule = UserMongoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_schema_1.User.name,
                    schema: user_schema_1.userSchema,
                    discriminators: [
                        { name: admin_schema_1.Admin.name, schema: admin_schema_1.AdminSchema },
                        { name: customer_schema_1.Customer.name, schema: customer_schema_1.CustomerSchema },
                    ],
                },
            ]),
        ],
        controllers: [],
        providers: [user_repository_1.userRepository, customer_repository_1.CustomerRepository, admin_repository_1.AdminRepository],
        exports: [user_repository_1.userRepository, customer_repository_1.CustomerRepository, admin_repository_1.AdminRepository],
    })
], UserMongoModule);
//# sourceMappingURL=users-mongo.module.js.map