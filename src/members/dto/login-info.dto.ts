import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginInfoDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ type: String, description: '유저가 입력한 id 계정' })
  memberId: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
  })
  @ApiProperty({ type: String, description: '유저가 입력한 pw 계정' })
  password: string;

}