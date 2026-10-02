export declare class Admin {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumer: string;
    Age: string;
    isActive: Boolean;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, any, any, Admin>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, import("mongoose").Document<unknown, {}, Admin, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    firstName?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    lastName?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    phoneNumer?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    Age?: import("mongoose").SchemaDefinitionProperty<string, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<Boolean, Admin, import("mongoose").Document<unknown, {}, Admin, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Admin>;
