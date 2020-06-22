import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewComponent } from './day-view.component';
import { PerhourTempComponent } from '../perhour-temp/perhour-temp.component';

describe('PerdayTempComponent', () => {
  let component: DayViewComponent;
  let fixture: ComponentFixture<DayViewComponent>;
  let details = require('../../../mocks/weather/details.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DayViewComponent,
      PerhourTempComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewComponent);
    component = fixture.componentInstance;
    component.perDayData = details.list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
