import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/home/home';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: List;
  constructor() { }

  ngOnInit() {
  }

}
