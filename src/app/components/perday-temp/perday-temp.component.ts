import { Component, OnInit, Input } from '@angular/core';
import { ForecatList } from 'src/app/details/details';

@Component({
  selector: 'app-perday-temp',
  templateUrl: './perday-temp.component.html',
  styleUrls: ['./perday-temp.component.scss']
})
export class PerdayTempComponent implements OnInit {
  @Input()perDayData:ForecatList[];
  perDayListArray; any;
  constructor() { }

  ngOnInit() {
     this.perDayListArray=  this._segregateData();
  }
/**
 * Convert data day wise to iterate.
 */
   private _segregateData(){
    return this.perDayData.reduce((perDayList, data) => {
      const date = new Date(data.dt_txt).toISOString().substring(0,10);
      if(perDayList[date]){
        perDayList[date].push(data);
      } else {
        perDayList[date]=[];
        perDayList[date].push(data);
      } 
      return perDayList;     
    }, {});

   }

}
