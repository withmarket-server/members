import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MemberAlarm } from '../model/member-alarm.enum';
import { MemberStatus } from '../model/member-status.enum';

export class ModifyMemberDto {

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '유저 폰번호' })
  phone: string;

  @IsOptional()
  @ApiProperty({ type: "${MemberStatus}", description: '유저 활동 활성화 상태' })
  status: MemberStatus
  
  @IsString()
  @ApiProperty({ type: "${MemberAlarm}", description: '유저 알람 발송 활성화 상태' })
  alarmFlag: MemberAlarm
  
  @ApiProperty({ type: Date, description: '유저 회원정보 수정 날짜' })
  modifiedAt: Date = new Date(); // 수정날짜는 현재날짜

  @IsOptional()
  @ApiProperty({ type: Date, description: '유저 회원 삭제 날짜' })
  deletedAt: Date = new Date(); // status 가 SLP 이면 insert

  @IsOptional()
  @Matches(/^[a-zA-Z0-9]*$/, {
      message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
    })
  @ApiProperty({ type: String, description: '유저가 입력한 pw 계정' })
  password: string;

}