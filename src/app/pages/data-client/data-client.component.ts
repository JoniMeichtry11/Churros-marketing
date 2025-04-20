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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.clientForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientAddress: ['', Validators.required],
      aditionalInfoAddress: [''],
      delivery: ['¡Gratis!'],
      deliveryTime: ['15hs - 18hs',],
    });
  }

  ngOnInit(): void {}

  get clientName() {
    return this.clientForm.get('clientName');
  }

  get clientAddress() {
    return this.clientForm.get('clientAddress');
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
