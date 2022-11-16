import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  import { MemberStatus } from '../model/member-status.enum';
  
  @Entity()
  @Unique(['memberId'])
  export class Members extends BaseEntity {
  
      // 회원번호 - pk
      @PrimaryGeneratedColumn()
      id: number;
  
      // 휴대폰번호
      @Column({nullable: true})
      phone: string;

      @Column()
      email: string;
  
      // 사용자 입력 계정 id
      @Column()
      memberId: string;
  
      // 비밀번호
      @Column()
      password: string;
  
      // 이름
      @Column({nullable: true})
      memberName: string;
  
      // 활성상태
      @Column({nullable: true})
      status: MemberStatus;
  
      // 알림설정
      @Column({nullable: true})
      alarmFlag: string;
  
      // 생성일자
      @Column({type: "timestamp", nullable: true})
      createdAt: Date;
  
      // 수정일자
      // @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true})
      @Column({type: "timestamp", nullable: true})
      modifiedAt: Date;
  
      // 삭제일자
      @Column({type: "timestamp", nullable: true})
      deletedAt: Date;
  
  }
  