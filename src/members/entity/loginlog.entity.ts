import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Members } from './members.entity';

@Entity()
export class LoginLog extends BaseEntity { // api 게이트웨이나 인증 서버로 옮기기

    // pk
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: Number })
    id: number;

    // 휴대폰번호
    @Column()
    @ApiProperty({ type: Date })
    loginAt: Date;

    // 로그인 로그 테이블과 회원의 연관관계 설정
    @ManyToOne((type) => Members, (member) => member.id, { eager: false })
    @ApiProperty({ type: Members })
    member: Members;

    // 디바이스 정보
    @Column()
    @ApiProperty({ type: String })
    device: string;

}
