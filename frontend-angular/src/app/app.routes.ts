import { Routes } from '@angular/router';
// Importamos manualmente los componentes buscando la ruta exacta
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login }
];
