import { Module } from '@nestjs/common';
import { VolumesService } from './volumes.service';
import { VolumesController } from './volumes.controller';

@Module({
  controllers: [VolumesController],
  providers: [VolumesService],
})
export class VolumesModule {}
