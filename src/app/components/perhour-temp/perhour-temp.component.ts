import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perhour-temp',
  templateUrl: './perhour-temp.component.html',
  styleUrls: ['./perhour-temp.component.scss']
})
export class PerhourTempComponent implements OnInit {
  @Input()perHourData: any;

  constructor() { }

  ngOnInit() {  }

}
