import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    getProfile(user: any): Promise<{
        message: string;
        data: {
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
        };
    }>;
    updateAcount(user: any, updateuserDto: UpdateUserDto): Promise<{
        message: string;
    }>;
}
