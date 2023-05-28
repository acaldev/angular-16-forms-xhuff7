import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BetterFormComponent } from './better-form.component';
import { FormValidationModule } from './form-validation';

@NgModule({
  declarations: [BetterFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormValidationModule],
  exports: [BetterFormComponent],
})
export class BetterFormModule {}
