import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/Enum/role.enum';
import { OrderStatus } from 'src/common/Enum/status';
import { OrderRepository } from 'src/models/order/order.repository';
import { ProductRepository } from 'src/models/product/product.repository';
import { userRepository } from 'src/models/users/user.repository';

@Injectable()
export class DashboardService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly orderRepository: OrderRepository,
    private readonly userRepository: userRepository,
  ) {}

  async getStats() {
    const [totalProducts, totalOrders, totalCustomers, totalSales] =
      await Promise.all([
        this.productRepository.count({}),

        this.orderRepository.count({}),

        this.userRepository.count({
          role: Role.customer,
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

  private async getTotalSales() {
    const result = await this.orderRepository.aggregate([
      {
        $match: {
          status: OrderStatus.DELIVERED,
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
}
