import { Component } from '@angular/core';
import { ignoreElements, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: number[] = [10, 9, 18, 11, 4, 2, 20, 30, 3, 29, 9, 7];
  isodd: boolean = false;

  constructor() {}

  changeOdd() {
    this.isodd = !this.isodd;
    return true;
  }

  getClass(num: number) {
    if (num < 20) {
      return 'redText';
    } else {
      return 'blueText';
    }
  }

  flag: boolean = false;

  // changeColor() {
  //   this.flag = !this.flag;

  //   return true;
  // }

  textBlue = true;

  zmiana() {
    // if (this.flag == false) {
    //   return 'blueText';
    // } else {
    //   return 'pinkText';
    // }
    // this.textBlue = !this.textBlue;

    if (this.textBlue == true) {
      this.textBlue = false;
      return 'textBlue';
    } else {
      return 'greenText';
    }
  }

  isPrimary = false;

  toggleButton() {
    this.isPrimary = !this.isPrimary;
  }

  tablica: number[] = [1, 8, 5, 7, 2];
  index: number = 0;

  zmienna1: number = 0;

  klik() {
    this.zmienna1 = this.tablica[this.index];
    this.index++;

    return this.zmienna1;
  }

  a = 10;
  b = 20;

  myF(a: any, b: any) {
    console.log(a, b); //"Ala", "Ola"
  }

  hello1(message: string) {
    console.log(message);
  }

  test(test1: string) {
    console.log(test1);
  }

  /* */
  tablica1: number[] = [];
  ind: number = 3;

  viewList() {
    this.tablica1.push(this.ind);
    this.ind++;
    return this.ind;
  }

  bgcolor(num: number) {
    if (num > 5) {
      return 'isPrimary';
    }
    return null;
  }

  selected_value: string = '';
  flagx: boolean = false;
  backcol: string = 'red';

  call1(): string {
    this.selected_value = 'call 1';
    this.flagx = true;
    return this.selected_value;
  }

  call2() {
    this.selected_value = 'call 2';
    return this.selected_value;
  }

  call3() {
    this.selected_value = 'call 3';
    return this.selected_value;
  }

  call4() {
    this.selected_value = 'call 4';
    return this.selected_value;
  }

  call5() {
    this.selected_value = 'call 5';
    return this.selected_value;
  }
  name = 'Angular 6';
  // selected_value:string;
  li_id: number = 0;
  myObj = {
    1: 'call 1',
    2: 'call 2',
    3: 'call 3',
    4: 'call 4',
    5: 'call 5',
  };
  getLI_Id(id: number) {
    console.log('get li id', id);
    this.li_id = id;
    let select_li_value = this.myObj[1]; //should be insted of 1 - id
    console.log('select_li_value', select_li_value);
    this.selected_value = select_li_value;
  }

  viewMode = 'map2';

  zmienna: string = '';
  changeCar(wybor: any) {
    this.zmienna = wybor.target.value;
  }
}

var example = new AppComponent();
example.klik();

example.hello1('hello 1 działa');

example.myF('Ala', 'Ola');
