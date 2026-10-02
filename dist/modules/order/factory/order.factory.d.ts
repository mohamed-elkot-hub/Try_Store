import { TCart } from "../../../models/cart/cart.schema";
import { CreateOrderDto } from "../dto/order.dto";
import { OrderEntity } from "../entities/order.entity";
export declare class OrderFactory {
    createOrder(orderData: CreateOrderDto, cart: TCart): Promise<OrderEntity>;
}
