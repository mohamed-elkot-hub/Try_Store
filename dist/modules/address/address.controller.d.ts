import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class addressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    addAddress(user: any, createAddressDto: AddressDto): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
            _id?: unknown;
        } & Required<{
            _id: unknown;
        }> & {
            __v: number;
        } & {
            id: string;
        });
    }>;
    updateAddress(user: any, updateAddressDto: UpdateAddressDto, addressId: string): Promise<{
        message: string;
    }>;
    deleteAddress(user: any, addressId: string): Promise<{
        message: string;
    }>;
}
