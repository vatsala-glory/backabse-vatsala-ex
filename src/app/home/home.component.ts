import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { CityList } from './home';
import { Subject } from 'rxjs';
import { map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  cities$: Subject<any> = new Subject<any>();

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    //  API Call to get the list of  all the cities.
    this.homeService.getCityList().subscribe(res => {
      //  API call for the details of all the selected Cities.
      this.homeService.getCityDetails(res.map(response => response.id)).pipe(
        //  Updating Cities Subject.
        map(cities =>{
          this.cities$.next(cities);
        })
      ).subscribe(()=>{
        this.loading = false;
      })
    });
  }

}
