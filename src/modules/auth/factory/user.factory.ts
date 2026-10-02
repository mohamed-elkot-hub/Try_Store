import { Injectable } from '@nestjs/common';
import { PassowrdHashedService } from 'src/common/security/password-hashed.service';
import { RegisterAuthDto } from '../dto/register-customer.auth';
import { RegisterEntity } from '../entities/auth.entity';

@Injectable()
export class UserFactoryService {
  constructor(private readonly passowrdHashService: PassowrdHashedService) {}
  async creatRegisterUser(registerAuthDto: RegisterAuthDto) {
    const newUser = new RegisterEntity();
    newUser.firstName = registerAuthDto.firstName.toLowerCase().trim();
    newUser.lastName = registerAuthDto.firstName.toLowerCase().trim();
    newUser.email = registerAuthDto.email;
    newUser.phoneNumber = registerAuthDto.phoneNumber;
    newUser.password = await this.passowrdHashService.hash(
      registerAuthDto.password,
    );
    return newUser;
  }
}
