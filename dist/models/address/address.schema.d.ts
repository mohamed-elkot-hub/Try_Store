import { Types } from 'mongoose';
export type Taddress = Document & Address;
export declare class Address {
    user: Types.ObjectId;
    city: string;
    country: string;
    detailes: string;
}
export declare const AddressSchema: import("mongoose").Schema<Address, import("mongoose").Model<Address, any, any, any, any, any, Address>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Address, import("mongoose").Document<unknown, {}, Address, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Address & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    user?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Address, import("mongoose").Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Address & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    city?: import("mongoose").SchemaDefinitionProperty<string, Address, import("mongoose").Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Address & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    country?: import("mongoose").SchemaDefinitionProperty<string, Address, import("mongoose").Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Address & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    detailes?: import("mongoose").SchemaDefinitionProperty<string, Address, import("mongoose").Document<unknown, {}, Address, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Address & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Address>;
