import { PassowrdHashedService } from "../../../common/security/password-hashed.service";
import { RegisterAuthDto } from '../dto/register-customer.auth';
import { RegisterEntity } from '../entities/auth.entity';
export declare class UserFactoryService {
    private readonly passowrdHashService;
    constructor(passowrdHashService: PassowrdHashedService);
    creatRegisterUser(registerAuthDto: RegisterAuthDto): Promise<RegisterEntity>;
}
