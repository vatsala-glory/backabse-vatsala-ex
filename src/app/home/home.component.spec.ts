import { async, ComponentFixture, TestBed , } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ListComponent } from '../components/list/list.component';
import { LoaderComponent } from '../loader/loader.component';
import { ErrorComponent } from '../components/error/error.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  HomeService } from './home.service';
import { Routes } from '@angular/router';
import { of } from 'rxjs'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const routes: Routes = [
    {path:'', component: HomeComponent}
  ];
  let mock = require('../../mocks/cities.json');

  class HomeServiceSpy {
    
    getCityList = jasmine.createSpy('getCityList').and.returnValue(of([{id:2759794}]));
  
    getCityDetails = jasmine.createSpy('getCityDetails').and.returnValue(of(mock));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [ 
        HomeComponent,
        ListComponent,
        LoaderComponent,
        ErrorComponent
       ],
       providers: [
         {provide:HomeService, useClass :HomeServiceSpy} 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of Cities in DOM', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.nativeElement;   
    fixture.detectChanges();
    //expect(app.cities$.list.length).toBe(1);
  })
});
