import { PartialType } from '@nestjs/swagger';
import { CreateChapterTranslationDto } from './create-chapter-translation.dto';

export class UpdateChapterTranslationDto extends PartialType(CreateChapterTranslationDto) {}
