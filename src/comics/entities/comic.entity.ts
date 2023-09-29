import { Author } from 'src/authors/entities/author.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  totalFollows: number;

  @Column()
  totalComments: number;

  @Column()
  totalViews: number;

  @ManyToMany(() => Author, (author) => author.comics)
  @JoinTable()
  authors: Author[];
  @Column()
  coverImage: string;

  @Column()
  averageRating: number;

  @Column()
  totalRating: number;

  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
