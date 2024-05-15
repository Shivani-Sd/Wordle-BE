import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ValidWords {
  @PrimaryColumn()
  word: string;
}
