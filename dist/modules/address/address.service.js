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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_repository_1 = require("../../models/address/address.repository");
const customer_repository_1 = require("../../models/customer/customer.repository");
const mongoose_1 = require("mongoose");
let AddressService = class AddressService {
    addressRepository;
    customerRepository;
    constructor(addressRepository, customerRepository) {
        this.addressRepository = addressRepository;
        this.customerRepository = customerRepository;
    }
    async AddAddress(userId, addAdressDto) {
        const user = await this.customerRepository.getOne({ _id: userId });
        if (!user) {
            throw new common_1.NotFoundException('user Not found');
        }
        const count = await this.addressRepository.count({
            user: new mongoose_1.Types.ObjectId(userId),
        });
        console.log(count, 'count');
        if (count >= 3) {
            throw new common_1.BadRequestException('you can add maximum 2 address');
        }
        return await this.addressRepository.create({
            ...addAdressDto,
            user: new mongoose_1.Types.ObjectId(userId),
        });
    }
    async updateAddress(userId, addressId, updateAddressDto) {
        const address = await this.addressRepository.getOne({
            _id: new mongoose_1.Types.ObjectId(addressId),
            user: new mongoose_1.Types.ObjectId(userId),
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        return this.addressRepository.updateOne({
            _id: new mongoose_1.Types.ObjectId(addressId),
            user: new mongoose_1.Types.ObjectId(userId),
        }, updateAddressDto);
    }
    async deleteAddress(userId, addressId) {
        const address = await this.addressRepository.getOne({
            user: new mongoose_1.Types.ObjectId(userId),
            _id: addressId,
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        await this.addressRepository.deleteOne({
            _id: addressId,
            user: new mongoose_1.Types.ObjectId(userId),
        });
        return {
            message: 'Address deleted successfully',
        };
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_repository_1.AddressRepository,
        customer_repository_1.CustomerRepository])
], AddressService);
//# sourceMappingURL=address.service.js.map