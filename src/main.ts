import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mkdirSync, existsSync } from 'fs';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const uploadDir = './uploads';
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir);
  }
  await app.listen(3000);
}
bootstrap();
