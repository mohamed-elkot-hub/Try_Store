import { IsEmail, IsPhoneNumber, IsString, Max, Min } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Min(3)
  @Max(10)
  firstName!: string;
  @IsString()
  @Min(3)
  @Max(10)
  lastName!: string;
  @IsString()
  @IsPhoneNumber('EG')
  phoneNumber!: string;
}
