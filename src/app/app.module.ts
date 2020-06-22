import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  Internal Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PerhourTempComponent } from './components/perhour-temp/perhour-temp.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './components/list/list.component';
import { HomeService } from './home/home.service';
import { DetailsService } from './details/details.service';
import { ErrorComponent } from './components/error/error.component';
import { SearchService } from './components/search/search.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavBarComponent,
    DetailsComponent,
    ListComponent,
    PerhourTempComponent,
    DayViewComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    HomeService,
    DetailsService,
    SearchService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
