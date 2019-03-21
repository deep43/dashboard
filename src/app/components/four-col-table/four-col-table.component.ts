import { Component, OnInit, Input } from '@angular/core';
import {array} from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-four-col-table',
  templateUrl: './four-col-table.component.html',
  styleUrls: ['./four-col-table.component.scss']
})
export class FourColTableComponent implements OnInit {
  @Input() title: string;
  @Input() columns: any;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
  }

}
