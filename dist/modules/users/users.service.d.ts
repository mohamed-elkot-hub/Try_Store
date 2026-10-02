import { CustomerRepository } from './../../models/customer/customer.repository';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly customerRepository;
    constructor(customerRepository: CustomerRepository);
    getProfile(userId: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        isNew: boolean;
        schema: import("mongoose").Schema;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumer: string;
        __v: number;
    }>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteUser(userId: string): Promise<import("mongodb").DeleteResult>;
}
