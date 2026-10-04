import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { OrderService } from './order.service';
import { CreateOrderDto, UpdatePaymentStatusDto } from './dto/order.dto';

import { CurrentUser } from '../../common/decorators/User/user.decorators';
import { ROLE } from '../../common/decorators/role/role.decorators';
import { RoleGuard } from '../../common/guard/role.guard';
import { Role } from '../../common/Enum/role.enum';
import { UpdateOrderStatusDto } from './dto/update-order.dto';
import { IsPublic } from '../../common/decorators/public/public.decorators';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Customer - Create Order
  @Post()
  async createOrder(
    @CurrentUser('sub') userId: string,
    @Body() orderData: CreateOrderDto,
  ) {
    return await this.orderService.createOrder(orderData, userId);
  }

  // Customer - Get My Orders
  @Get()
  async getOrdersByUser(@CurrentUser('sub') userId: string) {
    return await this.orderService.getOrdersByUser(userId);
  }

  // Customer - Get My Order By Id
  @Get(':orderId')
  async getOrderById(
    @CurrentUser('sub') userId: string,
    @Param('orderId') orderId: string,
  ) {
    return await this.orderService.getOrderById(orderId, userId);
  }

  // Customer - Cancel My Order
  @Patch(':orderId/cancel')
  async cancelOrder(
    @CurrentUser('sub') userId: string,
    @Param('orderId') orderId: string,
  ) {
    return await this.orderService.cancelOrder(orderId, userId);
  }

  // Admin - Update Order Status
  @Patch(':orderId/status')
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body() data: UpdateOrderStatusDto,
  ) {
    return await this.orderService.updateOrderStatus(orderId, data.status);
  }

  // Admin - Update Payment Status
  @Patch(':orderId/payment-status')
  @UseGuards(RoleGuard)
  @ROLE(Role.admin)
  async updatePaymentStatus(
    @Param('orderId') orderId: string,
    @Body() data: UpdatePaymentStatusDto,
  ) {
    return await this.orderService.updatePaymentStatus(
      orderId,
      data.paymentStatus,
    );
  }

  @Post('webhook/kashier')
  @IsPublic()
  @HttpCode(200)
  async kashierWebhook(@Body() body: any) {

    return this.orderService.handleKashierWebhook(body);
  }
}
