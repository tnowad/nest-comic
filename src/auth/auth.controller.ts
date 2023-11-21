import { Body, Controller, Post } from '@nestjs/common';
import { EmailSignUpDto } from './dto/email-sign-up.dto';
import { AuthService } from './auth.service';
import { EmailSignInDto } from './dto/email-sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: EmailSignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: EmailSignInDto) {
    const user = await this.authService.signIn(signInDto);

    const tokens = await this.authService.generateTokens(user);

    return {
      message: 'Sign in successful',
      user,
      tokens,
    };
  }

  @Post('sign-out')
  async signOut() {
    return 'Sign out';
  }
}
