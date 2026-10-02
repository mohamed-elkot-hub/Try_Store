import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from 'src/common/Enum/status';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatus)
  @IsNotEmpty()
  status!: OrderStatus;
}