import { CloudinaryResponseDto } from "../dto/cloudinary.dto";
export declare abstract class StorageService {
    uploadFile(file: Express.Multer.File): Promise<CloudinaryResponseDto | undefined>;
    deleteFile(publicId: string): Promise<void>;
}
