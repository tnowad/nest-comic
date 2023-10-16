import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ComicsModule } from './comics/comics.module';
import { LanguagesModule } from './languages/languages.module';
import { SeedsModule } from './seeds/seeds.module';
import configOptions from './config/options.config';

@Module({
  imports: [ConfigModule.forRoot(configOptions), DatabaseModule, ComicsModule, LanguagesModule, SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
