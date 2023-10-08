import { ConfigModuleOptions } from '@nestjs/config';
import appConfig from './app.config';

const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [appConfig],
  envFilePath: '.env',
};

export default configOptions;
