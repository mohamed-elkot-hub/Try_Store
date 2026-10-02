
import {
  IsMongoId,
  IsNumber,
  Min,
} from 'class-validator';

export class UpdateCartDto {
  @IsMongoId()
  productId!: string;

  @IsNumber()
  @Min(0)
  quantity!: number;
}
