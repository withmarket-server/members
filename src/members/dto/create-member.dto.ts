import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MemberAlarm } from '../model/member-alarm.enum';
import { MemberStatus } from '../model/member-status.enum';

export class CreateMemberDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: '유저 폰번호' })
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({ type: String, description: '유저 이름' })
  memberName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty({ type: String, description: '유저가 입력한 id 계정' })
  memberId: string;

  @IsEmail()
  @ApiProperty({ type: String, description: '유저 이메일' })
  email: string;

  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
      message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
    })
  @ApiProperty({ type: String, description: '유저가 입력한 pw 계정' })
  password: string;
  
  @ApiProperty({ type: "${MemberAlarm}", description: '유저 알람 발송 활성화 여부' })
  alarmFlag: MemberAlarm = MemberAlarm.ACTIVE;
  
  @ApiProperty({ type: "${MemberStatus}", description: '유저 활동 활성화 상태' })
  status: MemberStatus = MemberStatus.ACTIVE;

  @ApiProperty({ type: Date, description: '유저 회원가입 날짜' })
  createdAt: Date = new Date();
  
  @ApiProperty({ type: Date, description: '유저 회원정보 수정 날짜' })
  modifiedAt: Date = new Date();
  
}