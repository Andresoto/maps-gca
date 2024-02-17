import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanMapDetailComponent } from './salesman-map-detail.component';

describe('SalesmanMapDetailComponent', () => {
  let component: SalesmanMapDetailComponent;
  let fixture: ComponentFixture<SalesmanMapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesmanMapDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesmanMapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
