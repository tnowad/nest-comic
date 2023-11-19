import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity({
  name: 'users',
  comment: 'Table storing user account details and information',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'email', unique: true })
  email: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('text', { name: 'phone_number' })
  phoneNumber: string;

  @Column('text', { name: 'first_name' })
  firstName: string;

  @Column('text', { name: 'middle_name' })
  middleName: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'full_name', nullable: true })
  fullName: string;

  @Column('text', { name: 'nickname' })
  nickname: string;

  @Column('enum', {
    name: 'status',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
