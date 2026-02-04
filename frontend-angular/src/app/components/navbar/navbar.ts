import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrollPercentage: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollHeight > 0) {
      this.scrollPercentage = (scrollTop / scrollHeight) * 100;
    }
  }

  irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
