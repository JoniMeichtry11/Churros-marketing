import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../../components';
import { ActivatedRoute } from '@angular/router';

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
  totaUnitPrice: number = 0;
  imageURL: string =
    'https://firebasestorage.googleapis.com/v0/b/churros-administrator.appspot.com/o/simples.png?alt=media&token=88295da0-482b-48d6-99ba-53f7f550c31e';
  constructor(private route: ActivatedRoute) {}

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
    this.totaUnitPrice = count * this.unitPrice;
  }

  private setSimplePrices(): void {
    this.mediaDocenaPrice = 2999;
    this.docenaPrice = 3999;
    this.dosDocenasPrice = 6499;
    this.imageURL =
      'https://firebasestorage.googleapis.com/v0/b/churros-administrator.appspot.com/o/simples.png?alt=media&token=88295da0-482b-48d6-99ba-53f7f550c31e';
    this.unitPrice = 500;
  }

  private setDulcePrices(): void {
    this.mediaDocenaPrice = 3499;
    this.docenaPrice = 4499;
    this.dosDocenasPrice = 7999;
    this.imageURL =
      'https://firebasestorage.googleapis.com/v0/b/churros-administrator.appspot.com/o/dulcedeleche.png?alt=media&token=8c326463-c25c-40ac-a508-a0acaf034a72';
    this.unitPrice = 600;
  }
}
