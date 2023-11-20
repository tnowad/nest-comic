import { PostgresConfig } from '../database/config/postgres.config';
import { AppConfig } from './app.config';
import { JwtConfig } from './jwt.config';

export type Configurations = {
  app: AppConfig;
  postgres: PostgresConfig;
  jwt: JwtConfig;
};

export type WasValidated = true;
