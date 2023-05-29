import { AbstractControl, FormControl } from '@angular/forms';
import { Required } from './required';

describe('Required Validator', () => {
  let control: AbstractControl;

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null when the control has a value', () => {
    control.setValue('test');
    const validator = Required();
    expect(validator(control)).toBeNull();
  });

  it('should return a validation error when the control is empty', () => {
    control.setValue('');
    const validator = Required();
    expect(validator(control)).toEqual({ key: 'required', message: 'legacy.1', variables: undefined });
  });

  it('should return a validation error with custom message and variables', () => {
    const message = 'This field is required';
    const variables = { max: 10 };
    control = new FormControl('', Required(message, variables));
    control.setValue('');
    const validator = Required(message, variables);
    expect(validator(control)).toEqual({ key: 'required', message, variables });
  });
});
