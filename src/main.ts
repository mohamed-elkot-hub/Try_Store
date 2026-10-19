import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

let appPromise: Promise<any> | null = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
     origin: [
    "http://localhost:3000",
    "http://localhost:5173",
  ],
    credentials: true,
  });

  await app.init();

  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: any, res: any) {
  if (!appPromise) {
    appPromise = bootstrap();
  }

  const expressApp = await appPromise;

  return expressApp(req, res);
}
