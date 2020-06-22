import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ListComponent } from '../components/list/list.component';
import { LoaderComponent } from '../loader/loader.component';
import { ErrorComponent } from '../components/error/error.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  HomeService } from './home.service';
import { Routes } from '@angular/router';
import { of, throwError } from 'rxjs'

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
    const div = app.querySelectorAll('.city-list-bg-color--hover');
    expect(div.length).toBe(1);
  });
  it('should call the API to get the details',() => {
   let mockService = new HomeServiceSpy()
   const fixture = TestBed.createComponent(HomeComponent);
   component.ngOnInit();
   fixture.detectChanges();
    expect(mockService.getCityDetails).toHaveBeenCalled();
  });

  it('should show the error when API fails', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.nativeElement;   
    let mockService = new HomeServiceSpy();
    component.ngOnInit();
    mockService.getCityDetails.and.returnValue(throwError('Error!!'));
    expect(app.querySelector('fa-exclamation')).toBeDefined();

  })
});
