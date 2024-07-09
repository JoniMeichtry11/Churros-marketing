import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeChurroComponent } from './tipo-de-churro.component';

describe('TipoDeChurroComponent', () => {
  let component: TipoDeChurroComponent;
  let fixture: ComponentFixture<TipoDeChurroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDeChurroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoDeChurroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
