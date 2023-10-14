import { IsBoolean, IsString, Length, Matches } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(2, 10)
  @Matches(/^[a-z]{2,3}(-[A-Z]{2})?$/, {
    message: 'Code must be a valid IETF language tag',
  })
  code: string;

  @IsString()
  @Length(1, 100)
  nativeName: string;

  @IsBoolean()
  rtl: boolean;
}
