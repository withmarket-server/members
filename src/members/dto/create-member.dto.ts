import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MemberAlarm } from '../model/member-alarm.enum';
import { MemberStatus } from '../model/member-status.enum';

export class CreateMemberDto {

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  memberName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  memberId: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
      message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
    })
  password: string;
  
  alarmFlag: string = MemberAlarm.ACTIVE;
  
  status: MemberStatus = MemberStatus.ACTIVE;

  createdAt: Date = new Date();
  
  modifiedAt: Date = new Date();
  
}