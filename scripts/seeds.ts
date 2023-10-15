import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

import { SeedsService } from 'src/seeds/seeds.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const seedsService = app.get(SeedsService);

  await seedsService.perform();

  await app.close();
}
bootstrap();
