import { Injectable } from '@angular/core';
import { CityList, CityListResponse } from './home';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
/**
 * Returns teh list of all the city list for display on screen.
 */
  getCityList(): Observable<CityList[]> {
    return of([
      { id: 2759794 },
      { id: 2968815 },
      { id: 6458923 },
      { id: 3054643 },
      { id: 2618425 }
    ])
  }

  /**
   * 
   * @param cities - All the cities in an array;
   */
  getCityDetails(...cities): Observable<CityListResponse | any> {
    if ([...cities].length > 0) {
      return this.http.get(`${environment.apiUrl}${environment.endpoints.getCities}?id=${[...cities].join()}&units=metric&appid=${environment.apiKey}`)
        .pipe(
          delay(300),
          map(res => res));
    }
  }
}
