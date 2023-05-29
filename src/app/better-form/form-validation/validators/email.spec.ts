import { AbstractControl, FormControl } from '@angular/forms';
import { Email } from './email';

describe('Email Validator', () => {
  let control: AbstractControl;

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null if the control value is empty', () => {
    const validator = Email();
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null if the control value is a valid email address', () => {
    control.setValue('test@example.com');
    const validator = Email();
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object if the control value is not a valid email address', () => {
    control.setValue('invalid-email');
    const validator = Email();
    const result = validator(control);
    expect(result).toEqual({
      key: 'email',
      message: 'legacy.2',
      variables: undefined,
    });
  });

  it('should return an error object with custom message and variables', () => {
    control.setValue('invalid-email');
    const message = 'Custom error message';
    const variables = { count: 5 };
    const validator = Email(message, variables);
    const result = validator(control);
    expect(result).toEqual({
      key: 'email',
      message,
      variables,
    });
  });
});
