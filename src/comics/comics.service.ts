import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comic } from './entities/comic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComicsService {
  constructor(
    @InjectRepository(Comic)
    private comicRepository: Repository<Comic>,
  ) {}

  create(createComicDto: CreateComicDto) {
    console.log('createComicDto', createComicDto);

    this.comicRepository.save(createComicDto);

    return 'This action adds a new comic';
  }

  findAll() {
    return this.comicRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} comic`;
  }

  update(id: number, updateComicDto: UpdateComicDto) {
    console.log('updateComicDto', updateComicDto);
    return `This action updates a #${id} comic`;
  }

  remove(id: number) {
    return `This action removes a #${id} comic`;
  }
}
