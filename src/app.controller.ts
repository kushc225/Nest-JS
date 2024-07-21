// src/app.controller.ts
import { Controller, Get, UseGuards, UseInterceptors, UploadedFile, Post } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { RolesGuard } from './roles.guard';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('app')
export class AppController {

  @Get('public')
  getPublicData() {
    return 'This is public data';
  }

  @Get('admin')
  // @UseGuards(RolesGuard)
  getAdminData() {
    return 'This is admin data';
  }
}
