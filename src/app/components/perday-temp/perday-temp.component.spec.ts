import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdayTempComponent } from './perday-temp.component';

describe('PerdayTempComponent', () => {
  let component: PerdayTempComponent;
  let fixture: ComponentFixture<PerdayTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdayTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdayTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
