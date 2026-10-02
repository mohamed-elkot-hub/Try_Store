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
exports.RegisterAuthDto = void 0;
const class_validator_1 = require("class-validator");
const match_decorators_1 = require("../../../common/decorators/validators/match.decorators");
const role_enum_1 = require("../../../common/Enum/role.enum");
class RegisterAuthDto {
    firstName;
    lastName;
    email;
    password;
    rePassword;
    phoneNumber;
    role;
}
exports.RegisterAuthDto = RegisterAuthDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Min)(3),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Min)(3),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmpty)(),
    (0, match_decorators_1.Match)('password', {
        message: 'Passwords do not match',
    }),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "rePassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterAuthDto.prototype, "role", void 0);
//# sourceMappingURL=register-customer.auth.js.map