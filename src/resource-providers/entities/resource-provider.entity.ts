import {
  Column,
  Entity,
  OneToMany,
  Point,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChapterImage } from '../../chapter-images/entities/chapter-image.entity';

@Entity({
  name: 'resource_providers',
})
export class ResourceProvider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('point', {
    name: 'location',
    nullable: true,
  })
  location: Point;

  @Column('text')
  description: string;

  @Column('text')
  url: string;

  @OneToMany(() => ChapterImage, (image) => image.resourceProvider)
  images: ChapterImage[];
}
