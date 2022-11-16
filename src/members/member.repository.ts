import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Members } from "./entity/members.entity";

@Injectable()
export class MemberRepository {
    constructor(
        @InjectRepository(Members) 
            private readonly memberRepository: Repository<Members>,
    ) {}
}