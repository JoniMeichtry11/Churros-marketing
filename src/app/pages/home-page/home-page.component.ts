import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [
    trigger('trigger', [
      state(
        'initial',
        style({
          opacity: 0,
          transform: 'translateY(50px) scale(0.8)',
        })
      ),
      state(
        'final',
        style({
          opacity: 1,
          transform: 'translateY(0) scale(1)',
        })
      ),
      transition('initial <=> final', animate('800ms ease-in-out')),
    ]),
  ],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('animatedSection') animatedSection!: ElementRef;
  animationState = 'initial';

  ngOnInit() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animationState = 'final';
          observer.unobserve(this.animatedSection.nativeElement);
        }
      });
    });

    observer.observe(this.animatedSection.nativeElement);
  }
}
