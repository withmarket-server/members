import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Members } from '../entity/members.entity';

// @UseGuards(AuthGuard()) 사용 시 req로 user를 받을 수 있는데
// 이 req를 Member 객체로 변환해서 Member 객체로 받고싶을 때
export const GetMember = createParamDecorator(
  (data, ctx: ExecutionContext): Members => {
    const req = ctx.switchToHttp().getRequest();
    return req.member;
  },
);