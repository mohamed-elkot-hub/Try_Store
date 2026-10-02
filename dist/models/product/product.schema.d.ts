import mongoose, { Types } from 'mongoose';
import { DiscountEnum } from "../../common/Enum/discount.enum";
export type Tproduct = Document & Product;
export declare class ProductImage {
    url: string;
    public_id: string;
}
export declare const productImageSchema: mongoose.Schema<ProductImage, mongoose.Model<ProductImage, any, any, any, any, any, ProductImage>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ProductImage, mongoose.Document<unknown, {}, ProductImage, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ProductImage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    url?: mongoose.SchemaDefinitionProperty<string, ProductImage, mongoose.Document<unknown, {}, ProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductImage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    public_id?: mongoose.SchemaDefinitionProperty<string, ProductImage, mongoose.Document<unknown, {}, ProductImage, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ProductImage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, ProductImage>;
export declare class Product {
    name: string;
    slug: string;
    description: string;
    price: number;
    categoryId: Types.ObjectId;
    stock: number;
    discountType: DiscountEnum;
    discount: number;
    finalPrice: number;
    mainImage: ProductImage;
    subImages: ProductImage[];
}
export declare const productSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, any, any, Product>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, Product, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Product & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: mongoose.SchemaDefinitionProperty<string, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    slug?: mongoose.SchemaDefinitionProperty<string, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    description?: mongoose.SchemaDefinitionProperty<string, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    price?: mongoose.SchemaDefinitionProperty<number, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    categoryId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    stock?: mongoose.SchemaDefinitionProperty<number, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    discountType?: mongoose.SchemaDefinitionProperty<DiscountEnum, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    discount?: mongoose.SchemaDefinitionProperty<number, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    finalPrice?: mongoose.SchemaDefinitionProperty<number, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    mainImage?: mongoose.SchemaDefinitionProperty<ProductImage, Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    subImages?: mongoose.SchemaDefinitionProperty<ProductImage[], Product, mongoose.Document<unknown, {}, Product, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Product>;
