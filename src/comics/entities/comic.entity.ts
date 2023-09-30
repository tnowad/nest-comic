import { Author } from 'src/authors/entities/author.entity';
import { Image } from 'src/images/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'comic' })
export class Comic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  slug: string;

  @Column()
  title: string;

  @ManyToMany(() => Author, (author) => author.comics)
  @JoinTable()
  authors?: Author[];

  @OneToOne(() => Image)
  @JoinColumn()
  cover: Image;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
