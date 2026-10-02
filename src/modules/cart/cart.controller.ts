import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';

import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CurrentUser } from 'src/common/decorators/User/user.decorators';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(
    @CurrentUser('sub') userId: string,
    @Body() cartDto: CartDto,
  ) {
    return await this.cartService.addToCart(userId, cartDto);
  }

  @Get()
  async getCart(@CurrentUser('sub') userId: string) {
    return await this.cartService.getCart(userId);
  }

  @Patch('update-quantity')
  async updateQuantity(
    @CurrentUser('sub') userId: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return await this.cartService.updateQuantity(userId, updateCartDto);
  }

  @Patch('clear')
  async clearCart(@CurrentUser('sub') userId: string) {
    return await this.cartService.clearCart(userId);
  }
}
