import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesmanComponent } from './list-salesman.component';

describe('ListSalesmanComponent', () => {
  let component: ListSalesmanComponent;
  let fixture: ComponentFixture<ListSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalesmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
