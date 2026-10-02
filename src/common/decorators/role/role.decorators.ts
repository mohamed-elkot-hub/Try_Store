import { SetMetadata } from "@nestjs/common";
import { Role } from "src/common/Enum/role.enum";


export const ROLE =(...role:Role[])=>{
    return SetMetadata('role',role);
}