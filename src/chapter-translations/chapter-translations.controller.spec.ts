import { Test, TestingModule } from '@nestjs/testing';
import { ChapterTranslationsController } from './chapter-translations.controller';
import { ChapterTranslationsService } from './chapter-translations.service';

describe('ChapterTranslationsController', () => {
  let controller: ChapterTranslationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterTranslationsController],
      providers: [ChapterTranslationsService],
    }).compile();

    controller = module.get<ChapterTranslationsController>(ChapterTranslationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
