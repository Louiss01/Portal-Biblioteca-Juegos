import { Component, AfterViewInit, ViewChild, ElementRef, QueryList, viewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit{

 @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

//Ref video de fondo
ngAfterViewInit() {
  const video = this.videoElement.nativeElement;

  //Aseguramos que está mudo, sino no funcionará el autoplay en muchos navegadores
  video.muted = true;
  
  //Intentamos reproducir
  video.play().catch(error => {
    console.warn('Autoplay bloqueado por el navegador:', error);
  });

  //Vigilante de scroll para animaciones
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { //Si entra en pantalla, añade "visible" es decir, te lo muestra
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 }); // Cuando el 10% del elemento es visible, empieza a mostrarse

  const hiddenElements = document.querySelectorAll('.reveal-on-scroll'); //Selecciona todos los elementos con esta clase
  hiddenElements.forEach(el => observer.observe(el)); //Y los observa
}


}


