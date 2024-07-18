import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-swiper-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './swiper-carrousel.component.html',
  styleUrl: './swiper-carrousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperCarrouselComponent {
  slidesDesktop = [
    {
      source:
        '../../../assets/churros-image-1.jpg',
      text: 'Descubre la mejor dentista de la zona',
    },
    {
      source:
        '../../../assets/churros-image-3.jpg',
      text: 'Exámenes y radiografías gratuitos para nuevos pacientes',
    },
  ];
}
