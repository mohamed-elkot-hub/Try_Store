import { Module } from '@nestjs/common';
import { OrderModule } from '../order/order.module';
import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { UserModule } from '../users/user.module';

@Module({
  imports: [OrderModule, ProductModule, CartModule,UserModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashBoardModule {}
