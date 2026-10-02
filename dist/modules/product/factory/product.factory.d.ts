import { ProductDto } from '../dto/product.dto';
import { ProductEntity } from '../entities/product.entity';
import { CloudinaryResponseDto } from "../../../common/cloud/dto/cloudinary.dto";
export declare class ProductFactoryService {
    createProductEntity(productDto: ProductDto, mainImage: CloudinaryResponseDto, subImages: CloudinaryResponseDto[]): Promise<ProductEntity>;
}
