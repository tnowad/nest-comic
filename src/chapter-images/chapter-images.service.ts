import { Injectable } from '@nestjs/common';
import { CreateChapterImageDto } from './dto/create-chapter-image.dto';
import { UpdateChapterImageDto } from './dto/update-chapter-image.dto';

@Injectable()
export class ChapterImagesService {
  create(createChapterImageDto: CreateChapterImageDto) {
    console.log('createChapterImageDto', createChapterImageDto);
    return 'This action adds a new chapterImage';
  }

  findAll() {
    return `This action returns all chapterImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chapterImage`;
  }

  update(id: number, updateChapterImageDto: UpdateChapterImageDto) {
    console.log('updateChapterImageDto', updateChapterImageDto);
    return `This action updates a #${id} chapterImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} chapterImage`;
  }
}
