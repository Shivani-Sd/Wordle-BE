import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ValidWordsService } from './validWords.service';
import { ValidWordsController } from './validWords.controller';
import { ValidWords } from './validWords.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ValidWords])],
  providers: [ValidWordsService],
  controllers: [ValidWordsController],
})
export class ValidWordsModule {}
