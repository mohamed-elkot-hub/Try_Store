import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}
  async send(options: ISendMailOptions) {
    await this.mailService.sendMail(options);
  }
}
