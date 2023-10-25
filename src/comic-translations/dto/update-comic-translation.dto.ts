import { PartialType } from '@nestjs/mapped-types';
import { CreateComicTranslationDto } from './create-comic-translation.dto';

export class UpdateComicTranslationDto extends PartialType(CreateComicTranslationDto) {}
