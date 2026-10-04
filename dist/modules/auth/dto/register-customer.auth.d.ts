import { Role } from '../../../common/Enum/role.enum';
export declare class RegisterAuthDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rePassword: string;
    phoneNumber: string;
    role: Role;
}
