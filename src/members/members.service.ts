import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { Repository } from 'typeorm';
import { Members } from './entity/members.entity';
import * as bcrypt from 'bcryptjs';
import { MemberStatus } from './model/member-status.enum';
import { ModifyMemberDto } from './dto/modify-member.dto';


@Injectable()
export class MembersService {

  private log = new Logger('MembersService');
  
  constructor(
    @InjectRepository(Members)
    private memberRepository: Repository<Members>,
    ) {}
    
    async modifyMemberById(id: number, modifyMemberDto: ModifyMemberDto) {
      const found = await this.getMemberById(id);

      if (modifyMemberDto.status === MemberStatus.SLEEP) {
        found.deletedAt = modifyMemberDto.deletedAt;
      } else {
        found.deletedAt = null;
      }

      // 폰번호
      found.phone = modifyMemberDto.phone;
      
      // 활성상태
      found.status = modifyMemberDto.status;

      // 알람상태
      found.alarmFlag = modifyMemberDto.alarmFlag;

      // 비밀번호
      const salt = await bcrypt.genSalt();
      found.password = await bcrypt.hash(modifyMemberDto.password, salt);
      
      return await this.memberRepository.save(found);
    }

    async getMemberById(id: number): Promise<Members> {
      const found = await this.memberRepository.findOneBy({ id });

      this.log.verbose(`found member: ${JSON.stringify(found)}`);
  
      if (!found) {
        throw new NotFoundException(`Can't find Member with memberId: ${id}`);
      }
  
      return found;
    }

    async signUp(createMemberDto: CreateMemberDto): Promise<void> {
    
        // 비밀번호 암호화
        const salt = await bcrypt.genSalt();
        createMemberDto.password = await bcrypt.hash(createMemberDto.password, salt);

        const member = this.memberRepository.create(createMemberDto);
        this.log.verbose(`member: ${JSON.stringify(member)}`);
    
        try {
          await this.memberRepository.save(member);
        } catch (error) {
          if (error.code === '23505') {
            throw new ConflictException(`Existing memberId`);
          } else {
            console.log(error);
            throw new InternalServerErrorException();
          }
        }
      }

}
