import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Graficotarta } from './graficotarta/graficotarta';
@Component({
selector: 'app-root',
imports: [RouterOutlet, Graficotarta],
templateUrl: './app.html',
styleUrls: ['./app.css']
})
export class App {
}