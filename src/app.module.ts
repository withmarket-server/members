import { Module } from '@nestjs/common';
import { MembersModule } from './members/members.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MembersModule],
})
export class AppModule {}
