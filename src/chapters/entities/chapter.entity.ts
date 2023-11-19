import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', {
    name: 'order',
  })
  order: number;

}
