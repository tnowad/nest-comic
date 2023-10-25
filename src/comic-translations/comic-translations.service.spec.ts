import { Test, TestingModule } from '@nestjs/testing';
import { ComicTranslationsService } from './comic-translations.service';

describe('ComicTranslationsService', () => {
  let service: ComicTranslationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComicTranslationsService],
    }).compile();

    service = module.get<ComicTranslationsService>(ComicTranslationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
