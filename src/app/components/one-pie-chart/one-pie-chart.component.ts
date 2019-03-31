import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-one-pie-chart',
  templateUrl: './one-pie-chart.component.html',
  styleUrls: ['./one-pie-chart.component.scss']
})
export class OnePieChartComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() ID1: string;
  @Input() ID1Modal: string;
  pieChartData = [
    {
      'country': 'TCKKK',
      'countryDetails': 'Mackenzie',
      'litres': 501.9
    }, {
      'country': 'ZCNNN',
      'countryDetails': '1832 Asset Management',
      'litres': 301.9
    }, {
      'country': 'TRQRD',
      'countryDetails': 'Connor Clark Asset Management',
      'litres': 201.1
    }, {
      'country': 'BTGYS',
      'countryDetails': '1999 Asset Management',
      'litres': 165.8
    }, {
      'country': 'NMXYS',
      'countryDetails': 'EY',
      'litres': 139.9
    }, {
      'country': 'MFCTA',
      'countryDetails': 'KMPG',
      'litres': 128.3
    }, {
      'country': 'UK',
      'countryDetails': 'Deloitte',
      'litres': 99
    }, {
      'country': 'EYYND',
      'countryDetails': 'PWC',
      'litres': 60
    }, {
      'country': 'EN',
      'countryDetails': 'Navigant',
      'litres': 50
    }
  ];
  changed = false;

  constructor(private refreshService: RefreshService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // Add data

    let chart2 = am4core.create(this.ID1, am4charts.PieChart);
    chart2.data = this.pieChartData;

// Set inner radius
    chart2.innerRadius = am4core.percent(40);

    // Add and configure Series
    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.width = 10;
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = '[font-size: 20]{countryDetails} - {litres}';

// This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    // override font size
    chart2.fontSize = 10;
  }

  openModal() {
    // Add data
    let chart2 = am4core.create(this.ID1Modal, am4charts.PieChart);
    chart2.data = this.pieChartData;

// Set inner radius
    chart2.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = '[font-size: 20]{countryDetails} - {litres}';
    const that = this;
    pieSeries.slices.template.events.on('hit', function (ev) {
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);
// This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
}
