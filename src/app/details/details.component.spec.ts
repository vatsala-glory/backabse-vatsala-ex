import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { DayViewComponent } from '../components/day-view/day-view.component';
import { PerhourTempComponent } from '../components/perhour-temp/perhour-temp.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  ActivatedRouteStub } from '../../mocks/activated-router-stub';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'
import { DetailsService } from './details.service';
import { ErrorComponent } from '../components/error/error.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRoute: ActivatedRouteStub;

  let mock = require('../../mocks/weather/details.json');

  class DetailServiceStub {
    getDetailsbyId = jasmine.createSpy('getDetailsbyId').and.returnValue(of(mock));
  }


  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({id:12345})
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ 
        DetailsComponent,
        LoaderComponent,
        DayViewComponent,
        PerhourTempComponent,
        ErrorComponent
       ],
       providers:[
         {provide: ActivatedRoute, useValue: activatedRoute},
         {provide: DetailsService, useClass: DetailServiceStub}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
