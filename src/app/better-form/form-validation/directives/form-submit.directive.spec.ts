import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormSubmitDirective } from './form-submit.directive';

@Component({
  template: `
    <form [formGroup]="formGroup" (submit)="onSubmit()">
      <input type="text" formControlName="name" required>
      <button type="submit">Submit</button>
    </form>
  `
})
class TestComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ''
    });
  }

  onSubmit(): void {
    // Handle submit event
  }
}

describe('FormSubmitDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let form: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormSubmitDirective, TestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
  });

  it('should mark all controls as touched on form submit', () => {
    const directiveInstance = form.injector.get(FormSubmitDirective);
    const markAllAsTouchedSpy = jest.spyOn(component.formGroup, 'markAllAsTouched').mockReturnValue();
    const scrollToFirstInvalidControlSpy = jest.spyOn(directiveInstance, 'scrollToFirstInvalidControl').mockReturnValue();
    form.triggerEventHandler('submit', null);
    expect(scrollToFirstInvalidControlSpy).toHaveBeenCalled();
    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });

  it('should scroll to the first invalid control on form submit if the form is invalid', () => {
    const directiveInstance = form.injector.get(FormSubmitDirective);
    const scrollToFirstInvalidControlSpy = jest.spyOn(directiveInstance, 'scrollToFirstInvalidControl').mockReturnValue();
    component.formGroup.get('name')?.setErrors({ required: true });
    form.triggerEventHandler('submit', null);
    expect(scrollToFirstInvalidControlSpy).toHaveBeenCalled();
  });
});

