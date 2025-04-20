import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../../components';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from '../../models/PedidoData';

@Component({
  selector: 'app-cantidad',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './cantidad.component.html',
  styleUrl: './cantidad.component.scss',
})
export class CantidadComponent implements OnInit {
  typeChurro: string | null = 'simple';
  mediaDocenaPrice: number = 3999;
  docenaPrice: number = 5999;
  dosDocenasPrice: number = 9499;
  unitPrice: number = 599;
  totalUnitChurros: number = 0;
  totalUnitPrice: number = 0;
  imageURL: string =
    '../../../assets/images/simples-_1_.webp';
  purchaseTotal: Purchase = {} as Purchase;
  quantityError: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.typeChurro = params.get('type');
      if (this.typeChurro === 'dulce') {
        this.setDulcePrices();
      } else {
        this.setSimplePrices();
      }
    });
  }

  onCounterChanged(count: number) {
    this.quantityError = false;
    this.totalUnitChurros = count;
    this.totalUnitPrice = count * this.unitPrice;
  }

  private setSimplePrices(): void {
    this.mediaDocenaPrice = 3999;
    this.docenaPrice = 5999;
    this.dosDocenasPrice = 9499;
    this.imageURL =
      '../../../assets/images/simples-_1_.webp';
    this.unitPrice = 600;
  }

  private setDulcePrices(): void {
    this.mediaDocenaPrice = 4999;
    this.docenaPrice = 8499;
    this.dosDocenasPrice = 15999;
    this.imageURL =
      '../../../assets/images/dulcedeleche-_1_.webp';
    this.unitPrice = 900;
  }

  buyChurros(quantity: number, price: number){
    if(quantity > 0){
      this.purchaseTotal.typeChurro = this.typeChurro === 'simple' ? 'simple' : 'con dulce de leche';
      this.purchaseTotal.totalChurros = quantity;
      this.purchaseTotal.typeAccordingtoQuantity = quantity === 24 ? 'dos docenas' : quantity === 12 ? 'docena' : quantity === 6 ? 'media docena' : 'unidad';
      this.purchaseTotal.totalPrice = price;
      this.purchaseTotal.imageChurroURL = this.typeChurro === 'simple' ? '../../../assets/images/simples-_1_.webp' : '../../../assets/images/dulcedeleche-_1_.webp';
      localStorage.setItem('purchase', JSON.stringify(this.purchaseTotal));
      this.router.navigate(['address']);
    } else {
      this.quantityError = true;
    }
  }
}
