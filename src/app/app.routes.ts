import { Routes } from '@angular/router';
import { CantidadComponent, DataClientComponent, ReviewPageComponent, ThanksComponent, TipoDeChurroComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/nuevo-pedido',
    pathMatch: 'full'
  },
  {
    path: 'nuevo-pedido',
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
