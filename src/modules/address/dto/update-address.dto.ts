import { IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateAddressDto {
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
