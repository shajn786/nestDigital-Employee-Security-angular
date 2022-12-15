import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeNavbarComponent } from './admin-employee-navbar.component';

describe('AdminEmployeeNavbarComponent', () => {
  let component: AdminEmployeeNavbarComponent;
  let fixture: ComponentFixture<AdminEmployeeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmployeeNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
