import { Component, Input, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  constructor() {}

  @Input() title: String;
  @Input() words: WordType[];

  ngOnInit(): void {}
}
