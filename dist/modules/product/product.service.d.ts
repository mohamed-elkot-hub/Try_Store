import { ProductDto } from './dto/product.dto';
import { ProductRepository } from '../../models/product/product.repository';
import { ProductFactoryService } from './factory/product.factory';
import { CategoryRepository } from '../../models/category/category.repository';
import { StorageService } from '../../common/cloud/abstract/storage.service';
export declare class ProductService {
    private readonly productFactory;
    private readonly productRepository;
    private readonly categoryRepository;
    private readonly storageServive;
    constructor(productFactory: ProductFactoryService, productRepository: ProductRepository, categoryRepository: CategoryRepository, storageServive: StorageService);
    createProduct(productDto: ProductDto, mainImage: Express.Multer.File | undefined, subImages: Express.Multer.File[]): Promise<import("mongoose").UpdateWriteOpResult | (import("mongoose").Document<unknown, {}, import("../../models/product/product.schema").Tproduct, {}, import("mongoose").DefaultSchemaOptions> & {
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
