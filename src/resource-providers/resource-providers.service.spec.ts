import { Test, TestingModule } from '@nestjs/testing';
import { ResourceProvidersService } from './resource-providers.service';

describe('ResourceProvidersService', () => {
  let service: ResourceProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceProvidersService],
    }).compile();

    service = module.get<ResourceProvidersService>(ResourceProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
