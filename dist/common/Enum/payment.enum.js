"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentStatusEnum = exports.PaymentMethodEnum = void 0;
var PaymentMethodEnum;
(function (PaymentMethodEnum) {
    PaymentMethodEnum["Cash"] = "Cash";
    PaymentMethodEnum["Credit"] = "Credit";
})(PaymentMethodEnum || (exports.PaymentMethodEnum = PaymentMethodEnum = {}));
var paymentStatusEnum;
(function (paymentStatusEnum) {
    paymentStatusEnum["Pending"] = "Pending";
    paymentStatusEnum["Paid"] = "Paid";
    paymentStatusEnum["Failed"] = "Failed";
})(paymentStatusEnum || (exports.paymentStatusEnum = paymentStatusEnum = {}));
//# sourceMappingURL=payment.enum.js.map