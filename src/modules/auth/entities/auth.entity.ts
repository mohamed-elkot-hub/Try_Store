import { Role } from "../../../common/Enum/role.enum";

export class RegisterEntity {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  role!: Role;
  address!: string;
}
