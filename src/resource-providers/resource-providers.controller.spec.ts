import { Test, TestingModule } from '@nestjs/testing';
import { ResourceProvidersController } from './resource-providers.controller';
import { ResourceProvidersService } from './resource-providers.service';

describe('ResourceProvidersController', () => {
  let controller: ResourceProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceProvidersController],
      providers: [ResourceProvidersService],
    }).compile();

    controller = module.get<ResourceProvidersController>(ResourceProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
