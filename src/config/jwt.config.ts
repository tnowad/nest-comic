import { registerAs } from '@nestjs/config';
import { IsString, IsInt, IsOptional, IsNotEmpty, Min } from 'class-validator';
import validateConfig from '../utils/validate-config';

class JwtEnvironmentVariablesValidator {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  JWT_SECRET?: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  JWT_EXPIRATION_TIME?: number;

  @IsString()
  @IsOptional()
  JWT_ISSUER?: string;

  @IsString()
  @IsOptional()
  JWT_AUDIENCE?: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  JWT_REFRESH_EXPIRATION_TIME?: number;
}

export type JwtConfig = {
  secret: string;
  expirationTime: number;
  issuer: string;
  audience: string;
  refreshExpirationTime: number;
};

const jwtConfig = registerAs('jwt', (): JwtConfig => {
  const validatedConfig = validateConfig(
    process.env,
    JwtEnvironmentVariablesValidator,
  );

  return {
    secret: validatedConfig.JWT_SECRET || 'defaultSecret',
    expirationTime: validatedConfig.JWT_EXPIRATION_TIME || 3600,
    issuer: validatedConfig.JWT_ISSUER || 'yourAppIssuer',
    audience: validatedConfig.JWT_AUDIENCE || 'yourAppAudience',
    refreshExpirationTime: validatedConfig.JWT_REFRESH_EXPIRATION_TIME || 86400,
  };
});

export default jwtConfig;
