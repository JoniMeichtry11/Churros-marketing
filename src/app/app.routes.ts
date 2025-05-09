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
    component: TipoDeChurroComponent,
    title: 'Nuevo pedido - churros dos hermanos'
  },
  {
    path: 'cantidad/:type',
    component: CantidadComponent,
    title: 'Churros dos hermanos'
  },
  {
    path: 'address',
    component: DataClientComponent,
    title: 'Churros dos hermanos'
  },
  {
    path: 'review',
    component: ReviewPageComponent,
    title: 'Finalizar compra - churros dos hermanos'
  },
  {
    path: 'thanks',
    component: ThanksComponent,
    title: 'Churros dos hermanos'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
