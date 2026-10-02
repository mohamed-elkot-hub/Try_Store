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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_customer_auth_1 = require("./dto/register-customer.auth");
const verify_account_dto_1 = require("./dto/verify-account.dto");
const login_auth_dto_1 = require("./dto/login.auth.dto");
const public_decorators_1 = require("../../common/decorators/public/public.decorators");
const forgetPassword_auth_1 = require("./dto/forgetPassword.auth");
const resetPassword_auth_1 = require("./dto/resetPassword.auth");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async createUser(registerAuthDto) {
        const user = await this.authService.creat(registerAuthDto);
        return {
            message: 'created user successfuly',
        };
    }
    async VerifyAccount(verifyAccountDto) {
        const user = await this.authService.verifyAccount(verifyAccountDto);
        return {
            message: 'success',
            succees: true,
            data: user,
        };
    }
    async login(loginDto, response) {
        const { accessToken, refreshToken } = await this.authService.Login(loginDto);
        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/auth',
        });
        return {
            accessToken,
        };
    }
    async forgetPassword(forgetpasswordDto) {
        return this.authService.forgetPassword(forgetpasswordDto);
    }
    async resetPassword(resetpasswordDto) {
        return this.authService.resetPassword(resetpasswordDto);
    }
    async refreshToken(req) {
        const refreshToken = req?.cookies.refreshToken;
        return this.authService.refreshToken(refreshToken);
    }
    async logout(response) {
        response.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/auth',
        });
        return {
            Message: 'logout successfully',
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_customer_auth_1.RegisterAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_account_dto_1.VerifyAccountDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "VerifyAccount", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_auth_dto_1.LoginAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('forget-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgetPassword_auth_1.forgetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Put)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassword_auth_1.resetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, public_decorators_1.IsPublic)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map