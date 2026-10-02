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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const customer_repository_1 = require("./../../models/customer/customer.repository");
let UsersService = class UsersService {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async getProfile(userId) {
        const user = await this.customerRepository.getOne({ _id: userId });
        if (!user) {
            throw new common_1.NotFoundException('user Not found');
        }
        const { password, ...userData } = user.toObject();
        return userData;
    }
    async updateUser(userId, updateUserDto) {
        const user = await this.customerRepository.getOne({ _id: userId });
        if (!user)
            throw new common_1.NotFoundException('User Not Found');
        return await this.customerRepository.updateAll({ _id: userId }, updateUserDto);
    }
    async deleteUser(userId) {
        const user = await this.customerRepository.getOne({ _id: userId });
        if (!user)
            throw new common_1.NotFoundException('User Not Found');
        return await this.customerRepository.deleteOne({ _id: userId });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map