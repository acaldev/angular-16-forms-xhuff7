import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { HashMap } from '@ngneat/transloco';
import { ValidationError } from '../models';

const MaxLength = (
  length: number,
  message = 'legacy.4',
  variables: HashMap | undefined = undefined
): ValidatorFn => {
  return (control: AbstractControl): ValidationError | null => {
    const error = {
      key: 'required',
      message,
      variables: {...variables, length }
    };
    return !Validators.required(control) && Validators.maxLength(length)(control)
      ? error
      : null;
  };
};

export { MaxLength };
