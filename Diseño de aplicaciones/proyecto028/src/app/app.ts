import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablamultiplicacionComponent } from './tablamultiplicacion/tablamultiplicacion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablamultiplicacionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  numeros = [...Array(9999).keys()].map(num => num + 2);
}
