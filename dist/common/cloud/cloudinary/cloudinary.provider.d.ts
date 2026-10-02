import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
export declare const CloudinaryProvider: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => typeof cloudinary;
};
