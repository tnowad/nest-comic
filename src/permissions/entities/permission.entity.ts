import { MongoQuery } from '@casl/ability';
import { AnyObject } from '@casl/ability/dist/types/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'permissions',
  comment: 'Table defining user roles and access permissions',
})
export class Permission<Entity = AnyObject> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  action: string;

  @Column()
  subject: string;

  @Column('json', { nullable: true })
  conditions?: MongoQuery<Entity>;
}
