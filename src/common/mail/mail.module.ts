import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configServicce: ConfigService) => ({
        transport: {
          host: configServicce.get('mailer').host,
          port: configServicce.get('mailer').port,
          auth: {
            user: configServicce.get('mailer').user,
            pass: configServicce.get('mailer').pass,
          },
          default:{
            from:"'TRY STORE'<trystore@gmail.com>"
          }
        },
      }),
    }),
  ],
  providers: [MailService],
  exports:[MailService]
})
export class MailModule {}
