import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';

@Module({
  imports: [ComicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
