import { AbstractControl, FormControl } from '@angular/forms';
import { MaxLength } from './max-length';

describe('Email Validator', () => {
  let control: AbstractControl;

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null when control value is empty not required and within the maximum length', () => {
    const validator = MaxLength(10);
    control.setValue('');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null when control value is not required and within the maximum length', () => {
    const validator = MaxLength(10);
    control.setValue('Hello');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object when control value exceeds the maximum length', () => {
    const validator = MaxLength(10);
    control.setValue('This is too long');
    const result = validator(control);
    expect(result).toEqual({
      key: 'required',
      message: 'legacy.4',
      variables: { length: 10 },
    });
  });

});
