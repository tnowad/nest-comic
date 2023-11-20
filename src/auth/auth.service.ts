import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CryptoService } from '../crypto/crypto.service';
import { JwtService } from '@nestjs/jwt';
import { EmailSignInDto } from './dto/email-sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
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

  async signIn(signInDto: EmailSignInDto) {
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

  async generateTokens(user: User) {
    const accessToken = await this.generateToken(user);
    const refreshToken = await this.generateToken(user, '7d', 'refresh');

    return { accessToken, refreshToken };
  }

  async generateToken(user: User, expiresIn?: string, secret?: string) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    return this.jwtService.sign(payload, {
      ...(expiresIn && { expiresIn }),
      ...(secret && { secret }),
    });
  }
}
