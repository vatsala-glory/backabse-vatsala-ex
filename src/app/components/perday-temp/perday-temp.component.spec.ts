import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdayTempComponent } from './perday-temp.component';
import { PerhourTempComponent } from '../perhour-temp/perhour-temp.component';

describe('PerdayTempComponent', () => {
  let component: PerdayTempComponent;
  let fixture: ComponentFixture<PerdayTempComponent>;
  let details = require('../../../mocks/weather/details.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PerdayTempComponent,
      PerhourTempComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdayTempComponent);
    component = fixture.componentInstance;
    component.perDayData = details.list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
