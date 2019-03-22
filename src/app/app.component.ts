import {Component, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as moment from 'moment';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
am4core.options.commercialLicense = true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private zone: NgZone) {
  }

  ngOnInit() {
  }
}
