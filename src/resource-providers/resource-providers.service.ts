import { Injectable } from '@nestjs/common';
import { CreateResourceProviderDto } from './dto/create-resource-provider.dto';
import { UpdateResourceProviderDto } from './dto/update-resource-provider.dto';

@Injectable()
export class ResourceProvidersService {
  create(createResourceProviderDto: CreateResourceProviderDto) {
    console.log('createResourceProviderDto', createResourceProviderDto);
    return 'This action adds a new resourceProvider';
  }

  findAll() {
    return `This action returns all resourceProviders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceProvider`;
  }

  update(id: number, updateResourceProviderDto: UpdateResourceProviderDto) {
    console.log('updateResourceProviderDto', updateResourceProviderDto);
    return `This action updates a #${id} resourceProvider`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceProvider`;
  }
}
