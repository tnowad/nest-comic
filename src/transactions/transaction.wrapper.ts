import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class TransactionWrapper {
  constructor(private readonly dataSource: DataSource) {}

  async executeTransaction<T = unknown>(
    callback: (manager: EntityManager) => Promise<T>,
    manager?: EntityManager,
  ): Promise<T> {
    if (manager) {
      return await callback(manager);
    } else {
      return await this.dataSource.transaction(
        async (manager: EntityManager) => {
          return await callback(manager);
        },
      );
    }
  }
}
