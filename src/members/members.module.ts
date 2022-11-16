import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { Members } from './entity/members.entity';
import { MembersService } from './members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginLog } from './entity/loginlog.entity';
import { GetMember } from './decorator/get-member.dacorator';

@Module({
  controllers: [MembersController],
  providers: [MembersService], 
  imports: 
    [TypeOrmModule.forFeature([Members, LoginLog])],
})
export class MembersModule {}
