import { Module } from "@nestjs/common";
import { userInfo } from "os";
import { UserMongoModule } from "src/shared/mongo/users-mongo.module";
import { UsersService } from "./users.service";
import { UserController } from "./user.controller";


@Module({
    imports:[UserMongoModule],
    controllers:[UserController],
    providers:[UsersService],
    exports:[UserMongoModule]
})


export class UserModule{}