import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() greetEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  callParentGreet() {
    this.greetEvent.emit('cody');
  }
}
