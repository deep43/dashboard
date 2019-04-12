import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pyramid-demo',
  templateUrl: './pyramid-demo.component.html',
  styleUrls: ['./pyramid-demo.component.scss']
})
export class PyramidDemoComponent implements OnInit {
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };
  selected = {start: moment().subtract(29, 'days'), end: moment()};

  constructor() { }

  ngOnInit() {
  }

}
