import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  number: number = 0;
  count: number = 0;
  timer: any; 
  mensajeMostrado: boolean = false; 

  addOne() {
    console.log('¡Botón clickeado!');
    this.number++;

    if (!this.mensajeMostrado) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        alert('¿Te has cansado? Patético humano.');
        this.mensajeMostrado = true; 
      }, 10000); 
    }

    if (this.number === 10) {
      alert('No iba en serio... ¿o sí?');
    }
    if (this.number === 20) {
      alert('¡Vaya, te gusta hacer clics!');
    }
    if (this.number === 30) {
      alert('¡Eso es mucha dedicación!');
    }
    if (this.number === 40) {
      alert('¿Estás intentando romper el récord mundial de clics?');
    }
    if (this.number === 50) {
      alert('¡Increíble! ¡50 clics! ¿Qué sigue, 100?');
    }
    if (this.number === 100) {
      alert('¡Felicidades! ¡Has alcanzado los 100 clics! Eres un campeón del clic.');
    }
    if (this.number > 200) {
      alert('¡Wow! ¡Más de 200 clics! ¿Estás seguro de que no tienes otra cosa que hacer?');
    }
    if (this.number > 500) {
      alert('¡Increíble! ¡Más de 500 clics! ¿Estás tratando de comunicarte con los extraterrestres a través de clics?');
    }
    if (this.number > 1000) {
      alert('¡Asombroso! ¡Más de 1000 clics! ¿Estás intentando romper el internet con tus clics?');
    }
  }
}
