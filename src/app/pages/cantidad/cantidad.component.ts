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
  mediaDocenaPrice: number = 2999;
  docenaPrice: number = 3999;
  dosDocenasPrice: number = 6499;
  unitPrice: number = 499;
  totalUnitChurros: number = 0;
  totaUnitPrice: number = 0;
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
    this.totaUnitPrice = count * this.unitPrice;
  }

  private setSimplePrices(): void {
    this.mediaDocenaPrice = 2999;
    this.docenaPrice = 3999;
    this.dosDocenasPrice = 6499;
    this.imageURL =
      '../../../assets/images/simples-_1_.webp';
    this.unitPrice = 500;
  }

  private setDulcePrices(): void {
    this.mediaDocenaPrice = 3499;
    this.docenaPrice = 4499;
    this.dosDocenasPrice = 7999;
    this.imageURL =
      '../../../assets/images/dulcedeleche-_1_.webp';
    this.unitPrice = 600;
  }

  buyChurros(quantity: number, price: number){
    if(quantity > 0){
      this.purchaseTotal.typeChurro = this.typeChurro === 'simple' ? 'simple' : 'con dulce de leche';
      this.purchaseTotal.totalChurros = quantity;
      this.purchaseTotal.totalPrice = price;
      this.purchaseTotal.imageChurroURL = this.typeChurro === 'simple' ? '../../../assets/images/simples-_1_.webp' : '../../../assets/images/dulcedeleche-_1_.webp';
      localStorage.setItem('purchase', JSON.stringify(this.purchaseTotal));
      this.router.navigate(['address']);
    } else {
      this.quantityError = true;
    }
  }
}
