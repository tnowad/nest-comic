import { registerAs } from '@nestjs/config';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import validateConfig from '../utils/validate-config';

enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}

class AppEnvironmentVariablesValidator {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV?: Environment;

  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  APP_PORT?: number;
}

export type AppConfig = {
  nodeEnv: Environment;
  appPort: number;
};

const appConfig = registerAs('app', (): AppConfig => {
  const validatedConfig = validateConfig(
    process.env,
    AppEnvironmentVariablesValidator,
  );

  return {
    nodeEnv: validatedConfig.NODE_ENV || Environment.DEVELOPMENT,
    appPort: validatedConfig.APP_PORT || 3000,
  };
});

export default appConfig;
