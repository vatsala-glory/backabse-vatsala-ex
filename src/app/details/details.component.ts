import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ForeCast } from './details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  weatherDetails$: BehaviorSubject<ForeCast> = new BehaviorSubject<ForeCast>(null);
  currentCityId:Observable<string>;
  loading: boolean = true;
  error: boolean = false;
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
          this.error = false;
          this.weatherDetails$.next(details);
        })
      ).subscribe(()=> {
            this.loading = false; 
      },(err) => {
        this.error = true;
        this.loading = false;
      })
    })
  }

}
