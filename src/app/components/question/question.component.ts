import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  word: WordType = null;
  // word: WordType | null | undefined;
  // word!: WordType | null; //?

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

  check(): void {
    this.wordsService.check();
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
  }
}
