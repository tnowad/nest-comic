import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
  ) {}

  async signUp(emailSignUpDto: EmailSignUpDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: emailSignUpDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    emailSignUpDto.password = await this.cryptoService.hashPassword(
      emailSignUpDto.password,
    );

    const user = await this.userRepository.save(emailSignUpDto);

    return user;
  }

  async signIn(signInDto: EmailSignUpDto) {
    const user = await this.userRepository.findOne({
      where: { email: signInDto.email },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (
      !(await this.cryptoService.comparePassword(
        signInDto.password,
        user.password,
      ))
    ) {
      throw new BadRequestException('Invalid password');
    }

    return user;
  }
}
