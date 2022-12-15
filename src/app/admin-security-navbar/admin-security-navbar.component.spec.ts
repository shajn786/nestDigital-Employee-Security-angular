import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecurityNavbarComponent } from './admin-security-navbar.component';

describe('AdminSecurityNavbarComponent', () => {
  let component: AdminSecurityNavbarComponent;
  let fixture: ComponentFixture<AdminSecurityNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSecurityNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSecurityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
