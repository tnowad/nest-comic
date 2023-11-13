import { Body, Controller, Post } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: EmailSignUpDto) {
    console.log(signUpDto);
    return 'Sign up';
  }

  @Post('sign-in')
  async signIn() {
    return 'Sign in';
  }

  @Post('sign-out')
  async signOut() {
    return 'Sign out';
  }
}
