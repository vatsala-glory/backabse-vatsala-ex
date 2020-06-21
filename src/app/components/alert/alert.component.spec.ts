import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDismissComponent } from './alert.component';
import { AlertModule, AlertComponent } from 'ngx-bootstrap/alert';

describe('AlertComponent', () => {
  let component: AlertDismissComponent;
  let fixture: ComponentFixture<AlertDismissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AlertModule.forRoot()
      ],
      declarations: [ AlertDismissComponent,
       ]
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
