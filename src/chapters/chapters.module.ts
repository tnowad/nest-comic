import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
