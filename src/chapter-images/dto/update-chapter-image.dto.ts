import { PartialType } from '@nestjs/swagger';
import { CreateChapterImageDto } from './create-chapter-image.dto';

export class UpdateChapterImageDto extends PartialType(CreateChapterImageDto) {}
