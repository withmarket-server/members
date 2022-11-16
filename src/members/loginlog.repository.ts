import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { LoginLog } from "./entity/loginlog.entity";

@Injectable()
export class LoginLogRepository {
    constructor(
        @InjectRepository(LoginLog) 
            private readonly loginLogRepository: Repository<LoginLog>,
    ) {}
}