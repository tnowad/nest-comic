import { Module } from '@nestjs/common';
import { ComicTranslationsService } from './comic-translations.service';
import { ComicTranslationsController } from './comic-translations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComicTranslation } from './entities/comic-translation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComicTranslation])],
  controllers: [ComicTranslationsController],
  providers: [ComicTranslationsService],
})
export class ComicTranslationsModule {}
