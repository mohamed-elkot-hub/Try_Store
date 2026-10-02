import { Injectable } from "@nestjs/common";
import { CloudinaryResponseDto } from "../dto/cloudinary.dto";

@Injectable()
export abstract class StorageService {
  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponseDto|undefined> {
    throw new Error('Method not implemented.');
  }

  async deleteFile(publicId: string): Promise<void> {
    throw new Error('Method not implemented.');
    }
  }