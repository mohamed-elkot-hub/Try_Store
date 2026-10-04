import {
  IsEmail,
  IsEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Match } from '../../../common/decorators/validators/match.decorators';
import { Role } from '../../../common/Enum/role.enum';

export class RegisterAuthDto {
  @IsString()
  @Min(3)
  @Max(10)
  firstName!: string;
  @IsString()
  @Min(3)
  @Max(10)
  lastName!: string;
  @IsEmail()
  @IsEmpty()
  email!: string;
  password!: string;
  @IsString()
  @IsEmpty()
  @Match('password', {
    message: 'Passwords do not match',
  })
  rePassword!: string;
  @IsString()
  @IsPhoneNumber()
  phoneNumber!: string;
  @IsString()
  role!: Role;
}
