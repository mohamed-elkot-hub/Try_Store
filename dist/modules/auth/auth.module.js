"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const security_module_1 = require("../../common/security/security.module");
const users_mongo_module_1 = require("../../shared/mongo/users-mongo.module");
const auth_service_1 = require("./auth.service");
const user_factory_1 = require("./factory/user.factory");
const cache_manager_1 = require("@nestjs/cache-manager");
const mail_module_1 = require("../../common/mail/mail.module");
const mail_service_1 = require("../../common/mail/mail.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const authentication_guard_1 = require("../../common/guard/authentication.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            security_module_1.SecurityModule,
            mail_module_1.MailModule,
            users_mongo_module_1.UserMongoModule,
            cache_manager_1.CacheModule.register({ isGlobal: true }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('jwt').accessSecret,
                    signOptions: { expiresIn: '1d' },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            user_factory_1.UserFactoryService,
            mail_service_1.MailService,
            { provide: core_1.APP_GUARD, useClass: authentication_guard_1.AuthGuard },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map