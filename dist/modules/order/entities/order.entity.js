"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = exports.OrderItemEntity = void 0;
class OrderItemEntity {
    productId;
    quantity;
    price;
    finalPrice;
    total;
}
exports.OrderItemEntity = OrderItemEntity;
class OrderEntity {
    userId;
    items;
    totalPrice;
    addressId;
    paymentMethod;
    paymentStatus;
    status;
}
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map