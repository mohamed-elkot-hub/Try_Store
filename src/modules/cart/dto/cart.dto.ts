import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';

export class CartDto {
  @IsNotEmpty()
  @IsMongoId()
  productId!: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  quantity!: number;
}
