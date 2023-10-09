import { ConfigModuleOptions } from '@nestjs/config';
import appConfig from './app.config';
import postgresConfig from 'src/database/config/postgres.config';

const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [appConfig, postgresConfig],
  envFilePath: '.env',
};

export default configOptions;
