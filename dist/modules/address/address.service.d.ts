import { AddressRepository } from '../../models/address/address.repository';
import { AddressDto } from './dto/address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CustomerRepository } from '../../models/customer/customer.repository';
import { Types } from 'mongoose';
export declare class AddressService {
    private readonly addressRepository;
    private readonly customerRepository;
    constructor(addressRepository: AddressRepository, customerRepository: CustomerRepository);
    AddAddress(userId: string, addAdressDto: AddressDto): Promise<(import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | (import("mongoose").Document<unknown, {}, import("../../models/address/address.schema").Taddress, {}, import("mongoose").DefaultSchemaOptions> & {
        _id: Types.ObjectId;
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
    })>;
    updateAddress(userId: string, addressId: string, updateAddressDto: UpdateAddressDto): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteAddress(userId: string, addressId: string): Promise<{
        message: string;
    }>;
}
