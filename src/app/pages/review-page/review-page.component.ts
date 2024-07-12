import { Component } from '@angular/core';
import { Pedido } from '../../models/PedidoData';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent {
  pedidoReview: Pedido = {} as Pedido;
}
