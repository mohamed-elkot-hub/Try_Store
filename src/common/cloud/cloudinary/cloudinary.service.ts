import { Inject, Injectable } from '@nestjs/common';
import { StorageService } from '../abstract/storage.service';
import { v2 as Cloudinary } from 'cloudinary';
import { CloudinaryResponseDto } from '../dto/cloudinary.dto';
import { unlink } from "fs/promises";

@Injectable()
export class CloudinaryService extends StorageService {
  constructor(
    @Inject('CLOUDINARY') private readonly cloudinary: typeof Cloudinary,
  ) {
    super();
  }


async uploadFile(
  file: Express.Multer.File,
): Promise<CloudinaryResponseDto> {
  return await new Promise((resolve, reject) => {
    const stream =  this.cloudinary.uploader.upload_stream(
      {
        folder: "Try-Store",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          url: result!.secure_url,
          public_id: result!.public_id,
        });
      },
    );

    stream.end(file.buffer);
  });
}

// async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponseDto> {
//   try {
//     const result = await this.cloudinary.uploader.upload(file.path, {
//       folder: "e-commerce-app",
//     });

//     // حذف الملف بعد الرفع
//     await unlink(file.path);

//     return {
//       url: result.secure_url,
//       public_id: result.public_id,
//     };
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

  async deleteFile(publicId: string): Promise<void> {
    await this.cloudinary.uploader.destroy(publicId);
  }
}
