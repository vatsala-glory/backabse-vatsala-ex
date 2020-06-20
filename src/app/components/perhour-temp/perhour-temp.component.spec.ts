import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerhourTempComponent } from './perhour-temp.component';

describe('PerhourTempComponent', () => {
  let component: PerhourTempComponent;
  let fixture: ComponentFixture<PerhourTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerhourTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerhourTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
