import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCarrouselComponent } from './swiper-carrousel.component';

describe('SwiperCarrouselComponent', () => {
  let component: SwiperCarrouselComponent;
  let fixture: ComponentFixture<SwiperCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperCarrouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
