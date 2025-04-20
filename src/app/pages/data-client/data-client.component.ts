import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components';
import { ModalType } from '../../models';
import { ModalService } from '../../services';

@Component({
  selector: 'app-data-client',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ModalComponent],
  templateUrl: './data-client.component.html',
  styleUrl: './data-client.component.scss',
})
export class DataClientComponent implements OnInit {
  clientForm: FormGroup;
  churrosDay: string = '';
  public ModalType = ModalType;

  constructor(private formBuilder: FormBuilder, private router: Router, private modalService: ModalService,) {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientAddress: ['', Validators.required],
      aditionalInfoAddress: [''],
      delivery: ['¡Gratis!'],
      deliveryDay: [this.getChurrosDay(), ],
      deliveryTime: ['15hs - 18hs',],
    });
  }

  ngOnInit(): void {
    this.churrosDay = this.getChurrosDay();
  }

  get clientName() {
    return this.clientForm.get('clientName');
  }

  get clientAddress() {
    return this.clientForm.get('clientAddress');
  }

  getChurrosDay(testDate?: Date): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = testDate || new Date();
    const currentDay = today.getDay();
    const currentHour = today.getHours();

    let churrosDay = '';

    if (currentDay === 0) {
        churrosDay = 'Lunes';
    } else if (currentDay >= 1 && currentDay <= 5) {
        if (currentHour >= 18) {
            churrosDay = days[currentDay + 1];
        } else {
            churrosDay = 'Hoy ' + days[currentDay];
        }
    } else if (currentDay === 6) {
        churrosDay = 'Lunes';
    } else {
        churrosDay = 'Lunes';
    }

    return churrosDay;
  }

  showSchedules() {
    this.modalService.setShowModal(true);
  }

  onSubmit() {
    if (this.clientForm.valid) {
      let purchase =
        JSON.parse(localStorage.getItem('purchase') as string) || {};
      purchase = {
        ...purchase,
        ...this.clientForm.value,
      };
      localStorage.setItem('purchase', JSON.stringify(purchase));
      this.router.navigate(['review']);
    } else {
      this.clientForm.markAllAsTouched();
      console.error('Form is invalid', this.clientForm.value);
    }
  }
}
