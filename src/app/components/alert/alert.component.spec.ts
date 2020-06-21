import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDismissComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertDismissComponent;
  let fixture: ComponentFixture<AlertDismissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDismissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDismissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
