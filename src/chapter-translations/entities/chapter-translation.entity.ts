import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Language } from '../../languages/entities/language.entity';
import { Chapter } from '../../chapters/entities/chapter.entity';
import { ChapterImage } from '../../chapter-images/entities/chapter-image.entity';

@Entity()
export class ChapterTranslation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', {
    name: 'language_id',
  })
  languageId: string;

  @Column('uuid', {
    name: 'chapter_id',
  })
  chapterId: string;

  @OneToMany(() => ChapterImage, (image) => image.chapterTranslation)
  images: ChapterImage[];

  @ManyToOne(() => Language, (language) => language.chapterTranslations)
  language: Language;

  @ManyToOne(() => Chapter, (chapter) => chapter.translations)
  chapter: Chapter;
}
