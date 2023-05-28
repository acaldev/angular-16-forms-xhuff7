import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ugly-form',
  templateUrl: './ugly-form.component.html',
  styleUrls: ['./ugly-form.component.css']
})
export class UglyFormComponent {
  result!: string;

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(500)]]
  });

  submit() {
    this.result = this.form.valid ? 'Valid Form' : 'Invalid Form';
  }
}
