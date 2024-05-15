import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Words } from './words.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Words)
    private wordRepository: Repository<Words>,
  ) {}

  async addWord(word: string, isToday: boolean): Promise<Words> {
    const dailyWord = this.wordRepository.create({
      word: word,
      isToday: isToday,
    });
    await this.wordRepository.save(dailyWord);
    return dailyWord;
  }

  async getAllWords(): Promise<Words[]> {
    return await this.wordRepository.find();
  }

  async getDailyWord(): Promise<Words> {
    return await this.wordRepository.findOneBy({ isToday: true });
  }
}
