import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewallComponent } from './employee-viewall.component';

describe('EmployeeViewallComponent', () => {
  let component: EmployeeViewallComponent;
  let fixture: ComponentFixture<EmployeeViewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
