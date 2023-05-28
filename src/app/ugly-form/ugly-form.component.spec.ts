import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UglyFormComponent } from './ugly-form.component';

describe('UglyFormComponent', () => {
  let component: UglyFormComponent;
  let fixture: ComponentFixture<UglyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UglyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UglyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
