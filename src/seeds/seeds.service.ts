import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { languages } from './lanuages.data';
import { Language } from '../languages/entities/language.entity';

@Injectable()
export class SeedsService {
  constructor(private readonly entityManager: EntityManager) {}

  async perform() {
    await this.entityManager.transaction(async (manager) => {
      await this.createDefaultLanguage(manager);
    });
  }

  async createDefaultLanguage(entityManager: EntityManager) {
    const existingLanguages = await entityManager.find(Language);

    const newLanguages = languages.filter((language) =>
      existingLanguages.every((l) => l.code !== language.code),
    );

    await entityManager.save(Language, newLanguages);
  }

}
