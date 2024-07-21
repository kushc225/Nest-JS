import { Controller, Post, Put, Param, UseInterceptors, UploadedFile, Res, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response, Request } from 'express';
import { UploadService } from './upload.service';
import { join } from 'path';
import { existsSync, unlinkSync } from 'fs';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', new UploadService().getMulterOptions()))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    if (!file) {
      return res.status(400).json({ message: 'File is not provided' });
    }

    console.log('File uploaded:', file);
    return res.status(200).json({
      originalname: file.originalname,
      filename: file.filename,
    });
  }

  @Put(':filename')
  @UseInterceptors(FileInterceptor('file', new UploadService().getMulterOptions()))
  async updateFile(@Param('filename') filename: string, @UploadedFile() file: Express.Multer.File, @Res() res: Response, @Req() req: Request) {
    if (!file) {
      return res.status(400).json({ message: 'File is not provided' });
    }

    const oldFilePath = join(__dirname, '..', 'uploads', filename);

    // Check if the file exists
    if (existsSync(oldFilePath)) {
      // Remove the old file
      unlinkSync(oldFilePath);
    }

    console.log('File updated:', file);
    return res.status(200).json({
      originalname: file.originalname,
      filename: file.filename,
    });
  }
}
