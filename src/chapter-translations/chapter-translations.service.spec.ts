import { Test, TestingModule } from '@nestjs/testing';
import { ChapterTranslationsService } from './chapter-translations.service';

describe('ChapterTranslationsService', () => {
  let service: ChapterTranslationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterTranslationsService],
    }).compile();

    service = module.get<ChapterTranslationsService>(ChapterTranslationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
