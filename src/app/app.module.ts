import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './components/list/list.component';
import { HomeService } from './home/home.service';
import { AppInterceptorService } from './app-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavBarComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    FormsModule
    
  ],
  providers: [HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
