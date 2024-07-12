import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/PedidoData';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent implements OnInit {
  pedidoReview: Pedido = {} as Pedido;

  ngOnInit(): void {
    this.pedidoReview  = JSON.parse(localStorage.getItem('purchase') as string);
  }
}
