import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Allows NestJS to read cookies from incoming requests
  app.use(cookieParser());

  // Allow your frontend to send/receive cookies
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
