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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("../../common/Enum/role.enum");
const status_1 = require("../../common/Enum/status");
const order_repository_1 = require("../../models/order/order.repository");
const product_repository_1 = require("../../models/product/product.repository");
const user_repository_1 = require("../../models/users/user.repository");
let DashboardService = class DashboardService {
    productRepository;
    orderRepository;
    userRepository;
    constructor(productRepository, orderRepository, userRepository) {
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }
    async getStats() {
        const [totalProducts, totalOrders, totalCustomers, totalSales] = await Promise.all([
            this.productRepository.count({}),
            this.orderRepository.count({}),
            this.userRepository.count({
                role: role_enum_1.Role.customer,
            }),
            this.getTotalSales(),
        ]);
        return {
            totalProducts,
            totalOrders,
            totalCustomers,
            totalSales,
        };
    }
    async getTotalSales() {
        const result = await this.orderRepository.aggregate([
            {
                $match: {
                    status: status_1.OrderStatus.DELIVERED,
                },
            },
            {
                $group: {
                    _id: null,
                    totalSales: {
                        $sum: '$totalPrice',
                    },
                },
            },
        ]);
        return result[0]?.totalSales || 0;
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        order_repository_1.OrderRepository,
        user_repository_1.userRepository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map