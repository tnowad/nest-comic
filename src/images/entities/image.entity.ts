import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'images' })
export class Image {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('int', { name: 'width' })
  width: number;

  @Column('int', { name: 'height' })
  height: number;

  @Column('varchar', { name: 'url' })
  url: string;

  @Column('varchar', { name: 'mime', length: 50 })
  mime: string;

  @Column('int', { name: 'size' })
  size: number;

  @Column('varchar', { name: 'format' })
  format: string;
}
