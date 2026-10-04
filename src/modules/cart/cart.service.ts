import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Types } from 'mongoose';

import { CartDto } from './dto/cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

import { CartRepository } from '../../models/cart/cart.repository';
import { ProductRepository } from '../../models/product/product.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  // =========================
  // Add Product To Cart
  // =========================
  async addToCart(userId: string, cartDto: CartDto) {
    const userObjectId = new Types.ObjectId(userId);

    // 1. Check Product exists
    const product = await this.productRepository.getOne({
      _id: cartDto.productId,
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // 2. Check quantity
    if (cartDto.quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }

    // 3. Check stock
    if (cartDto.quantity > product.stock) {
      throw new BadRequestException(
        `Only ${product.stock} items are available`,
      );
    }

    // 4. Get user's cart
    const cart = await this.cartRepository.getOne({
      userId: userObjectId,
    });

    // ==================================
    // Cart does not exist -> Create cart
    // ==================================
    if (!cart) {
      return await this.cartRepository.create({
        userId: userObjectId,

        items: [
          {
            productId: product._id,
            quantity: cartDto.quantity,
            price: product.price,
            finalPrice: product.finalPrice,
          },
        ],

        totalPrice: product.finalPrice * cartDto.quantity,
      });
    }

    // ==================================
    // Check if product already exists
    // ==================================
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === product._id.toString(),
    );

    // ==================================
    // Product already exists
    // ==================================
    if (existingItem) {
      const newQuantity = existingItem.quantity + cartDto.quantity;

      // Check stock after addition
      if (newQuantity > product.stock) {
        throw new BadRequestException(
          `Only ${product.stock} items are available`,
        );
      }

      // Increase quantity + total price
      return await this.cartRepository.updateOne(
        {
          userId: userObjectId,
          'items.productId': product._id,
        },
        {
          $inc: {
            'items.$.quantity': cartDto.quantity,
            totalPrice: product.finalPrice * cartDto.quantity,
          },
        },
      );
    }

    // ==================================
    // Product does not exist -> Push item
    // ==================================
    return await this.cartRepository.updateOne(
      {
        userId: userObjectId,
      },
      {
        $push: {
          items: {
            productId: product._id,
            quantity: cartDto.quantity,
            price: product.price,
            finalPrice: product.finalPrice,
          },
        },

        $inc: {
          totalPrice: product.finalPrice * cartDto.quantity,
        },
      },
    );
  }

  // =========================
  // Get User Cart
  // =========================
  async getCart(userId: string) {
    const userObjectId = new Types.ObjectId(userId);

    const cart = await this.cartRepository.getOne({
      userId: userObjectId,
    });

    if (!cart) {
      return {
        userId: userObjectId,
        items: [],
        totalPrice: 0,
      };
    }

    return cart;
  }

  // =========================
  // Update Quantity
  // =========================
async updateQuantity(
  userId: string,
  updateCartDto: UpdateCartDto,
) {
  const userObjectId = new Types.ObjectId(userId);
  const productObjectId = new Types.ObjectId(
    updateCartDto.productId,
  );

  console.log('userId:', userObjectId);
  console.log('productId:', productObjectId);
  console.log('quantity:', updateCartDto.quantity);

  const cart = await this.cartRepository.getOne({
    userId: userObjectId,
  });

  console.log('cart:', cart);

  if (!cart) {
    throw new NotFoundException('Cart not found');
  }

  const item = cart.items.find(
    (item) =>
      item.productId.toString() ===
      productObjectId.toString(),
  );

  console.log('item:', item);

  if (!item) {
    throw new NotFoundException(
      'Product not found in cart',
    );
  }

  if (updateCartDto.quantity === 0) {
    return await this.cartRepository.updateOne(
      { _id: cart._id },
      {
        $pull: {
          items: {
            productId: productObjectId,
          },
        },
        $inc: {
          totalPrice: -(item.finalPrice * item.quantity),
        },
      },
    );
  }

  const product = await this.productRepository.getOne({
    _id: productObjectId,
  });

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  if (updateCartDto.quantity > product.stock) {
    throw new BadRequestException(
      `Only ${product.stock} items are available`,
    );
  }

  const oldTotal =
    item.finalPrice * item.quantity;

  const newTotal =
    product.finalPrice * updateCartDto.quantity;

  const difference = newTotal - oldTotal;

  const result = await this.cartRepository.updateOne(
    {
      _id: cart._id,
      'items.productId': productObjectId,
    },
    {
      $set: {
        'items.$.quantity': updateCartDto.quantity,
        'items.$.price': product.price,
        'items.$.finalPrice': product.finalPrice,
      },
      $inc: {
        totalPrice: difference,
      },
    },
  );

  console.log('update result:', result);

  return result;
}
  // =========================
  // Clear Cart
  // =========================
  async clearCart(userId: string) {
    const userObjectId = new Types.ObjectId(userId);

    const cart = await this.cartRepository.getOne({
      userId: userObjectId,
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return await this.cartRepository.updateOne(
      {
        userId: userObjectId,
      },
      {
        $set: {
          items: [],
          totalPrice: 0,
        },
      },
    );
  }
  
}
