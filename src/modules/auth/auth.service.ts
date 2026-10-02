import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CustomerRepository } from '../../models/customer/customer.repository';
import { RegisterAuthDto } from './dto/register-customer.auth';
import { UserFactoryService } from './factory/user.factory';
import { MailService } from '../../common/mail/mail.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { VerifyAccountDto } from './dto/verify-account.dto';
import { LoginAuthDto } from './dto/login.auth.dto';
import { PassowrdHashedService } from './../../common/security/password-hashed.service';
import { JwtService } from '@nestjs/jwt';
import { forgetPasswordDto } from './dto/forgetPassword.auth';
import { resetPasswordDto } from './dto/resetPassword.auth';
import { ConfigService } from '@nestjs/config';
import { userRepository } from '../../models/users/user.repository';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly UserRepository: userRepository,
    private readonly userFactoryService: UserFactoryService,
    private readonly mailService: MailService,
    private readonly passwordHashService: PassowrdHashedService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,

    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async creat(registerAuthDto: RegisterAuthDto) {
    //1.check user Exist
    const customerExist = await this.customerRepository.getOne({
      email: registerAuthDto.email,
    });

    //2. if yes >> throw  error >>> user already exist
    if (customerExist) {
      throw new NotFoundException('user already Exist');
    }
    //3.hash passowrd [prepare data]
    const CreateUser =
      await this.userFactoryService.creatRegisterUser(registerAuthDto);

    //4. send mail with otp to verify
    const otp = Math.floor(Math.random() * 100000 + 9999);
    await this.mailService.send({
      to: registerAuthDto.email,
      subject: 'verify your acount',
      html: `<p>your otp verify is ${otp}</p>`,
    });
    //5. save otp and  userDate into Cache
    await this.cacheManager.set(
      `otp${registerAuthDto.email}:`,
      otp,
      3 * 24 * 60 * 60 * 1000,
    );
    //create user into redis
    await this.cacheManager.set(
      registerAuthDto.email,
      JSON.stringify(CreateUser),
      10 * 60 * 1000,
    );
  }

  async verifyAccount(verifyAccountDto: VerifyAccountDto) {
    //6. when verify account >> create User into  DB,remove OTP
    const userData = await this.cacheManager.get(verifyAccountDto.email);

    if (!userData) {
      throw new NotFoundException('user not found');
    }

    const otp = await this.cacheManager.get(`otp${verifyAccountDto.email}:`);

    if (verifyAccountDto.otp != otp) {
      throw new BadRequestException('invalid otp ');
    }

    const user = await this.customerRepository.create(
      JSON.parse(userData as string),
    );

    await this.cacheManager.del(`otp${verifyAccountDto.email}:`);
    await this.cacheManager.del(verifyAccountDto.email);

    return user;
  }

  async Login(loginAuthDto: LoginAuthDto) {
    const user = await this.UserRepository.getOne({
      email: loginAuthDto.email,
    });
    if (!user) {
      throw new NotFoundException(' user not found user please signUp');
    }
    const checkPassword = await this.passwordHashService.compare(
      loginAuthDto.password,
      user?.password as string,
    );
    if (user?.email != loginAuthDto.email || checkPassword != true) {
      throw new BadRequestException('email or password invalid');
    }
    const accessToken = this.jwtService.sign({
      sub: user._id,
      role: user['role'],
    });
    const refreshToken = this.jwtService.sign(
      {
        sub: user._id,
        role: user['role'],
      },
      { expiresIn: '7d', secret: this.configService.get('jwt').refreshSecret },
    );

    return { accessToken, refreshToken };
  }

  async forgetPassword(forgetpasswordDto: forgetPasswordDto) {
    const userExist = await this.customerRepository.getOne({
      email: forgetpasswordDto.email,
    });
    if (!userExist) {
      throw new NotFoundException('user Not Found');
    }
    const otp = Math.floor(Math.random() * 100000 * 900000).toString();
    await this.cacheManager.set(
      `forget-password:${forgetpasswordDto.email}`,
      otp,
      5 * 60 * 1000,
    );
    this.mailService.send({
      to: forgetpasswordDto.email,
      subject: 'verify your account',
      html: `<p>your otp verify is ${otp}</p>`,
    });
    return 'OTP sent successfully ';
  }
  async resetPassword(resetpasswordDto: resetPasswordDto) {
    const { email, otp, newPassword } = resetpasswordDto;
    const userExist = await this.customerRepository.getOne({
      email,
    });
    if (!userExist) {
      throw new NotFoundException('user not found');
    }
    const saveOtp = await this.cacheManager.get(`forget-password:${email}`);
    if (!saveOtp) {
      throw new BadRequestException('Otp Expired');
    }
    if (saveOtp !== otp) {
      throw new BadRequestException('invalid OTP');
    }
    const passwordHash = await this.passwordHashService.hash(newPassword);
    await this.customerRepository.updateOne(
      { email },
      { password: passwordHash },
    );
    await this.cacheManager.del(`forget-password:${email}`);
    return {
      message: 'password reset successfully',
    };
  }

  async refreshToken(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }
    let payload;

    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('jwt.refreshSecret'),
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.customerRepository.getOne({
      _id: new Types.ObjectId(payload.sub),
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const accessToken = this.jwtService.sign(
      {
        sub: user._id,
        role: user['role'],
      },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      },
    );

    return {
      accessToken,
    };
  }
}
