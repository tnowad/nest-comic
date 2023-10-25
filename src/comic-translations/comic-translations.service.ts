import { Injectable } from '@nestjs/common';
import { CreateComicTranslationDto } from './dto/create-comic-translation.dto';
import { UpdateComicTranslationDto } from './dto/update-comic-translation.dto';

@Injectable()
export class ComicTranslationsService {
  create(createComicTranslationDto: CreateComicTranslationDto) {
    console.log(createComicTranslationDto);
    return 'This action adds a new comicTranslation';
  }

  findAll() {
    return `This action returns all comicTranslations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comicTranslation`;
  }

  update(id: number, updateComicTranslationDto: UpdateComicTranslationDto) {
    console.log(updateComicTranslationDto);
    return `This action updates a #${id} comicTranslation`;
  }

  remove(id: number) {
    return `This action removes a #${id} comicTranslation`;
  }
}
