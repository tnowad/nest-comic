import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import type { Configurations, WasValidated } from './config/configurations';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<Configurations, WasValidated>);

  await app.listen(configService.getOrThrow('app.appPort', { infer: true }));
}
bootstrap();
