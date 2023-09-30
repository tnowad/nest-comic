import { Image } from 'src/images/entities/image.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column(() => Image)
  avatar: Image;

  @Column()
  birthday: Date;

  @Column()
  bio: string;
}
