import { CategoryRepository } from '../../models/category/category.repository';
import { CategoryDto } from './dto/category.dto';
import { CategoryFactoryService } from './factory/category.factory';
export declare class CategoryService {
    private readonly categoryRepository;
    private readonly categoryFactory;
    constructor(categoryRepository: CategoryRepository, categoryFactory: CategoryFactoryService);
    addCategory(categoryDto: CategoryDto): Promise<(import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    })>;
    getAllCategories(): Promise<(import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/category/category.schema").Category & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getCategoryById(categoryId: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/category/category.schema").Tcategory, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & import("../../models/category/category.schema").Category & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteCategory(categoryId: string): Promise<import("mongodb").DeleteResult>;
}
