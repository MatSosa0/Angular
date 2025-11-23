import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tablamultiplicacion',
  standalone: true,
  imports: [],
  templateUrl: './tablamultiplicacion.html',
  styleUrls: ['./tablamultiplicacion.css']
})
export class TablamultiplicacionComponent {
  @Input() tabla: number = 0;
}
