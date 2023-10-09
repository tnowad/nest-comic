import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';

class PostgresEnvironmentVariablesValidator {
  @IsString()
  POSTGRES_URL: string;
}

export type PostgresConfig = {
  url: string;
};

const postgresConfig = registerAs('postgres', (): PostgresConfig => {
  const validatedConfig = validateConfig(
    process.env,
    PostgresEnvironmentVariablesValidator,
  );

  return {
    url: validatedConfig.POSTGRES_URL,
  };
});

export default postgresConfig;
