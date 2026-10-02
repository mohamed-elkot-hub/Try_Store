import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(productDto: ProductDto, files: {
        mainImage?: Express.Multer.File[];
        subImages?: Express.Multer.File[];
    }): Promise<import("mongoose").UpdateWriteOpResult | (import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    })>;
    getAllProducts(): Promise<(import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & Document & import("../../models/product/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getProductById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & Document & import("../../models/product/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateProduct(id: string, productDto: ProductDto): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteProduct(id: string): Promise<import("mongodb").DeleteResult>;
}
