import { Routes } from '@angular/router';
import { CantidadComponent, DataClientComponent, HomePageComponent, ReviewPageComponent, ThanksComponent, TipoDeChurroComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'nuevo-pedido',
    component: TipoDeChurroComponent
  },
  {
    path: 'cantidad/:type',
    component: CantidadComponent
  },
  {
    path: 'address',
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
    redirectTo: ''
  }
];
