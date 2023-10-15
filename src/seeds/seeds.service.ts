import { Injectable } from '@nestjs/common';
import { Language } from 'src/languages/entities/language.entity';
import { EntityManager } from 'typeorm';
import { languages } from './lanuages.data';

@Injectable()
export class SeedsService {
  constructor(private readonly entityManager: EntityManager) {}

  async perform() {
    await this.entityManager.transaction(async (manager) => {
      await this.createDefaultLanguage(manager);
    });
  }

  async createDefaultLanguage(entityManager: EntityManager) {
    entityManager.clear(Language);
    await entityManager.save(Language, languages);
  }
}
