import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ComicStatus {
  ON_GOING = 'on_going',
  COMPLETED = 'completed',
  DROPPED = 'dropped',
}

@Entity()
export class Comic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'title' })
  title: string;

  @Column('enum', {
    name: 'status',
    enum: ComicStatus,
    default: ComicStatus.ON_GOING,
  })
  status: ComicStatus;

  @Column('text', { name: 'description' })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
