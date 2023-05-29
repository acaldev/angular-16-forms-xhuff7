import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';
import { HashMap } from '@ngneat/transloco';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() controlName!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: AbstractControl<any, any> | null | undefined = null;
  formGroupDirective: FormGroupDirective | null = null;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);
    this.formGroupDirective = this.findFormGroupDirective(this.controlContainer);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private findFormGroupDirective(controlContainer: ControlContainer | any): FormGroupDirective | null {
    if (controlContainer instanceof FormGroupDirective) {
      return controlContainer;
    } else if (controlContainer && controlContainer.control) {
      return this.findFormGroupDirective(controlContainer.control);
    }
    return null;
  }

  get showError(): boolean {
    const controlDirty = this.control ? this.control.invalid && this.control.dirty : false;
    const formSubmitted = this.formGroupDirective && this.control ? this.control.invalid && this.formGroupDirective.submitted : false;
    return controlDirty || formSubmitted;
  }

  get message(): string {
    return this.control?.errors?.['message'];
  }

  get variables(): HashMap | undefined {
    return this.control?.errors?.['variables'];
  }
}
