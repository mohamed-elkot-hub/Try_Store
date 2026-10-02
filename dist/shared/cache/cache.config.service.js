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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheConfigServic = void 0;
const redis_1 = __importDefault(require("@keyv/redis"));
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let CacheConfigServic = class CacheConfigServic {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    createCacheOptions() {
        return {
            ttl: 60 * 60 * 1000,
            stores: new redis_1.default(this.configService.get('redis').host),
        };
    }
};
exports.CacheConfigServic = CacheConfigServic;
exports.CacheConfigServic = CacheConfigServic = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CacheConfigServic);
//# sourceMappingURL=cache.config.service.js.map