import { Module } from '@nestjs/common';
import { SecurityModule } from 'src/common/security/security.module';
import { UserMongoModule } from 'src/shared/mongo/users-mongo.module';
import { AuthService } from './auth.service';
import { UserFactoryService } from './factory/user.factory';
import { CacheModule } from '@nestjs/cache-manager';
import { MailModule } from 'src/common/mail/mail.module';
import { MailService } from 'src/common/mail/mail.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guard/authentication.guard';

@Module({
  imports: [
    SecurityModule,
    MailModule,
    UserMongoModule,
    CacheModule.register({ isGlobal: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('jwt').accessSecret,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserFactoryService,
    MailService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AuthModule {}
