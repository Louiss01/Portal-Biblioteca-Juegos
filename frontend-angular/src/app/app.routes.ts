import { Routes } from '@angular/router';
// Importamos manualmente los componentes buscando la ruta exacta
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Conocenos } from './pages/conocenos/conocenos';
import { Faq } from './pages/faq/faq';  

//definimos las rutas


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'conocenos', component: Conocenos },
  { path: 'faq', component: Faq }
];
