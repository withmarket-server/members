import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SignInMemberDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  memberId: string;

  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
      message: 'Password only accepts english and number', // Matches 에 적합하지 않으면 이 메세지 노출
    })
  password: string;
}