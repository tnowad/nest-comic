import { Module } from '@nestjs/common';
import { ChapterImagesService } from './chapter-images.service';
import { ChapterImagesController } from './chapter-images.controller';

@Module({
  controllers: [ChapterImagesController],
  providers: [ChapterImagesService],
})
export class ChapterImagesModule {}
