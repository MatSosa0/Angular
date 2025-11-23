import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { 
  numeros: number[] = [];

  constructor() {
    for (let x = 0; x <= 500000; x++) {
      this.numeros.push(x);
    }
  }
}
