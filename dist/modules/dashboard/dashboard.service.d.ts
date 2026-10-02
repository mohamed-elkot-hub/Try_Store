import { OrderRepository } from "../../models/order/order.repository";
import { ProductRepository } from "../../models/product/product.repository";
import { userRepository } from "../../models/users/user.repository";
export declare class DashboardService {
    private readonly productRepository;
    private readonly orderRepository;
    private readonly userRepository;
    constructor(productRepository: ProductRepository, orderRepository: OrderRepository, userRepository: userRepository);
    getStats(): Promise<{
        totalProducts: number;
        totalOrders: number;
        totalCustomers: number;
        totalSales: any;
    }>;
    private getTotalSales;
}
