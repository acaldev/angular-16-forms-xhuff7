import { Directive, ElementRef, HostListener, Self } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'form[formGroup]',
})
export class FormSubmitDirective {
  constructor(
    private el: ElementRef,
    @Self() private container: ControlContainer
  ) {}

  @HostListener('submit')
  public onSubmit(): void {
    this.container.control?.markAllAsTouched();
    if (this.container.invalid) {
      this.scrollToFirstInvalidControl();
    }
  }

  scrollToFirstInvalidControl(): void {
    const firsInvalidControl: HTMLElement =
      this.el.nativeElement.querySelectorAll('.ng-invalid')[0];
    firsInvalidControl.scrollIntoView({ behavior: 'smooth'});
    firsInvalidControl.focus();
  }
}
