import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: string;
  num2: string;
  operator: string;
  result: string;
  isDot: boolean;

  constructor() {
    this.reset();
  }

  reset() {
    this.num1 = '';
    this.num2 = '';
    this.operator = null;
    this.result = '0';
    this.isDot = false;
  }

  inputNumber(data) {

    if (this.isDot && data === '.') {
      return;
    }

    if (data === '.') {
      this.isDot = true;
    }

    if (!this.operator) {
      // chi nhập tối đa 6 kí tự 1 số
      if (this.num1.length > 6) {
        return;
      }
      this.num1 += data;
      this.result = this.num1;
    } else {
      if (this.num2.length > 6) {
        return;
      }
      this.num2 += data;
      this.result = this.num2;
    }
  }

  setOperator(data) {
    if (!this.operator) {
      this.operator = data;
    }
    this.isDot = false;
  }

  calculator() {
    switch (this.operator) {
      case '/':
        this.result = (parseFloat(this.num1) / parseFloat(this.num2)).toString();
        break;
      case '+':
        this.result = (parseFloat(this.num1) + parseFloat(this.num2)).toString();
        break;
      case '-':
        this.result = (parseFloat(this.num1) - parseFloat(this.num2)).toString();
        break;
      case '*':
        this.result = (parseFloat(this.num1) * parseFloat(this.num2)).toString();
        break;
    }
    this.num1 = '';
    this.num2 = '';
    this.operator = null;
    this.isDot = false;
  }
}
