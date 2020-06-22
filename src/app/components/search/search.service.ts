import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getDetailsbyCityName(name:string):Observable<any>{
    return this.http.get(`${environment.apiUrl}${environment.endpoints.getweatherbyCityName}?q=${name}&appid=${environment.apiKey}`)
    .pipe(
      map(res => res));
  }
}
