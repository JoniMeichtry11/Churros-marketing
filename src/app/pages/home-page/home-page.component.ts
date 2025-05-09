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
  @ViewChild('lazyVideo') lazyVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit() {}

  ngAfterViewInit() {
    const videoElement = this.lazyVideo.nativeElement;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animationState = 'final';
          observer.unobserve(this.animatedSection.nativeElement);
        }
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoElement.setAttribute('preload', 'auto');
            videoElement.play();
            observer.unobserve(videoElement);
          }
        });
      });

      observer.observe(videoElement);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      videoElement.setAttribute('preload', 'auto');
      videoElement.play();
    }

    videoElement.addEventListener('loadeddata', () => {
      if (videoElement.paused) {
        videoElement.play();
      }
    });

    observer.observe(this.animatedSection.nativeElement);
  }
}
