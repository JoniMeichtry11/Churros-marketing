import { Routes } from '@angular/router';
import { CantidadComponent, DataClientComponent, ReviewPageComponent, ThanksComponent, TipoDeChurroComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tipo-de-churro',
    pathMatch: 'full'
  },
  {
    path: 'tipo-de-churro',
    component: TipoDeChurroComponent
  },
  {
    path: 'cantidad',
    component: CantidadComponent
  },
  {
    path: 'data-client',
    component: DataClientComponent
  },
  {
    path: 'review',
    component: ReviewPageComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
  {
    path: '**',
    redirectTo: '/tipo-de-churro'
  }
];
