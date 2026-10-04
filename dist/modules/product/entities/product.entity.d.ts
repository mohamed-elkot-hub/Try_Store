import { Types } from 'mongoose';
import { CloudinaryResponseDto } from '../../../common/cloud/dto/cloudinary.dto';
import { DiscountEnum } from '../../../common/Enum/discount.enum';
export declare class ProductEntity {
    name: string;
    slug: string;
    description: string;
    price: number;
    categoryId: Types.ObjectId;
    stock: number;
    discountType: DiscountEnum;
    discount: number;
    finalPrice: number;
    mainImage: CloudinaryResponseDto;
    subImages: CloudinaryResponseDto[];
}
