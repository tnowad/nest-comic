import { Body, Controller, Post } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: EmailSignUpDto) {
    return this.authService.signUp(signUpDto);
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
