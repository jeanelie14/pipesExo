import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LesPipes'
  nombre: string = 'Jean Elie'
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  personaje: string[] = ['Iroman', 'Spiderman', 'Thor', 'Loki', 'Groot']
  PI: number = Math.PI
}
