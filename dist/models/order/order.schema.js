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
exports.OrderSchema = exports.Order = exports.OrderItemSchema = exports.OrderItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_enum_1 = require("../../common/Enum/payment.enum");
const status_1 = require("../../common/Enum/status");
let OrderItem = class OrderItem {
    productId;
    quantity;
    price;
    finalPrice;
    total;
};
exports.OrderItem = OrderItem;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Product',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OrderItem.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 1,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "finalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "total", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], OrderItem);
exports.OrderItemSchema = mongoose_1.SchemaFactory.createForClass(OrderItem);
let Order = class Order {
    userId;
    items;
    totalPrice;
    addressId;
    paymentMethod;
    paymentStatus;
    status;
    paymentId;
    transactionId;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [exports.OrderItemSchema],
        required: true,
        default: [],
    }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Address',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "addressId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: [payment_enum_1.PaymentMethodEnum.Cash, payment_enum_1.PaymentMethodEnum.Credit],
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: [
            payment_enum_1.paymentStatusEnum.Pending,
            payment_enum_1.paymentStatusEnum.Paid,
            payment_enum_1.paymentStatusEnum.Failed,
        ],
        default: payment_enum_1.paymentStatusEnum.Pending,
    }),
    __metadata("design:type", String)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: [
            status_1.OrderStatus.PENDING,
            status_1.OrderStatus.CONFIRMED,
            status_1.OrderStatus.PROCESSING,
            status_1.OrderStatus.SHIPPED,
            status_1.OrderStatus.DELIVERED,
            status_1.OrderStatus.CANCELLED,
        ],
        default: status_1.OrderStatus.PENDING,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: null,
    }),
    __metadata("design:type", String)
], Order.prototype, "paymentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: null,
    }),
    __metadata("design:type", String)
], Order.prototype, "transactionId", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map