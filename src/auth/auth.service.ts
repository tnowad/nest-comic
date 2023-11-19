import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async signUp(emailSignUpDto: EmailSignUpDto) {
    const createUserDto: CreateUserDto = {
      ...emailSignUpDto,
    };

    return this.usersService.create(createUserDto);
  }
  async signIn(signInDto: EmailSignUpDto) {
    const user = await this.userRepository.findOne({
      where: { email: signInDto.email },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (user.password !== signInDto.password) {
      throw new BadRequestException('Invalid password');
    }

    return user;
  }
}
