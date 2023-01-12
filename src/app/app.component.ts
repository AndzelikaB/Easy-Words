import { Component } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Easy-Words';
  nouns = this.wordsService.getNouns();
  verbs = this.wordsService.getVerbs();

  constructor(private wordsService: WordsService) {}

  // get nouns() {
  //   return this.wordsService.getNouns();
  // }

  // get verbs() {
  //   return this.wordsService.getVerbs();
  // }
}
