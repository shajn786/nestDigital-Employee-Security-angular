import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLogEntryComponent } from './employee-log-entry.component';

describe('EmployeeLogEntryComponent', () => {
  let component: EmployeeLogEntryComponent;
  let fixture: ComponentFixture<EmployeeLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
