import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ListaPokemones } from './pages/lista-pokemones/lista-pokemones';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'lista-pokemones', component: ListaPokemones}
];
