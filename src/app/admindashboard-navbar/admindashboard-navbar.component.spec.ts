import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardNavbarComponent } from './admindashboard-navbar.component';

describe('AdmindashboardNavbarComponent', () => {
  let component: AdmindashboardNavbarComponent;
  let fixture: ComponentFixture<AdmindashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
