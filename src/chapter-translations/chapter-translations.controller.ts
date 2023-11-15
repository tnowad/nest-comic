import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChapterTranslationsService } from './chapter-translations.service';
import { CreateChapterTranslationDto } from './dto/create-chapter-translation.dto';
import { UpdateChapterTranslationDto } from './dto/update-chapter-translation.dto';

@Controller('chapter-translations')
export class ChapterTranslationsController {
  constructor(private readonly chapterTranslationsService: ChapterTranslationsService) {}

  @Post()
  create(@Body() createChapterTranslationDto: CreateChapterTranslationDto) {
    return this.chapterTranslationsService.create(createChapterTranslationDto);
  }

  @Get()
  findAll() {
    return this.chapterTranslationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterTranslationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChapterTranslationDto: UpdateChapterTranslationDto) {
    return this.chapterTranslationsService.update(+id, updateChapterTranslationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chapterTranslationsService.remove(+id);
  }
}
