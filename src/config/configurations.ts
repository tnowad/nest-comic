import { PostgresConfig } from 'src/database/config/postgres.config';
import { AppConfig } from './app.config';

export type Configurations = {
  app: AppConfig;
  postgres: PostgresConfig;
};

export type WasValidated = true;
