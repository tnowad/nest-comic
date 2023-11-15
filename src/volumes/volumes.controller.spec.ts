import { Test, TestingModule } from '@nestjs/testing';
import { VolumesController } from './volumes.controller';
import { VolumesService } from './volumes.service';

describe('VolumesController', () => {
  let controller: VolumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolumesController],
      providers: [VolumesService],
    }).compile();

    controller = module.get<VolumesController>(VolumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
