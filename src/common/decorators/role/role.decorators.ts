import { SetMetadata } from "@nestjs/common";
import { Role } from "../../Enum/role.enum";


export const ROLE =(...role:Role[])=>{
    return SetMetadata('role',role);
}