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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const user_decorators_1 = require("../../common/decorators/User/user.decorators");
const address_dto_1 = require("./dto/address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
let addressController = class addressController {
    addressService;
    constructor(addressService) {
        this.addressService = addressService;
    }
    async addAddress(user, createAddressDto) {
        const address = await this.addressService.AddAddress(user?.sub, createAddressDto);
        return {
            message: 'create Address successfully',
            data: address,
        };
    }
    async updateAddress(user, updateAddressDto, addressId) {
        await this.addressService.updateAddress(user.sub, addressId, updateAddressDto);
        return {
            message: 'updated successfully',
        };
    }
    async deleteAddress(user, addressId) {
        await this.addressService.deleteAddress(user.sub, addressId);
        return {
            message: 'deleted successfully',
        };
    }
};
exports.addressController = addressController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, user_decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, address_dto_1.AddressDto]),
    __metadata("design:returntype", Promise)
], addressController.prototype, "addAddress", null);
__decorate([
    (0, common_1.Put)('update/:addressId'),
    __param(0, (0, user_decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('addressId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_address_dto_1.UpdateAddressDto, String]),
    __metadata("design:returntype", Promise)
], addressController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Delete)('delete/:addressId'),
    __param(0, (0, user_decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('addressId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], addressController.prototype, "deleteAddress", null);
exports.addressController = addressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], addressController);
//# sourceMappingURL=address.controller.js.map