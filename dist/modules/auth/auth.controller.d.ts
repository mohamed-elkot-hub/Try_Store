import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-customer.auth';
import { VerifyAccountDto } from './dto/verify-account.dto';
import { LoginAuthDto } from './dto/login.auth.dto';
import { forgetPasswordDto } from './dto/forgetPassword.auth';
import { resetPasswordDto } from './dto/resetPassword.auth';
import type { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(registerAuthDto: RegisterAuthDto): Promise<{
        message: string;
    }>;
    VerifyAccount(verifyAccountDto: VerifyAccountDto): Promise<{
        message: string;
        succees: boolean;
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/customer/customer.schema").Customer, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        } & {
            id: string;
        });
    }>;
    login(loginDto: LoginAuthDto, response: Response): Promise<{
        accessToken: string;
    }>;
    forgetPassword(forgetpasswordDto: forgetPasswordDto): Promise<string>;
    resetPassword(resetpasswordDto: resetPasswordDto): Promise<{
        message: string;
    }>;
    refreshToken(req: Request): Promise<{
        accessToken: string;
    }>;
    logout(response: Response): Promise<{
        Message: string;
    }>;
}
