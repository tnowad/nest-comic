import { Test, TestingModule } from '@nestjs/testing';
import { ChapterImagesController } from './chapter-images.controller';
import { ChapterImagesService } from './chapter-images.service';

describe('ChapterImagesController', () => {
  let controller: ChapterImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterImagesController],
      providers: [ChapterImagesService],
    }).compile();

    controller = module.get<ChapterImagesController>(ChapterImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
