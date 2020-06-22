import { Component, OnInit, Input } from '@angular/core';
import { ForecatList } from 'src/app/details/details';

@Component({
  selector: 'app-perhour-temp',
  templateUrl: './perhour-temp.component.html',
  styleUrls: ['./perhour-temp.component.scss']
})
export class PerhourTempComponent implements OnInit {
  @Input()perHourData: ForecatList;

  constructor() { }

  ngOnInit() {  }

}
