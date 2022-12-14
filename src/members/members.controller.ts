import { Body, Controller, Post, UsePipes, ValidationPipe, Logger, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { ModifyMemberDto } from './dto/modify-member.dto';
import { Members } from './entity/members.entity';
import { MembersService } from './members.service';


@Controller('members')
export class MembersController {
    private log = new Logger('MembersController');

    constructor(private membersService: MembersService) {
        CreateMemberDto
    }

    // 회원 가입 (회원 활성 상태 default ACT)
    @Post('/signup')
    signUp(
        @Body(new ValidationPipe({transform: true})) createMemberDto: CreateMemberDto, // ValidationPipe true로 설정해야 dto 오버라이드 돼서 디폴트값 세팅됨
    ): Promise<void> {
        this.log.verbose(`createMemberDto : ${JSON.stringify(createMemberDto)}`);
        return this.membersService.signUp(createMemberDto);
    }
 
    // 회원 조회
    @Get('/:id')
    getMemberById(@Param('id', ParseIntPipe) id: number): Promise<Members> {
        this.log.verbose(`find Member id: ${id}`);
        return this.membersService.getMemberById(id);
    }

    // 회원 정보 수정(탈퇴, 활성상태)
    @Patch('/:id/status')
    modifyMemberById(
      @Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) modifyMemberDto: ModifyMemberDto
    ) {
        this.log.verbose(`Mod Member id: ${id}`);
        this.log.verbose(`Modify target data: ${JSON.stringify(modifyMemberDto)}`);
        
        return this.membersService.modifyMemberById(id, modifyMemberDto);
    }

    // 회원 활성 상태 조회 (ACT / SLP) -> 회원 조회

}
