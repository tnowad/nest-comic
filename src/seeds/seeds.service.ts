import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { languages } from './lanuages.data';
import { Language } from '../languages/entities/language.entity';
import { Permission } from '../permissions/entities/permission.entity';
import { permissions } from '../permissions/permissions.enum';

@Injectable()
export class SeedsService {
  constructor(private readonly entityManager: EntityManager) {}

  async perform() {
    await this.entityManager.transaction(async (manager) => {
      await this.createDefaultLanguage(manager);
      await this.createDefaultPermissions(manager);
    });
  }

  async createDefaultLanguage(entityManager: EntityManager) {
    const existingLanguages = await entityManager.find(Language);

    const newLanguages = languages.filter((language) =>
      existingLanguages.every((l) => l.code !== language.code),
    );

    await entityManager.save(Language, newLanguages);
  }

  async createDefaultPermissions(entityManager: EntityManager) {
    const existingPermissions = await entityManager.find(Permission);

    const newPermissions = permissions.filter((permission) =>
      existingPermissions.every((p) => p.name !== permission.name),
    );

    await entityManager.save(Permission, newPermissions);
  }
}
