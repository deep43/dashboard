import { Component, OnInit, Input } from '@angular/core';
import {array} from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-three-col-table',
  templateUrl: './three-col-table.component.html',
  styleUrls: ['./three-col-table.component.scss']
})
export class ThreeColTableComponent implements OnInit {
  @Input() title: string;
  @Input() columns: any;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
  }

}
