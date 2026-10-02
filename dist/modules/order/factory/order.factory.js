"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFactory = void 0;
const order_entity_1 = require("../entities/order.entity");
const mongoose_1 = require("mongoose");
const payment_enum_1 = require("../../../common/Enum/payment.enum");
class OrderFactory {
    async createOrder(orderData, cart) {
        const newOrder = new order_entity_1.OrderEntity();
        newOrder.userId = cart.userId;
        newOrder.items = cart.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            finalPrice: item.finalPrice,
            total: item.finalPrice * item.quantity,
        }));
        newOrder.totalPrice = cart.totalPrice;
        newOrder.addressId = new mongoose_1.Types.ObjectId(orderData.addressId);
        newOrder.paymentMethod = orderData.paymentMethod;
        newOrder.paymentStatus = payment_enum_1.paymentStatusEnum.Pending;
        return newOrder;
    }
}
exports.OrderFactory = OrderFactory;
//# sourceMappingURL=order.factory.js.map