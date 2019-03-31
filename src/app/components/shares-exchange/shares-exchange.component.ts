import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-shares-exchange',
  templateUrl: './shares-exchange.component.html',
  styleUrls: ['./shares-exchange.component.scss']
})
export class SharesExchangeComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() ID1: string;
  @Input() ID2: string;
  @Input() ID1Modal: string;
  @Input() ID2Modal: string;

  chart: any;
  boughtOrSold = 'bought';

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
  pieChartSoldData = [
    {
      'country': 'TCTTK',
      'countryDetails': 'Mackenzie',
      'litres': 401.9
    }, {
      'country': 'ZCN',
      'countryDetails': 'Navigant',
      'litres': 201.9
    }, {
      'country': 'TRUUQ',
      'countryDetails': '1832 Asset Management',
      'litres': 501.1
    }, {
      'country': 'BTG',
      'countryDetails': 'Connor Clark Asset Management',
      'litres': 165.8
    }, {
      'country': 'NMTTX',
      'litres': 139.9
    }, {
      'country': 'MFC',
      'countryDetails': 'PWC',
      'litres': 228.3
    }, {
      'country': 'UYYYK',
      'countryDetails': 'Deloitte',
      'litres': 99
    }, {
      'country': 'END',
      'countryDetails': 'KPMG',
      'litres': 60
    }, {
      'country': 'EN',
      'countryDetails': 'EY',
      'litres': 50
    }];
  changed = false;

  constructor(private refreshService: RefreshService) {
  }

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
    pieSeries.slices.template.width = 5;
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

    this.chart = chart2;

    /*let chart3 = am4core.create(this.ID2, am4charts.PieChart);
    chart3.data = this.pieChartData;
    chart3.innerRadius = am4core.percent(50);
    let pieSeries3 = chart3.series.push(new am4charts.PieSeries());
    pieSeries3.dataFields.value = 'litres';
    pieSeries3.dataFields.category = 'country';
    pieSeries3.slices.template.stroke = am4core.color('#fff');
    pieSeries3.slices.template.strokeWidth = 2;
    pieSeries3.slices.template.strokeOpacity = 1;

// This creates initial animation
    pieSeries3.hiddenState.properties.opacity = 1;
    pieSeries3.hiddenState.properties.endAngle = -90;
    pieSeries3.hiddenState.properties.startAngle = -90;*/
  }

  openModal() {
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
// This creat
// This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;


    let chart3 = am4core.create(this.ID2Modal, am4charts.PieChart);
    chart3.data = this.pieChartSoldData;
    chart3.innerRadius = am4core.percent(50);
    let pieSeries3 = chart3.series.push(new am4charts.PieSeries());
    pieSeries3.dataFields.value = 'litres';
    pieSeries3.dataFields.category = 'country';
    pieSeries3.slices.template.stroke = am4core.color('#fff');
    pieSeries3.slices.template.strokeWidth = 2;
    pieSeries3.slices.template.strokeOpacity = 1;
    pieSeries3.slices.template.tooltipText = '[font-size: 20]{countryDetails} - {litres}';
    pieSeries3.slices.template.events.on('hit', function (ev) {
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);
// This creates initial animation
    pieSeries3.hiddenState.properties.opacity = 1;
    pieSeries3.hiddenState.properties.endAngle = -90;
    pieSeries3.hiddenState.properties.startAngle = -90;
  }

  showBoughtData() {
    this.chart.data = this.pieChartData;
  }

  showSoldData() {
    this.chart.data = this.pieChartSoldData;
  }
}
