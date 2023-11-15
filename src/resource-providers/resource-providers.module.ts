import { Module } from '@nestjs/common';
import { ResourceProvidersService } from './resource-providers.service';
import { ResourceProvidersController } from './resource-providers.controller';

@Module({
  controllers: [ResourceProvidersController],
  providers: [ResourceProvidersService],
})
export class ResourceProvidersModule {}
