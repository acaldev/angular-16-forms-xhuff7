import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Email, MaxLength, MinLength, Required } from './form-validation';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css'],
})
export class BetterFormComponent {
  result!: string;

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: ['', [Required(), MinLength(10)]],
    mail: ['', [Required(), Email()]],
    message: ['', [Required('legacy.5', {name: 'Message'}), MaxLength(500)]]
  });

  submit() {
    this.result = this.form.valid ? 'Valid Form' : 'Invalid Form';
  }
}
