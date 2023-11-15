import { Injectable } from '@nestjs/common';
import { CreateChapterTranslationDto } from './dto/create-chapter-translation.dto';
import { UpdateChapterTranslationDto } from './dto/update-chapter-translation.dto';

@Injectable()
export class ChapterTranslationsService {
  create(createChapterTranslationDto: CreateChapterTranslationDto) {
    console.log('createChapterTranslationDto', createChapterTranslationDto);
    return 'This action adds a new chapterTranslation';
  }

  findAll() {
    return `This action returns all chapterTranslations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chapterTranslation`;
  }

  update(id: number, updateChapterTranslationDto: UpdateChapterTranslationDto) {
    console.log('updateChapterTranslationDto', updateChapterTranslationDto);
    return `This action updates a #${id} chapterTranslation`;
  }

  remove(id: number) {
    return `This action removes a #${id} chapterTranslation`;
  }
}
