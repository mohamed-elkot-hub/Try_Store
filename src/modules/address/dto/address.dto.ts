import { IsOptional, IsString, Max, Min } from 'class-validator';

export class AddressDto {
  @IsString()
  userId!: string;
  @IsString()
  @Min(4)
  @Max(10)
  city!: string;
  @IsString()
  country!: string;
  @IsString()
  @IsOptional()
  detailes!: string;
}
