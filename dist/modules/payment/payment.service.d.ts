import { ConfigService } from '@nestjs/config';
export declare class KashierService {
    private readonly configService;
    constructor(configService: ConfigService);
    createPaymentSession(order: any): Promise<any>;
}
