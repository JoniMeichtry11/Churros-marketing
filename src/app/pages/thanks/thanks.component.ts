import { AfterViewInit, Component, signal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent implements AfterViewInit {
  selectedShipping: Signal<boolean> = signal(true);
  count = 200;
  defaults = {
    origin: { y: 0.7 },
  };

  ngAfterViewInit(): void {
    this.pushCelebrate()
  }

  pushCelebrate(){
    this.celebrate(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    this.celebrate(0.2, {
      spread: 60,
    });
    this.celebrate(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    this.celebrate(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    this.celebrate(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  celebrate(particleRatio: any, opts: any) {
    confetti({
      ...this.defaults,
      ...opts,
      particleCount: Math.floor(this.count * particleRatio),
    });
  }
}
