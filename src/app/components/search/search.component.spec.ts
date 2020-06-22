import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  HomeComponent } from '../../home/home.component';

import { Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { ErrorComponent } from '../error/error.component';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const routes: Routes = [
    {path:'', component: HomeComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        TypeaheadModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        SearchComponent,
        HomeComponent,
        ListComponent,
        ErrorComponent,
        LoaderComponent
      ],
      providers:[
       SearchService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the details and redirect to navigate', () => {
    //Arrange
    component.searchForm.get('search').setValue('Test, Test');
    //Act
    component.searchCity();

    //  Assert.
  })
});
