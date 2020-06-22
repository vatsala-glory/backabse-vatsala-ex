import { Component, OnInit, Input } from '@angular/core';
import { ForecatList } from 'src/app/details/details';
import {  environment } from '../../../environments/environment';

@Component({
  selector: 'app-perhour-temp',
  templateUrl: './perhour-temp.component.html',
  styleUrls: ['./perhour-temp.component.scss']
})
export class PerhourTempComponent implements OnInit {
  @Input()perHourData: ForecatList;
  imageUrl: string;

  constructor() { }

  ngOnInit() { 
    this.imageUrl = environment.imageUrl;
   }

}
