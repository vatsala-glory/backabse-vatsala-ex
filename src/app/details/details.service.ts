import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ForeCast } from './details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getDetailsbyId(id):Observable<ForeCast | any>{
    return this.http.get(`${environment.apiUrl}${environment.endpoints.getweather}?id=${id}&appid=${environment.apiKey}`)
    .pipe(
      map(res => res));
  }
}
