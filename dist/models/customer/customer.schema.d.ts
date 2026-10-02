import mongoose, { Types } from 'mongoose';
export declare class Customer {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumer: string;
}
export declare const CustomerSchema: mongoose.Schema<Customer, mongoose.Model<Customer, any, any, any, any, any, Customer>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Customer, mongoose.Document<unknown, {}, Customer, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Customer & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    firstName?: mongoose.SchemaDefinitionProperty<string, Customer, mongoose.Document<unknown, {}, Customer, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Customer & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    lastName?: mongoose.SchemaDefinitionProperty<string, Customer, mongoose.Document<unknown, {}, Customer, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Customer & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: mongoose.SchemaDefinitionProperty<string, Customer, mongoose.Document<unknown, {}, Customer, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Customer & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    password?: mongoose.SchemaDefinitionProperty<string, Customer, mongoose.Document<unknown, {}, Customer, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Customer & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phoneNumer?: mongoose.SchemaDefinitionProperty<string, Customer, mongoose.Document<unknown, {}, Customer, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Customer & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Customer>;
