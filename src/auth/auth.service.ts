import { Injectable } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signUp(emailSignUpDto: EmailSignUpDto) {
    const createUserDto: CreateUserDto = {
      ...emailSignUpDto,
    };

    return this.usersService.create(createUserDto);
  }
}
