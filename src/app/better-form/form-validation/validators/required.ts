import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { HashMap } from '@ngneat/transloco';
import { ValidationError } from '../models';

const Required = (
  message = 'legacy.1',
  variables: HashMap | undefined = undefined
): ValidatorFn => {
  return (control: AbstractControl): ValidationError | null => {
    const error = {
      key: 'required',
      message,
      variables
    };
    return Validators.required(control) ? error : null;
  };
};

export { Required };
