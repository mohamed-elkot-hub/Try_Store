import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(userId: string, cartDto: CartDto): Promise<import("mongoose").UpdateWriteOpResult | (import("mongoose").Document<unknown, {}, import("../../models/cart/cart.schema").TCart, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/cart/cart.schema").TCart, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/cart/cart.schema").TCart, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/cart/cart.schema").TCart, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    })>;
    getCart(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../models/cart/cart.schema").TCart, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/cart/cart.schema").Cart & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | {
        userId: import("mongoose").Types.ObjectId;
        items: never[];
        totalPrice: number;
    }>;
    updateQuantity(userId: string, updateCartDto: UpdateCartDto): Promise<import("mongoose").UpdateWriteOpResult>;
    clearCart(userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
}
