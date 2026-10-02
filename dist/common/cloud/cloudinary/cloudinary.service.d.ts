import { StorageService } from '../abstract/storage.service';
import { v2 as Cloudinary } from 'cloudinary';
import { CloudinaryResponseDto } from '../dto/cloudinary.dto';
export declare class CloudinaryService extends StorageService {
    private readonly cloudinary;
    constructor(cloudinary: typeof Cloudinary);
    uploadFile(file: Express.Multer.File): Promise<CloudinaryResponseDto>;
    deleteFile(publicId: string): Promise<void>;
}
