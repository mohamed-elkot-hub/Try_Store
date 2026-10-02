"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
exports.CloudinaryProvider = {
    provide: 'CLOUDINARY',
    inject: [config_1.ConfigService],
    useFactory: (configService) => {
        cloudinary_1.v2.config({
            cloud_name: configService.get('cloudinary').cloud_name,
            api_key: configService.get('cloudinary').api_key,
            api_secret: configService.get('cloudinary').api_secret,
        });
        console.log(cloudinary_1.v2.config());
        return cloudinary_1.v2;
    }
};
//# sourceMappingURL=cloudinary.provider.js.map