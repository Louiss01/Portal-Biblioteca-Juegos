import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

 irArriba() {
    // 1. Si no estamos en home, navega primero
    // (Esto ya lo hace el routerLink, así que nos centramos en el scroll)

    // 2. Forzamos el scroll al pixel 0,0 de la ventana
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });

    // 3. (Truco extra) Por si acaso el 'smooth' falla en algún navegador raro,
    // forzamos también el elemento 'html' directamente.
    document.documentElement.scrollTop = 0; 
  }}