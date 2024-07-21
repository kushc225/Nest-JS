// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';

@Module({
  imports: [],
  controllers: [AppController, UploadController],
  providers: [UploadService],
})
export class AppModule {}
