import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailService;
    constructor(mailService: MailerService);
    send(options: ISendMailOptions): Promise<void>;
}
