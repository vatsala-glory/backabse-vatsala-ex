import { Injectable } from '@angular/core';
import { CityList } from './home';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getCityList(): Observable<CityList[]>{
    return of([
      {id:2759794},
      {id:2968815},
      {id:6458923},
      {id:3054643},
      {id:2618425}
    ])
  }

  /**
   * 
   * @param cities - All the cities in an array;
   */
  getCityDetails(...cities){
    return this.http.get(`${environment.apiUrl}${environment.endpoints.getCities}?id=${[...cities].join()}&units=metric&appid=${environment.apiKey}`)
    .pipe(
      map(res => res));
  }
}
