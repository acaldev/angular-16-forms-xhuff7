import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';
import { HashMap } from '@ngneat/transloco';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() controlName!: string;
  @Input() formElm!: FormGroupDirective;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: AbstractControl<any, any> | null | undefined = null;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);
  }

  get showError(): boolean {
    const controlDirty = this.control ? this.control.dirty : false;
    const formSubmitted = this.formElm ? this.formElm.submitted : false;
    return controlDirty || formSubmitted;
  }

  get hasError(): boolean {
    return this.control ? this.control.invalid : false;
  }

  get message(): string {
    return this.control?.errors?.['message'];
  }

  get variables(): HashMap | undefined {
    return this.control?.errors?.['variables'];
  }
}
