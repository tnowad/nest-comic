import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChapterImagesService } from './chapter-images.service';
import { CreateChapterImageDto } from './dto/create-chapter-image.dto';
import { UpdateChapterImageDto } from './dto/update-chapter-image.dto';

@Controller('chapter-images')
export class ChapterImagesController {
  constructor(private readonly chapterImagesService: ChapterImagesService) {}

  @Post()
  create(@Body() createChapterImageDto: CreateChapterImageDto) {
    return this.chapterImagesService.create(createChapterImageDto);
  }

  @Get()
  findAll() {
    return this.chapterImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChapterImageDto: UpdateChapterImageDto) {
    return this.chapterImagesService.update(+id, updateChapterImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chapterImagesService.remove(+id);
  }
}
