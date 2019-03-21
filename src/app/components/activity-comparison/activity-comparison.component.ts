import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-activity-comparison',
  templateUrl: './activity-comparison.component.html',
  styleUrls: ['./activity-comparison.component.scss']
})
export class ActivityComparisonComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() ID1: string;
  @Input() ID1Modal: string;
  /*pieChartData = [
    {
      'country': 'TCKKK',
      'countryDetails': 'Mackenzie',
      'litres': 501.9
    }, {
      'country': 'ZCNNN',
      'countryDetails': 'Mackenzie',
      'litres': 301.9
    }, {
      'country': 'TRQRD',
      'countryDetails': 'Mackenzie',
      'litres': 201.1
    }, {
      'country': 'BTGYS',
      'countryDetails': 'Mackenzie',
      'litres': 165.8
    }, {
      'country': 'NMXYS',
      'countryDetails': 'Mackenzie',
      'litres': 139.9
    }, {
      'country': 'MFCTA',
      'countryDetails': 'Mackenzie',
      'litres': 128.3
    }, {
      'country': 'UK',
      'countryDetails': 'Mackenzie',
      'litres': 99
    }, {
      'country': 'EYYND',
      'countryDetails': 'Mackenzie',
      'litres': 60
    }, {
      'country': 'EN',
      'countryDetails': 'Mackenzie',
      'litres': 50
    }
  ];*/
  pieChartData = [
    {
      'name': 'Alex',
      'email': 2,
      'calls': 4,
      'meetings': 300,
    }, {
      'name': 'Henry',
      'email': 1,
      'calls': 5,
      'meetings': 300,
    }, {
      'name': 'Soojan',
      'email': 5,
      'calls': 1,
      'meetings': 500,
    }, {
      'name': 'Ramdin',
      'email': 1,
      'calls': 2,
      'meetings': 300,
    }, {
      'name': 'Camelon',
      'email': 4,
      'calls': 4,
      'meetings': 500,
    }, {
      'name': 'Sofia',
      'email': 5,
      'calls': 4,
      'meetings': 100,
    }, {
      'name': 'Jakes',
      'email': 7,
      'calls': 5,
      'meetings': 100,
    }, {
      'name': 'John',
      'email': 4,
      'calls': 4,
      'meetings': 300,
    }, {
      'name': 'Peter',
      'email': 2,
      'calls': 3,
      'meetings': 100,
    }, {
      'name': 'Harry',
      'email': 4,
      'calls': 4,
      'meetings': 100,
    }
  ]

  constructor() { }

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
    pieSeries.dataFields.value = 'meetings';
    pieSeries.dataFields.category = 'name';
    pieSeries.slices.template.width = 10;
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = '[font-size: 20]{name} - {meetings}';

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
    chart2.innerRadius = am4core.percent(40);

    // Add and configure Series
    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'meetings';
    pieSeries.dataFields.category = 'name';
    pieSeries.slices.template.width = 10;
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.tooltipText = '[font-size: 20]{name} - {meetings}';

// This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
}
