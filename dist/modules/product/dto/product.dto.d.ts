import { DiscountEnum } from '../../../common/Enum/discount.enum';
export declare class ProductDto {
    name: string;
    description: string;
    price: number;
    categoryId: string;
    stock: number;
    discountType: DiscountEnum;
    discount: number;
    finalPrice: number;
    mainImage: string;
    subImages: string[];
}
