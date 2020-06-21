import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertDismissComponent implements OnInit {
  @Input() message: string;
  @Input() type: string;
  

  constructor() { }

  ngOnInit() {
  }

}
