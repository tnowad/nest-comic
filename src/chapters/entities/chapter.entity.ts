import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChapterTranslation } from '../../chapter-translations/entities/chapter-translation.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', {
    name: 'order',
  })
  order: number;

  @Column('uuid', {
    name: 'default_chapter_translation_id',
  })
  defaultTranslationId: string;

  @OneToOne(() => ChapterTranslation, (translation) => translation.chapter)
  defaultTranslation: ChapterTranslation;

  @OneToMany(() => ChapterTranslation, (translation) => translation.chapter, {
    cascade: ['insert', 'update', 'remove'],
  })
  translations: ChapterTranslation[];
}
