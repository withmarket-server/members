import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Members } from './members.entity';

@Entity()
export class LoginLog extends BaseEntity {

    // pk
    @PrimaryGeneratedColumn()
    id: number;

    // 휴대폰번호
    @Column()
    loginAt: Date;

    // 로그인 로그 테이블과 회원의 연관관계 설정
    @ManyToOne((type) => Members, (member) => member.id, { eager: false })
    member: Members;

    // 디바이스 정보
    @Column()
    device: string;

}
