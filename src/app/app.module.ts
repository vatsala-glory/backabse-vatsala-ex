import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert'
import { FormsModule } from '@angular/forms';
//  Internal Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PerhourTempComponent } from './components/perhour-temp/perhour-temp.component';
import { PerdayTempComponent } from './components/perday-temp/perday-temp.component';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertDismissComponent } from './components/alert/alert.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './components/list/list.component';
import { HomeService } from './home/home.service';
import { DetailsService } from './details/details.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavBarComponent,
    DetailsComponent,
    ListComponent,
    PerhourTempComponent,
    PerdayTempComponent,
    LoaderComponent,
    PageNotFoundComponent,
    AlertDismissComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    AlertModule
    
  ],
  providers: [
    HomeService,
    DetailsService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
