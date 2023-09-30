import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { Comic } from './entities/comic.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class ComicsService {
  private mockComics: Comic[] = [];
  constructor() {
    this.mockComics = Array.from({ length: 50 }).map(
      (): Comic => ({
        id: faker.string.uuid(),
        slug: faker.lorem.slug(),
        title: faker.lorem.paragraph(),
        cover: {
          id: faker.string.uuid(),
          url: faker.image.url(),
          size: 48000,
          width: 640,
          height: 480,
          mime: 'image/jpg',
          format: 'jpg',
        },
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
      }),
    );
  }
  create(createComicDto: CreateComicDto) {
    const newComic: Comic = {
      id: faker.string.uuid(),
      slug: faker.lorem.slug(),
      title: faker.lorem.paragraph(),
      cover: {
        id: faker.string.uuid(),
        url: faker.image.url(),
        size: 48000,
        width: 640,
        height: 480,
        mime: 'image/jpg',
        format: 'jpg',
      },
      ...createComicDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.mockComics.push(newComic);
    return newComic;
  }

  findAll() {
    return this.mockComics;
  }

  findOne(id: string) {
    return this.mockComics.find((comic) => comic.id === id);
  }

  update(id: string, updateComicDto: UpdateComicDto) {
    const existingComic = this.findOne(id);
    if (!existingComic) {
      throw new NotFoundException(`Comic with ID ${id} not found`);
    }

    const updatedComic = {
      ...existingComic,
      ...updateComicDto,
      updatedAt: new Date(),
    };

    const index = this.mockComics.indexOf(existingComic);
    this.mockComics[index] = updatedComic;

    return updatedComic;
  }

  remove(id: string) {
    const existingComic = this.findOne(id);
    if (!existingComic) {
      throw new NotFoundException(`Comic with ID ${id} not found`);
    }

    // Remove the comic from the array
    const index = this.mockComics.indexOf(existingComic);
    this.mockComics.splice(index, 1);
  }
}
