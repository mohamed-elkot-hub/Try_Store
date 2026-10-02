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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KashierService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let KashierService = class KashierService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async createPaymentSession(order) {
        const apiKey = this.configService.getOrThrow('Kashier.api_key');
        const secretKey = this.configService.getOrThrow('Kashier.secret_key');
        const merchantId = this.configService.getOrThrow('Kashier.merchantId');
        const body = {
            expireAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
            merchantId: merchantId,
            paymentType: 'credit',
            amount: String(order.totalPrice),
            currency: 'EGP',
            order: order._id,
            merchantRedirect: 'https://YOUR-NGROK-URL/payment/success',
            display: 'en',
            type: 'one-time',
            allowedMethods: 'card,wallet',
            failureRedirect: false,
            description: 'pay for Try store',
            customer: { reference: 'amiralgotali@gmail.com' },
            interactionSource: 'TRY_STORE',
            enable3DS: true,
            serverWebhook: 'https://illusive-backing-crazily.ngrok-free.dev/orders/webhook/kashier',
        };
        const res = await fetch('https://test-api.kashier.io/v3/payment/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
                Authorization: secretKey,
            },
            body: JSON.stringify(body),
        });
        const kashierRes = await res.json();
        if (!res.ok) {
            throw new common_1.BadGatewayException({
                message: 'Failed to create Kashier payment session',
                kashierError: kashierRes,
            });
        }
        return kashierRes;
    }
};
exports.KashierService = KashierService;
exports.KashierService = KashierService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], KashierService);
//# sourceMappingURL=payment.service.js.map