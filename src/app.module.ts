import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ComicsModule } from './comics/comics.module';
import { LanguagesModule } from './languages/languages.module';
import { SeedsModule } from './seeds/seeds.module';
import { ComicTranslationsModule } from './comic-translations/comic-translations.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ChaptersModule } from './chapters/chapters.module';
import { ChapterTranslationsModule } from './chapter-translations/chapter-translations.module';
import { VolumesModule } from './volumes/volumes.module';
import { ChapterImagesModule } from './chapter-images/chapter-images.module';
import { ResourceProvidersModule } from './resource-providers/resource-providers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CryptoModule } from './crypto/crypto.module';
import configOptions from './config/options.config';
import { JwtModule } from '@nestjs/jwt';
import { Configurations } from './config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<Configurations>) => ({
        secret: configService.get('jwt.secret', { infer: true }),
        signOptions: { expiresIn: '5m' },
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    ComicsModule,
    LanguagesModule,
    SeedsModule,
    ComicTranslationsModule,
    UsersModule,
    AuthModule,
    PermissionsModule,
    ChaptersModule,
    ChapterTranslationsModule,
    VolumesModule,
    ChapterImagesModule,
    ResourceProvidersModule,
    TransactionsModule,
    CryptoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
