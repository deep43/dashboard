import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-four-graph-demo',
  templateUrl: './four-graph-demo.component.html',
  styleUrls: ['./four-graph-demo.component.scss']
})
export class FourGraphDemoComponent implements OnInit {

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
