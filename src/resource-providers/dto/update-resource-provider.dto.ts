import { PartialType } from '@nestjs/swagger';
import { CreateResourceProviderDto } from './create-resource-provider.dto';

export class UpdateResourceProviderDto extends PartialType(CreateResourceProviderDto) {}
