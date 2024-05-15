import { Body, Controller, Get, Logger, Post } from '@nestjs/common';

import { Words } from './words.entity';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  private logger = new Logger('WordsController');
  constructor(private wordsService: WordsService) {}

  @Post()
  addWord(
    @Body('word') word: string,
    @Body('isToday') isToday: boolean,
  ): Promise<Words> {
    this.logger.verbose(`User creating a new word "${word}".`);
    return this.wordsService.addWord(word, isToday);
  }

  @Get()
  getAllWords(): Promise<Words[]> {
    return this.wordsService.getAllWords();
  }

  @Get('/today')
  getDailyWord(): Promise<Words> {
    return this.wordsService.getDailyWord();
  }
}
