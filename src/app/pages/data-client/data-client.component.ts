import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-client',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './data-client.component.html',
  styleUrl: './data-client.component.scss',
})
export class DataClientComponent {
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      aditionalInfoAddress: [''],
    });
  }
}
