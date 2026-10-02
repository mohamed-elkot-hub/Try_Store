import { Model, PipelineStage, ProjectionType, QueryFilter, QueryOptions, UpdateQuery } from 'mongoose';
export declare abstract class AbstractRepository<T> {
    private _model;
    constructor(_model: Model<T>);
    get model(): Model<T, {}, {}, {}, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>>, any, T>;
    count(filter: QueryFilter<T>): Promise<number>;
    create(item: Partial<T>): Promise<(import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | (import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & {
        _id?: unknown;
    } & Required<{
        _id: unknown;
    }> & {
        __v: number;
    } & {
        id: string;
    })>;
    getOne(filter: QueryFilter<T>, projection?: ProjectionType<T>, options?: QueryOptions): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>> | null>;
    getAll(filter?: QueryFilter<T>, projection?: ProjectionType<T>, options?: QueryOptions): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>>[]>;
    updateOne(filter: QueryFilter<T>, update: UpdateQuery<T>): Promise<import("mongoose").UpdateWriteOpResult>;
    updateAll(filter: QueryFilter<T>, update: UpdateQuery<T>): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteOne(filter: QueryFilter<T>): Promise<import("mongodb").DeleteResult>;
    aggregate(pipeline: PipelineStage[]): Promise<any[]>;
}
