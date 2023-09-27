import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      developer: 'Nguyen Minh Tuan - github.com/tnowad',
      repository: 'https://github.com/tnowad/nest-comic',
      description: 'This is NestComic API - Backend of NextComic',
      version: '1.0',
    };
  }
}
