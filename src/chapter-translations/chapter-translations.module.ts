import { Module } from '@nestjs/common';
import { ChapterTranslationsService } from './chapter-translations.service';
import { ChapterTranslationsController } from './chapter-translations.controller';

@Module({
  controllers: [ChapterTranslationsController],
  providers: [ChapterTranslationsService],
})
export class ChapterTranslationsModule {}
