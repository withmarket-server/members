import { IsDate, IsNotEmpty, IsOptional, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MemberStatus } from '../model/member-status.enum';

export class ModifyMemberDto {

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  status: MemberStatus
  
  @IsString()
  alarmFlag: string
  
  modifiedAt: Date = new Date(); // 수정날짜는 현재날짜

  @IsOptional()
  deletedAt: Date = new Date(); // status 가 SLP 이면 insert

  @IsOptional()
  @Matches(/^[a-zA-Z0-9]*$/, {
      message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
    })
  password: string;

}