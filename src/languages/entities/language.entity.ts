import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ComicTranslation } from '../../comic-translations/entities/comic-translation.entity';
import { ChapterTranslation } from '../../chapter-translations/entities/chapter-translation.entity';

@Entity({
  name: 'languages',
  comment: 'Table listing supported languages for comic translations',
})
export class Language {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'name', unique: true })
  name: string;

  @Column('text', { name: 'native_name', unique: true })
  nativeName: string;

  @Column('text', { name: 'code', unique: true })
  code: string;

  @Column('boolean', { name: 'is_rtl' })
  rtl: boolean;

  @OneToMany(() => ComicTranslation, (translation) => translation.language, {
    cascade: ['insert', 'update', 'remove'],
  })
  comicTranslations: ComicTranslation[];

  @OneToMany(() => ChapterTranslation, (translation) => translation.language, {
    cascade: ['insert', 'update', 'remove'],
  })
  chapterTranslations: ChapterTranslation[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
