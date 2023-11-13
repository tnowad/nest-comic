import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../constants';

export class EmailSignUpDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Must be a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: 'Password123' })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
  @Matches(PASSWORD_REGEX, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
  })
  password: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  @Matches(PHONE_NUMBER_REGEX, {
    message: 'Phone number must be a valid phone number',
  })
  @IsOptional()
  @MaxLength(20, {
    message: 'Phone number cannot be longer than 20 characters',
  })
  phoneNumber: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @MaxLength(50, { message: 'First name cannot be longer than 50 characters' })
  firstName: string;

  @ApiProperty({ example: 'Micheal' })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'Middle name cannot be longer than 50 characters' })
  middleName: string;

  @ApiProperty({ example: 'Smith' })
  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @MaxLength(50, { message: 'Last name cannot be longer than 50 characters' })
  lastName: string;

  @ApiProperty({ example: 'The Dark One' })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'Nickname cannot be longer than 50 characters' })
  nickname: string;
}
