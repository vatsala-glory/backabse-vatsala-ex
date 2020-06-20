import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';
import {  switchMap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  weatherDetails$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentCityId:Observable<string>;
  constructor(private detailsService: DetailsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.currentCityId = this._fetchRoutedId();
   this._getCityDetails();
  }

  /**
   * get the id from router variable
   */

  private _fetchRoutedId(): Observable<string>{
    return this.route.paramMap.pipe(
      map(params => {        
       return params.get('id')     
      })
    );
     
  }
  /**
   * Fetching all the data for selected city
   */
  private _getCityDetails(){
    this.currentCityId.subscribe((id) => {
      this.detailsService.getDetailsbyId(id).pipe(
        map(details => {
          this.weatherDetails$.next(details);
        })
      ).subscribe(()=> {
                
      })
    })
  }

}
