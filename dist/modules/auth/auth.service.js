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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const customer_repository_1 = require("../../models/customer/customer.repository");
const user_factory_1 = require("./factory/user.factory");
const mail_service_1 = require("../../common/mail/mail.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const password_hashed_service_1 = require("./../../common/security/password-hashed.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_repository_1 = require("../../models/users/user.repository");
const mongoose_1 = require("mongoose");
let AuthService = class AuthService {
    customerRepository;
    UserRepository;
    userFactoryService;
    mailService;
    passwordHashService;
    configService;
    jwtService;
    cacheManager;
    constructor(customerRepository, UserRepository, userFactoryService, mailService, passwordHashService, configService, jwtService, cacheManager) {
        this.customerRepository = customerRepository;
        this.UserRepository = UserRepository;
        this.userFactoryService = userFactoryService;
        this.mailService = mailService;
        this.passwordHashService = passwordHashService;
        this.configService = configService;
        this.jwtService = jwtService;
        this.cacheManager = cacheManager;
    }
    async creat(registerAuthDto) {
        const customerExist = await this.customerRepository.getOne({
            email: registerAuthDto.email,
        });
        if (customerExist) {
            throw new common_1.NotFoundException('user already Exist');
        }
        const CreateUser = await this.userFactoryService.creatRegisterUser(registerAuthDto);
        const otp = Math.floor(Math.random() * 100000 + 9999);
        await this.mailService.send({
            to: registerAuthDto.email,
            subject: 'verify your acount',
            html: `<p>your otp verify is ${otp}</p>`,
        });
        await this.cacheManager.set(`otp${registerAuthDto.email}:`, otp, 3 * 24 * 60 * 60 * 1000);
        await this.cacheManager.set(registerAuthDto.email, JSON.stringify(CreateUser), 10 * 60 * 1000);
    }
    async verifyAccount(verifyAccountDto) {
        const userData = await this.cacheManager.get(verifyAccountDto.email);
        if (!userData) {
            throw new common_1.NotFoundException('user not found');
        }
        const otp = await this.cacheManager.get(`otp${verifyAccountDto.email}:`);
        if (verifyAccountDto.otp != otp) {
            throw new common_1.BadRequestException('invalid otp ');
        }
        const user = await this.customerRepository.create(JSON.parse(userData));
        await this.cacheManager.del(`otp${verifyAccountDto.email}:`);
        await this.cacheManager.del(verifyAccountDto.email);
        return user;
    }
    async Login(loginAuthDto) {
        const user = await this.UserRepository.getOne({
            email: loginAuthDto.email,
        });
        if (!user) {
            throw new common_1.NotFoundException(' user not found user please signUp');
        }
        const checkPassword = await this.passwordHashService.compare(loginAuthDto.password, user?.password);
        if (user?.email != loginAuthDto.email || checkPassword != true) {
            throw new common_1.BadRequestException('email or password invalid');
        }
        const accessToken = this.jwtService.sign({
            sub: user._id,
            role: user['role'],
        });
        const refreshToken = this.jwtService.sign({
            sub: user._id,
            role: user['role'],
        }, { expiresIn: '7d', secret: this.configService.get('jwt').refreshSecret });
        return { accessToken, refreshToken };
    }
    async forgetPassword(forgetpasswordDto) {
        const userExist = await this.customerRepository.getOne({
            email: forgetpasswordDto.email,
        });
        if (!userExist) {
            throw new common_1.NotFoundException('user Not Found');
        }
        const otp = Math.floor(Math.random() * 100000 * 900000).toString();
        await this.cacheManager.set(`forget-password:${forgetpasswordDto.email}`, otp, 5 * 60 * 1000);
        this.mailService.send({
            to: forgetpasswordDto.email,
            subject: 'verify your account',
            html: `<p>your otp verify is ${otp}</p>`,
        });
        return 'OTP sent successfully ';
    }
    async resetPassword(resetpasswordDto) {
        const { email, otp, newPassword } = resetpasswordDto;
        const userExist = await this.customerRepository.getOne({
            email,
        });
        if (!userExist) {
            throw new common_1.NotFoundException('user not found');
        }
        const saveOtp = await this.cacheManager.get(`forget-password:${email}`);
        if (!saveOtp) {
            throw new common_1.BadRequestException('Otp Expired');
        }
        if (saveOtp !== otp) {
            throw new common_1.BadRequestException('invalid OTP');
        }
        const passwordHash = await this.passwordHashService.hash(newPassword);
        await this.customerRepository.updateOne({ email }, { password: passwordHash });
        await this.cacheManager.del(`forget-password:${email}`);
        return {
            message: 'password reset successfully',
        };
    }
    async refreshToken(refreshToken) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('Refresh token not found');
        }
        let payload;
        try {
            payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get('jwt.refreshSecret'),
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const user = await this.customerRepository.getOne({
            _id: new mongoose_1.Types.ObjectId(payload.sub),
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const accessToken = this.jwtService.sign({
            sub: user._id,
            role: user['role'],
        }, {
            secret: process.env.JWT_ACCESS_SECRET,
            expiresIn: '15m',
        });
        return {
            accessToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(7, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository,
        user_repository_1.userRepository,
        user_factory_1.UserFactoryService,
        mail_service_1.MailService,
        password_hashed_service_1.PassowrdHashedService,
        config_1.ConfigService,
        jwt_1.JwtService,
        cache_manager_1.Cache])
], AuthService);
//# sourceMappingURL=auth.service.js.map