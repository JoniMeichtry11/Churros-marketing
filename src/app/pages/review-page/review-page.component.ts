import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/PedidoData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent implements OnInit {
  pedidoReview: Pedido = {} as Pedido;
  message: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pedidoReview = JSON.parse(localStorage.getItem('purchase') as string);
    this.generateMessage();
  }

  generateMessage() {
    const { clientName, clientAddress, aditionalInfoAddress, totalChurros, typeChurro, totalPrice, deliveryDay, deliveryTime } = this.pedidoReview;
    if(aditionalInfoAddress){
      this.message = `Hola, quiero confirmar mi pedido de churros:
- *Nombre:* ${clientName}
- *Dirección:* ${clientAddress}
- *Datos adicionales:* ${aditionalInfoAddress}
- *Día de entrega:* ${deliveryDay}
- *Horario de entrega:* ${deliveryTime}
- *Cantidad de churros:* ${totalChurros}
- *Tipo de churros:* ${typeChurro}
- *Precio Total:* $${totalPrice}
¡Muchas Gracias! 😁👍🏼`;
    } else {
      this.message = `Hola, quiero confirmar mi pedido de churros:
- *Nombre:* ${clientName}
- *Dirección:* ${clientAddress}
- *Día de entrega:* ${deliveryDay}
- *Horario de entrega:* ${deliveryTime}
- *Cantidad de churros:* ${totalChurros}
- *Tipo de churros:* ${typeChurro}
- *Precio Total:* $${totalPrice}
¡Muchas Gracias! 😁👍🏼`;
    }
  }

  sendMessage() {
    const encodedMessage = encodeURIComponent(this.message);
    const whatsappUrl = `https://wa.me/3462675246?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    this.router.navigate(['thanks']);
  }
}
