import { CacheModuleOptions, CacheOptionsFactory } from "@nestjs/cache-manager";
import { ConfigService } from "@nestjs/config";
export declare class CacheConfigServic implements CacheOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createCacheOptions(): CacheModuleOptions;
}
