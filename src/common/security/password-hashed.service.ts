import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PassowrdHashedService {
  private readonly saltRound = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRound);
  }

  async compare(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
