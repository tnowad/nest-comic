import { Test, TestingModule } from '@nestjs/testing';
import { ComicTranslationsController } from './comic-translations.controller';
import { ComicTranslationsService } from './comic-translations.service';

describe('ComicTranslationsController', () => {
  let controller: ComicTranslationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComicTranslationsController],
      providers: [ComicTranslationsService],
    }).compile();

    controller = module.get<ComicTranslationsController>(ComicTranslationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
