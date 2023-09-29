import { Comic } from 'src/comics/entities/comic.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'author' })
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  role: string;

  @Column()
  name: string;

  @Column()
  avatarImage: string;

  @Column()
  slug: string;

  @Column()
  sex: string;

  @Column({ type: 'date' })
  birthday: Date;

  @Column()
  description: string;

  @OneToMany(() => Comic, (comic) => comic.authors)
  comics: Comic[];
}
