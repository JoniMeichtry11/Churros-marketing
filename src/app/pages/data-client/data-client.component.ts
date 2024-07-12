import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-client',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './data-client.component.html',
  styleUrl: './data-client.component.scss',
})
export class DataClientComponent implements OnInit {
  clientForm: FormGroup;
  availableDays: string[] = [];
  deliveryTimes: string[] = ['16:00', '17:00', '18:00', '19:00'];
  workingDays: string[] = ['Lunes', 'Martes', 'Jueves', 'Viernes'];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientAddress: ['', Validators.required],
      aditionalInfoAddress: [''],
      deliveryDay: ['', Validators.required],
      deliveryTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setAvailableDays();
  }

  get clientName() {
    return this.clientForm.get('clientName');
  }

  get clientAddress() {
    return this.clientForm.get('clientAddress');
  }

  get deliveryDay() {
    return this.clientForm.get('deliveryDay');
  }

  get deliveryTime() {
    return this.clientForm.get('deliveryTime');
  }

  setAvailableDays() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysMap = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];

    if (this.workingDays.includes(daysMap[dayOfWeek])) {
      this.availableDays.push('Hoy ' + `(${daysMap[dayOfWeek]})`);
    }

    for (let i = 1; i <= 6; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const nextDayOfWeek = nextDay.getDay();
      const nextDayName = daysMap[nextDayOfWeek];

      if (daysMap[dayOfWeek] === 'Viernes') {
        if (this.workingDays.includes(nextDayName)) {
          this.availableDays.push(nextDayName);
        }
        break;
      }

      if (
        this.workingDays.includes(daysMap[dayOfWeek]) &&
        dayOfWeek !== 0 &&
        dayOfWeek !== 6
      ) {
        if (
          this.workingDays.includes(nextDayName) &&
          this.workingDays.indexOf(nextDayName) >
            this.workingDays.indexOf(daysMap[dayOfWeek])
        ) {
          this.availableDays.push(nextDayName);
        }
      } else {
        if (this.workingDays.includes(nextDayName)) {
          this.availableDays.push(nextDayName);
        }
      }
    }
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
