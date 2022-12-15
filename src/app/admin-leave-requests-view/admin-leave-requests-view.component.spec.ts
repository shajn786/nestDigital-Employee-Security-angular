import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveRequestsViewComponent } from './admin-leave-requests-view.component';

describe('AdminLeaveRequestsViewComponent', () => {
  let component: AdminLeaveRequestsViewComponent;
  let fixture: ComponentFixture<AdminLeaveRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaveRequestsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeaveRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
