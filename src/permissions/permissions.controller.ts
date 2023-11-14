import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';

@Controller('permissions')
export class PermissionsController {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  @Get()
  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }
}
