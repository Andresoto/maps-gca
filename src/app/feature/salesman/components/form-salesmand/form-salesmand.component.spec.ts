import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalesmandComponent } from './form-salesmand.component';

describe('FormSalesmandComponent', () => {
  let component: FormSalesmandComponent;
  let fixture: ComponentFixture<FormSalesmandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSalesmandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSalesmandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
