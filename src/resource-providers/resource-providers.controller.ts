import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceProvidersService } from './resource-providers.service';
import { CreateResourceProviderDto } from './dto/create-resource-provider.dto';
import { UpdateResourceProviderDto } from './dto/update-resource-provider.dto';

@Controller('resource-providers')
export class ResourceProvidersController {
  constructor(private readonly resourceProvidersService: ResourceProvidersService) {}

  @Post()
  create(@Body() createResourceProviderDto: CreateResourceProviderDto) {
    return this.resourceProvidersService.create(createResourceProviderDto);
  }

  @Get()
  findAll() {
    return this.resourceProvidersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceProvidersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceProviderDto: UpdateResourceProviderDto) {
    return this.resourceProvidersService.update(+id, updateResourceProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceProvidersService.remove(+id);
  }
}
