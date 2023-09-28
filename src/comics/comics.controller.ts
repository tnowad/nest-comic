import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';

@Controller()
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @MessagePattern('createComic')
  create(@Payload() createComicDto: CreateComicDto) {
    return this.comicsService.create(createComicDto);
  }

  @MessagePattern('findAllComics')
  findAll() {
    return this.comicsService.findAll();
  }

  @MessagePattern('findOneComic')
  findOne(@Payload() id: number) {
    return this.comicsService.findOne(id);
  }

  @MessagePattern('updateComic')
  update(@Payload() updateComicDto: UpdateComicDto) {
    return this.comicsService.update(updateComicDto.id, updateComicDto);
  }

  @MessagePattern('removeComic')
  remove(@Payload() id: number) {
    return this.comicsService.remove(id);
  }
}
