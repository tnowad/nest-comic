import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { ChaptersModule } from './chapters/chapters.module';
import { CharactersModule } from './characters/characters.module';
import { CommentsModule } from './comments/comments.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { TypeormService } from './typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ComicsModule,
    AuthorsModule,
    GenresModule,
    ChaptersModule,
    CharactersModule,
    CommentsModule,
    GroupsModule,
    UsersModule,
    ImagesModule,
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
  ],
  controllers: [AppController],
  providers: [AppService, TypeormService],
})
export class AppModule {}
