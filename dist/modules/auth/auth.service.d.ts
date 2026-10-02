import { CustomerRepository } from "../../models/customer/customer.repository";
import { RegisterAuthDto } from './dto/register-customer.auth';
import { UserFactoryService } from './factory/user.factory';
import { MailService } from "../../common/mail/mail.service";
import { Cache } from '@nestjs/cache-manager';
import { VerifyAccountDto } from './dto/verify-account.dto';
import { LoginAuthDto } from './dto/login.auth.dto';
import { PassowrdHashedService } from './../../common/security/password-hashed.service';
import { JwtService } from '@nestjs/jwt';
import { forgetPasswordDto } from './dto/forgetPassword.auth';
import { resetPasswordDto } from './dto/resetPassword.auth';
import { ConfigService } from '@nestjs/config';
import { userRepository } from "../../models/users/user.repository";
import { Types } from 'mongoose';
export declare class AuthService {
    private readonly customerRepository;
    private readonly UserRepository;
    private readonly userFactoryService;
    private readonly mailService;
    private readonly passwordHashService;
    private readonly configService;
    private readonly jwtService;
    private readonly cacheManager;
    constructor(customerRepository: CustomerRepository, UserRepository: userRepository, userFactoryService: UserFactoryService, mailService: MailService, passwordHashService: PassowrdHashedService, configService: ConfigService, jwtService: JwtService, cacheManager: Cache);
    creat(registerAuthDto: RegisterAuthDto): Promise<void>;
    verifyAccount(verifyAccountDto: VerifyAccountDto): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    })>;
    Login(loginAuthDto: LoginAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    forgetPassword(forgetpasswordDto: forgetPasswordDto): Promise<string>;
    resetPassword(resetpasswordDto: resetPasswordDto): Promise<{
        message: string;
    }>;
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
    }>;
}
