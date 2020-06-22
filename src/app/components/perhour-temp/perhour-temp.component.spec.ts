import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerhourTempComponent } from './perhour-temp.component';

describe('PerhourTempComponent', () => {
  let component: PerhourTempComponent;
  let fixture: ComponentFixture<PerhourTempComponent>;
  let mock = require('../../../mocks/details.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerhourTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerhourTempComponent);
    component = fixture.componentInstance;
    component.perHourData = mock.list[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
