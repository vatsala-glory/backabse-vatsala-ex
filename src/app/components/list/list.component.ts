import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/home/home';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: List;
  imageUrl: string;
  constructor() { }

  ngOnInit() {
    this.imageUrl = environment.imageUrl;
  }

}
