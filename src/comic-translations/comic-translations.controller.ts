import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComicTranslationsService } from './comic-translations.service';
import { CreateComicTranslationDto } from './dto/create-comic-translation.dto';
import { UpdateComicTranslationDto } from './dto/update-comic-translation.dto';

@Controller('comic-translations')
export class ComicTranslationsController {
  constructor(
    private readonly comicTranslationsService: ComicTranslationsService,
  ) {}

  @Post()
  create(@Body() createComicTranslationDto: CreateComicTranslationDto) {
    return this.comicTranslationsService.create(createComicTranslationDto);
  }

  @Get()
  findAll() {
    return this.comicTranslationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicTranslationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComicTranslationDto: UpdateComicTranslationDto,
  ) {
    return this.comicTranslationsService.update(+id, updateComicTranslationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicTranslationsService.remove(+id);
  }
}
