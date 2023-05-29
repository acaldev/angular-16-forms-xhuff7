import { AbstractControl, FormControl } from '@angular/forms';
import { MinLength } from './min-length';

describe('MinLength Validator', () => {
  const errorKey = 'required';
  const errorMessage = 'legacy.3';
  const length = 5;
  const variables = { customVariable: 'Custom Value' };

  let control: AbstractControl;

  beforeEach(() => {
    control = new FormControl('');
  });
  
  it('should return null if control value is empty', () => {
    control.setValue('');
    const validator = MinLength(length, errorMessage, variables);
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null if control value is longer than or equal to the specified length', () => {
    control.setValue('abcdefgh');
    const validator = MinLength(length, errorMessage, variables);
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object if control value is shorter than the specified length', () => {
    control.setValue('abcd');
    const validator = MinLength(length, errorMessage, variables);
    const result = validator(control);
    expect(result).toEqual({
      key: errorKey,
      message: errorMessage,
      variables: { ...variables, length }
    });
  });
});
