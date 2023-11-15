import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ComicTranslation } from '../../comic-translations/entities/comic-translation.entity';

export enum ComicStatus {
  ON_GOING = 'on_going',
  COMPLETED = 'completed',
  DROPPED = 'dropped',
}

@Entity({
  name: 'comics',
  comment: 'Table storing main comic details and metadata',
})
export class Comic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', {
    name: 'status',
    enum: ComicStatus,
    default: ComicStatus.ON_GOING,
  })
  status: ComicStatus;

  @Column('uuid', { name: 'default_comic_translation_id' })
  defaultTranslationId: string;

  @OneToOne(() => ComicTranslation, (translation) => translation.comic)
  defaultTranslation: ComicTranslation;

  @OneToMany(() => ComicTranslation, (translation) => translation.comic, {
    cascade: ['insert', 'update', 'remove'],
  })
  translations: ComicTranslation[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
