import { Document, Types } from 'mongoose';
export type TCart = Document & Cart;
export declare class CartItem {
    productId: Types.ObjectId;
    quantity: number;
    price: number;
    finalPrice: number;
}
export declare const CartItemSchema: import("mongoose").Schema<CartItem, import("mongoose").Model<CartItem, any, any, any, any, any, CartItem>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CartItem, Document<unknown, {}, CartItem, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CartItem & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    productId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, CartItem, Document<unknown, {}, CartItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CartItem & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    quantity?: import("mongoose").SchemaDefinitionProperty<number, CartItem, Document<unknown, {}, CartItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CartItem & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, CartItem, Document<unknown, {}, CartItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CartItem & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    finalPrice?: import("mongoose").SchemaDefinitionProperty<number, CartItem, Document<unknown, {}, CartItem, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CartItem & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, CartItem>;
export declare class Cart {
    userId: Types.ObjectId;
    items: CartItem[];
    totalPrice: number;
}
export declare const CartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, any, any, Cart>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, Document<unknown, {}, Cart, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Cart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Cart, Document<unknown, {}, Cart, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    items?: import("mongoose").SchemaDefinitionProperty<CartItem[], Cart, Document<unknown, {}, Cart, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    totalPrice?: import("mongoose").SchemaDefinitionProperty<number, Cart, Document<unknown, {}, Cart, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Cart>;
