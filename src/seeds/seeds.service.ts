import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedsService {
  async perform() {
    console.log('SeedsService.perform()');
  }
}
