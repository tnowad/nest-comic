import { Test, TestingModule } from '@nestjs/testing';
import { ChapterImagesService } from './chapter-images.service';

describe('ChapterImagesService', () => {
  let service: ChapterImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterImagesService],
    }).compile();

    service = module.get<ChapterImagesService>(ChapterImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
