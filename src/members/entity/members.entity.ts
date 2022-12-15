import { ApiProperty } from '@nestjs/swagger';
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
import { MemberAlarm } from '../model/member-alarm.enum';
  import { MemberStatus } from '../model/member-status.enum';
  
  @Entity()
  @Unique(['memberId'])
  export class Members extends BaseEntity {
  
      // 회원번호 - pk
      @PrimaryGeneratedColumn()
      @ApiProperty({ type: Number })
      id: number;
  
      // 휴대폰번호
      @Column({nullable: true})
      @ApiProperty({ type: String })
      phone: string;

      @Column()
      @ApiProperty({ type: String })
      email: string;
  
      // 사용자 입력 계정 id
      @Column()
      @ApiProperty({ type: String })
      memberId: string;
  
      // 비밀번호
      @Column()
      @ApiProperty({ type: String })
      password: string;
  
      // 이름
      @Column({nullable: true})
      memberName: string;
  
      // 활성상태
      @Column({nullable: true})
      @ApiProperty({ type: MemberStatus })
      status: MemberStatus;
  
      // 알림설정
      @Column({nullable: true})
      @ApiProperty({ type: MemberAlarm })
      alarmFlag: MemberAlarm;
  
      // 생성일자
      @Column({type: "timestamp", nullable: true})
      @ApiProperty({ type: Date })
      createdAt: Date;
  
      // 수정일자
      // @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true})
      @Column({type: "timestamp", nullable: true})
      @ApiProperty({ type: Date })
      modifiedAt: Date;
  
      // 삭제일자
      @Column({type: "timestamp", nullable: true})
      @ApiProperty({ type: Date })
      deletedAt: Date;
  
  }
  