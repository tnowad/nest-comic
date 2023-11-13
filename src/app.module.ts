import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ComicsModule } from './comics/comics.module';
import { LanguagesModule } from './languages/languages.module';
import { SeedsModule } from './seeds/seeds.module';
import { ComicTranslationsModule } from './comic-translations/comic-translations.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import configOptions from './config/options.config';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    DatabaseModule,
    ComicsModule,
    LanguagesModule,
    SeedsModule,
    ComicTranslationsModule,
    UsersModule,
    AuthModule,
    PermissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
