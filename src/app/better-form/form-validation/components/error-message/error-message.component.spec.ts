import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { ErrorMessageComponent } from './error-message.component';
const fgd: FormGroupDirective = new FormGroupDirective([], []);

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, TranslocoTestingModule.forRoot({}),],
      providers: [
        { provide: ControlContainer, useValue: fgd }
      ],
      declarations: [ ErrorMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message when control is invalid and dirty', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formGroupDirective = new FormGroupDirective([], []) as any;
    formGroupDirective.submitted = false;
    const message = 'message';
    component.formGroupDirective = formGroupDirective;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.control = { invalid: true, dirty: true, errors: { required: true, message } } as any;

    fixture.detectChanges();
    expect(component.showError).toBeTruthy();
    expect(component.message).toBe(message);
  });

  it('should show error message when form is submitted and control is invalid', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formGroupDirective = new FormGroupDirective([], []) as any;
    formGroupDirective.submitted = true;

    component.formGroupDirective = formGroupDirective;
    const message = 'message';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.control = { invalid: true, dirty: false, errors: { required: true, message } } as any;

    fixture.detectChanges();
    expect(component.showError).toBeTruthy();
    expect(component.message).toBe(message);
  });

  it('should not show error message when control is valid', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formGroupDirective = new FormGroupDirective([], []) as any;
    formGroupDirective.submitted = false;

    component.formGroupDirective = formGroupDirective;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.control = { invalid: false, dirty: true, errors: null } as any;

    fixture.detectChanges();
    expect(component.showError).toBeFalsy();
  });

  it('should not show error message when control is not dirty', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formGroupDirective = new FormGroupDirective([], []) as any;
    formGroupDirective.submitted = false;

    component.formGroupDirective = formGroupDirective;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.control = { invalid: true, dirty: false, errors: { required: true } } as any;

    fixture.detectChanges();
    expect(component.showError).toBeFalsy();
  });

});
