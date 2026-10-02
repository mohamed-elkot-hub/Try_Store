import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary/cloudinary.provider';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { StorageService } from './abstract/storage.service';

@Module({
  providers: [
    CloudinaryProvider,
    CloudinaryService,
    {
      provide: StorageService,
      useExisting: CloudinaryService,
    },
  ],
  exports: [StorageService,CloudinaryService],
})
export class CloudModule {}
