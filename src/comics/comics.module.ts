import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { Comic } from './entities/comic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comic])],
  controllers: [ComicsController],
  providers: [ComicsService],
})
export class ComicsModule {}
