import { Image } from 'src/images/entities/image.entity';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 50 })
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

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const password = this.password;
    const hashedPassword = await bcrypt.hash(password, process.env.SALT || 8);
    this.password = hashedPassword;
  }
}
