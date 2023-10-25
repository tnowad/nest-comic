import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Comic } from '../../comics/entities/comic.entity';
import { Language } from '../../languages/entities/language.entity';

@Entity()
export class ComicTranslation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'comic_id' })
  comicId: string;

  @Column('uuid', { name: 'language_id' })
  languageId: string;

  @Column('text', { name: 'title' })
  title: string;

  @Column('text', { name: 'description' })
  description: string;

  @ManyToOne(() => Comic, (comic) => comic.translations)
  comic: Comic;

  @ManyToOne(() => Language, (language) => language.comicTranslations)
  language: Language;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
