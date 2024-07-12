import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
})
export class CounterComponent {
  @Output() counterChanged: EventEmitter<number> = new EventEmitter<number>();

  counterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.counterForm = this.formBuilder.group({
      counterValue: [
        0,
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
    });

    this.counterForm.valueChanges.subscribe(() => {
      this.emitCounter();
    });
  }

  incrementCounter() {
    let currentValue = this.counterForm.get('counterValue')?.value;
    currentValue = currentValue ? currentValue + 1 : 1;
    if (currentValue <= 999) {
      this.counterForm.patchValue({ counterValue: currentValue });
    }
  }

  decrementCounter() {
    let currentValue = this.counterForm.get('counterValue')?.value;
    currentValue = currentValue && currentValue > 0 ? currentValue - 1 : 0;
    this.counterForm.patchValue({ counterValue: currentValue });
  }

  private emitCounter() {
    this.counterChanged.emit(this.counterForm.get('counterValue')?.value);
  }

  restrictInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (
      input.value.length >= 3 &&
      event.key !== 'Backspace' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight'
    ) {
      event.preventDefault();
    }
  }
}
