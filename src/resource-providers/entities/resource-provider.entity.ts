import {
  Column,
  Entity,
  Point,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

}
