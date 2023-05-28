import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ErrorMessageComponent } from './components';
import { FormSubmitDirective } from './directives';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    FormSubmitDirective,
  ],
  imports: [CommonModule, TranslocoModule],
  exports: [ErrorMessageComponent, FormSubmitDirective],
})
export class FormValidationModule {}
