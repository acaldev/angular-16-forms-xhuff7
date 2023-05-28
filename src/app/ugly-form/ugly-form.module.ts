import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UglyFormComponent } from './ugly-form.component';

@NgModule({
  declarations: [
    UglyFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UglyFormComponent
  ]
})
export class UglyFormModule { }
