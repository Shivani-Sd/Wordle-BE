import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ValidWords } from './validWords.entity';

@Injectable()
export class ValidWordsService {
  constructor(
    @InjectRepository(ValidWords)
    private wordRepository: Repository<ValidWords>,
  ) {}

  async getAllValidWords(): Promise<ValidWords[]> {
    return await this.wordRepository.find();
  }

  async isWordValid(word: string): Promise<boolean> {
    const findWord = await this.wordRepository.findOneBy({ word });
    if (findWord) return true;
    else return false;
  }
}
