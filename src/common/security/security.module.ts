import { Module } from "@nestjs/common";
import { PassowrdHashedService } from "./password-hashed.service";

@Module({
    providers:[PassowrdHashedService],
    exports:[PassowrdHashedService],
})


export class SecurityModule{}