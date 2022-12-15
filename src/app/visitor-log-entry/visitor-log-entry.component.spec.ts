import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLogEntryComponent } from './visitor-log-entry.component';

describe('VisitorLogEntryComponent', () => {
  let component: VisitorLogEntryComponent;
  let fixture: ComponentFixture<VisitorLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
