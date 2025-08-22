import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Selectornumerico } from './selectornumerico/selectornumerico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Selectornumerico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
