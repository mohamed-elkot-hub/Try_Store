import {
  IsArray,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

import { DiscountEnum } from '../../../common/Enum/discount.enum';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNumber()
  @IsPositive()
  price!: number;

  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  @IsNumber()
  @Min(0)
  stock!: number;

  @IsEnum(DiscountEnum)
  discountType!: DiscountEnum;

  @IsNumber()
  @Min(0)
  discount!: number;

  @IsNumber()
  @IsPositive()
  finalPrice!: number;

  @IsNotEmpty()
  @IsString()
  mainImage!: string;

  @IsArray()
  @IsString({ each: true })
  subImages!: string[];
}