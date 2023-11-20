import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { TransactionWrapper } from '../transactions/transaction.wrapper';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private transactionWrapper: TransactionWrapper,
    private cryptoService: CryptoService,
  ) {}

  async create(createUserDto: CreateUserDto, manager?: EntityManager) {
    return await this.transactionWrapper.executeTransaction(async (manager) => {
      const existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      createUserDto.password = await this.cryptoService.hashPassword(
        createUserDto.password,
      );

      const user = this.userRepository.create(createUserDto);

      return manager.save(user);
    }, manager);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('updateUserDto', updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
