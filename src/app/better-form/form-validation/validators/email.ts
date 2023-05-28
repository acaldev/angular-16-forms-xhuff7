import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { HashMap } from '@ngneat/transloco';
import { ValidationError } from '../models';

const Email = (message = 'legacy.2', variables: HashMap | undefined = undefined): ValidatorFn => {
  return (control: AbstractControl): ValidationError | null => {
    const error = {
      key: 'email',
      message,
      variables,
    };
    return !Validators.required(control) && Validators.email(control)
      ? error
      : null;
  };
};

export { Email };
