import { IsEmail, IsString, MinLength } from 'class-validator';

export class resetPasswordDto {
  @IsEmail()
  email!: string;

  @IsString()
  otp!: string;

  @IsString()
  @MinLength(6)
  newPassword!: string;
}
