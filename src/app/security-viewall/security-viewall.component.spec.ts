import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityViewallComponent } from './security-viewall.component';

describe('SecurityViewallComponent', () => {
  let component: SecurityViewallComponent;
  let fixture: ComponentFixture<SecurityViewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityViewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
