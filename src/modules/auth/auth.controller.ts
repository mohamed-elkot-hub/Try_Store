import { Body, Controller, Headers, Post, Put, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-customer.auth';
import { VerifyAccountDto } from './dto/verify-account.dto';
import { LoginAuthDto } from './dto/login.auth.dto';
import { IsPublic } from 'src/common/decorators/public/public.decorators';
import { forgetPasswordDto } from './dto/forgetPassword.auth';
import { resetPasswordDto } from './dto/resetPassword.auth';
import type { Request, Response } from 'express';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-up')
  async createUser(@Body() registerAuthDto: RegisterAuthDto) {
    const user = await this.authService.creat(registerAuthDto);
    return {
      message: 'created user successfuly',
    };
  }

  @Post('verify')
  async VerifyAccount(@Body() verifyAccountDto: VerifyAccountDto) {
    const user = await this.authService.verifyAccount(verifyAccountDto);
    return {
      message: 'success',
      succees: true,
      data: user,
    };
  }
  @Post('login')
  async login(
    @Body() loginDto: LoginAuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.Login(loginDto);

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
  @Post('forget-password')
  async forgetPassword(@Body() forgetpasswordDto: forgetPasswordDto) {
    return this.authService.forgetPassword(forgetpasswordDto);
  }

  @Put('reset-password')
  async resetPassword(@Body() resetpasswordDto: resetPasswordDto) {
    return this.authService.resetPassword(resetpasswordDto);
  }
  @Post('refresh')
  async refreshToken(@Req() req: Request) {
    const refreshToken = req?.cookies.refreshToken;

    return this.authService.refreshToken(refreshToken);
  }

  
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
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
}
