import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PASSPWORD_SALT_ROUNDS } from '../core/constants';

@Injectable()
export class CryptoService {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, PASSPWORD_SALT_ROUNDS);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
