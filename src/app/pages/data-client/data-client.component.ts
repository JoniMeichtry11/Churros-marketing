import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-client',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './data-client.component.html',
  styleUrl: './data-client.component.scss',
})
export class DataClientComponent {
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      aditionalInfoAddress: [''],
    });
  }

  get name() {
    return this.clientForm.get('name');
  }

  get address() {
    return this.clientForm.get('address');
  }

  onSubmit() {
    if (this.clientForm.valid) {
      let localStoragePurchase =
        JSON.parse(localStorage.getItem('purchase') as string) || {};

      const formData = this.clientForm.value;
      localStoragePurchase = { ...localStoragePurchase, ...formData };

      localStorage.setItem('purchase', JSON.stringify(localStoragePurchase));

      this.router.navigate(['review']);
    } else {
      console.error('Form is invalid', this.clientForm.value);
    }
  }
}
