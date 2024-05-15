import { Body, Controller, Get, Logger, Post } from '@nestjs/common';

import { ValidWordsService } from './validWords.service';
import { ValidWords } from './validWords.entity';

@Controller('validWords')
export class ValidWordsController {
  private logger = new Logger('ValidWordsController');
  constructor(private validWordsService: ValidWordsService) {}

  @Get()
  getAllValidWords(): Promise<ValidWords[]> {
    return this.validWordsService.getAllValidWords();
  }

  @Post('/isValid')
  isWordValid(@Body('word') word: string): Promise<boolean> {
    this.logger.verbose('Checking if', word, 'is valid ...');
    return this.validWordsService.isWordValid(word);
  }
}
