import { IsString, Max, Min } from 'class-validator';

export class CategoryDto {
  @IsString()
  @Min(3)
  @Max(20)
  name!: string;
}
