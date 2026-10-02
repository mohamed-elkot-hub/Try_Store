import mongoose, { Types } from 'mongoose';
import { Role } from "../../common/Enum/role.enum";
export declare class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: Role;
}
export declare const userSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any, any, User>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    firstName?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    lastName?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    password?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phoneNumber?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    role?: mongoose.SchemaDefinitionProperty<Role, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, User>;
