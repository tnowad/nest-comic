import { IsEnum, IsString } from 'class-validator';
import { ComicStatus } from '../entities/comic.entity';

export class CreateComicDto {
  @IsString()
  title: string;

  @IsEnum(ComicStatus)
  status: ComicStatus;

  @IsString()
  description: string;
}
