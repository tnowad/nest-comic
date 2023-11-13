import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserStatus } from '../entities/user.entity';

export class CreateUserDto {
  @IsEmail({}, { message: 'Must be a valid email address' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;

  @IsString()
  @IsOptional()
  @MaxLength(20, {
    message: 'Phone number cannot be longer than 20 characters',
  })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @MaxLength(50, { message: 'First name cannot be longer than 50 characters' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'Middle name cannot be longer than 50 characters' })
  middleName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @MaxLength(50, { message: 'Last name cannot be longer than 50 characters' })
  lastName: string;

  @IsString()
  @IsOptional()
  @MaxLength(100, { message: 'Full name cannot be longer than 100 characters' })
  fullName: string;

  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'Nickname cannot be longer than 50 characters' })
  nickname: string;

  @IsEnum(UserStatus, {
    message: `Status must be one of the following values: ${Object.values(
      UserStatus,
    ).join(', ')}`,
  })
  status: UserStatus;
}
