import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ChapterTranslation } from '../../chapter-translations/entities/chapter-translation.entity';
import { ResourceProvider } from '../../resource-providers/entities/resource-provider.entity';

@Entity({
  name: 'chapter_images',
  comment: 'Table containing images for different chapters',
})
export class ChapterImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'chapter_translation_id' })
  chapterTranslationId: string;

  @Column('uuid', { name: 'resource_provider_id' })
  resourceProviderId: string;

  @Column('text', { name: 'url' })
  url: string;

  @Column('decimal', { name: 'order' })
  order: number;

  @Column('text', { name: 'alt_text' })
  altText: string;

  @Column('text', { name: 'description' })
  description: string;

  @ManyToOne(() => ChapterTranslation, (translation) => translation.images)
  chapterTranslation: ChapterTranslation;

  @ManyToOne(() => ResourceProvider, (provider) => provider.images)
  resourceProvider: ResourceProvider;
}
