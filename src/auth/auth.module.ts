import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { CryptoModule } from '../crypto/crypto.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    CryptoModule,
    JwtModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
