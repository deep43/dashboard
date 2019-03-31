import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-commisions',
  templateUrl: './commisions.component.html',
  styleUrls: ['./commisions.component.scss']
})
export class CommisionsComponent implements OnInit, AfterViewInit {
  dataSectors = [
    {
      'country': '\n\nMining',
      'visits': 2025
    }, {
      'country': 'Unknown',
      'visits': 1882
    }, {
      'country': 'Oil & Gas',
      'visits': 1809
    }, {
      'country': 'Precious\nMetals',
      'visits': 1322
    }, {
      'country': 'Financial\nInstitutions',
      'visits': 1122
    }, {
      'country': 'Power',
      'visits': 1114
    }, {
      'country': 'Real Estate',
      'visits': 984
    }, {
      'country': 'Energy',
      'visits': 711
    }, {
      'country': 'Diversified',
      'visits': 665
    }, {
      'country': 'Industrials',
      'visits': 580
    }, {
      'country': 'Technology\nHardware',
      'visits': 443
    }
  ];
  sectorOrClient = 'Sectors';

// client data

  dataClients = [
    {
      'country': '\n\nClient 1',
      'visits': 1900
    }, {
      'country': 'Client 2',
      'visits': 1700
    }, {
      'country': 'Client 3',
      'visits': 1500
    }, {
      'country': 'Client 4',
      'visits': 1300
    }, {
      'country': 'Client 5',
      'visits': 1100
    }, {
      'country': 'Client 6',
      'visits': 900
    }, {
      'country': 'Client 7',
      'visits': 800
    }, {
      'country': 'Client 8',
      'visits': 711
    }, {
      'country': 'Client 9',
      'visits': 665
    }, {
      'country': 'Client 10',
      'visits': 580
    }, {
      'country': 'Client 11',
      'visits': 443
    }
  ];
  categoryAxis = null;
  chart = null;
  changed = false;

  constructor(private refreshService: RefreshService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    /*am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart4 = am4core.create('chartdiv7', am4charts.XYChart);

    chart4.colors.step = 2;
    chart4.maskBullets = false;

    // Add data
    chart4.data = [
      {
        'date': '2012-01-01',
        'distance': 227,
        'townName': '',
        'townName2': '',
        'townSize': 12,
        'latitude': 40.71,
        'duration': 408
      }, {
        'date': '2012-01-02',
        'distance': 371,
        'townName': 'Washington',
        'townSize': 7,
        'latitude': 38.89,
        'duration': 482
      }, {
        'date': '2012-01-03',
        'distance': 433,
        'townName': 'Wilmington',
        'townSize': 3,
        'latitude': 34.22,
        'duration': 562
      }, {
        'date': '2012-01-04',
        'distance': 345,
        'townName': 'Jacksonville',
        'townSize': 3.5,
        'latitude': 30.35,
        'duration': 379
      }, {
        'date': '2012-01-05',
        'distance': 480,
        'townName': '',
        'townName2': '',
        'townSize': 5,
        'latitude': 25.83,
        'duration': 501
      }, {
        'date': '2012-01-06',
        'distance': 386,
        'townName': 'Tallahassee',
        'townSize': 3.5,
        'latitude': 30.46,
        'duration': 443
      }, {
        'date': '2012-01-07',
        'distance': 348,
        'townName': 'New Orleans',
        'townSize': 5,
        'latitude': 29.94,
        'duration': 405
      }, {
        'date': '2012-01-08',
        'distance': 238,
        'townName': '',
        'townName2': '',
        'townSize': 8,
        'latitude': 29.76,
        'duration': 309
      }, {
        'date': '2012-01-09',
        'distance': 218,
        'townName': 'Dalas',
        'townSize': 8,
        'latitude': 32.8,
        'duration': 287
      }, {
        'date': '2012-01-10',
        'distance': 349,
        'townName': 'Oklahoma City',
        'townSize': 5,
        'latitude': 35.49,
        'duration': 485
      }, {
        'date': '2012-01-11',
        'distance': 603,
        'townName': 'Kansas City',
        'townSize': 5,
        'latitude': 39.1,
        'duration': 890
      }, {
        'date': '2012-01-12',
        'distance': 534,
        'townName': '',
        'townName2': '',
        'townSize': 9,
        'latitude': 39.74,
        'duration': 810
      }, {
        'date': '2012-01-13',
        'townName': 'Salt Lake City',
        'townSize': 6,
        'distance': 425,
        'duration': 670,
        'latitude': 40.75,
        'dashLength': 8,
        'alpha': 0.4
      }
    ];

    // Create axes
    let dateAxis4 = chart4.xAxes.push(new am4charts.DateAxis());
    // dateAxis4.dataFields.category = 'category';
    dateAxis4.renderer.grid.template.location = 0;
    dateAxis4.renderer.minGridDistance = 50;
    dateAxis4.renderer.grid.template.disabled = true;
    dateAxis4.renderer.fullWidthTooltip = true;

    let distanceAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
    distanceAxis4.title.text = 'Commissions';
    distanceAxis4.renderer.grid.template.disabled = true;

    let durationAxis4 = chart4.yAxes.push(new am4charts.DurationAxis());
    durationAxis4.title.text = '';
    durationAxis4.baseUnit = 'minute';
    durationAxis4.renderer.grid.template.disabled = true;
    durationAxis4.renderer.opposite = true;

    // durationAxis4.durationFormatter.durationFormat = 'hh\'h\' mm\'min\'';
    durationAxis4.renderer.labels.template.disabled = true;

    let latitudeAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis4.renderer.grid.template.disabled = true;
    latitudeAxis4.renderer.labels.template.disabled = true;

    // Create series
    let distanceSeries4 = chart4.series.push(new am4charts.ColumnSeries());
    distanceSeries4.id = 'g1';
    distanceSeries4.dataFields.valueY = 'distance';
    distanceSeries4.dataFields.dateX = 'date';
    distanceSeries4.yAxis = distanceAxis4;
    distanceSeries4.tooltipText = '{valueY} miles';
    distanceSeries4.name = 'Current Period';
    distanceSeries4.columns.template.fillOpacity = 0.7;

    let disatnceState4 = distanceSeries4.columns.template.states.create('hover');
    disatnceState4.properties.fillOpacity = 0.9;

    /!*let latitudeSeries4 = chart4.series.push(new am4charts.LineSeries());
    latitudeSeries4.id = 'g2';
    latitudeSeries4.dataFields.valueY = 'latitude';
    latitudeSeries4.dataFields.dateX = 'date';
    latitudeSeries4.yAxis = latitudeAxis4;
    latitudeSeries4.name = 'Last Year Comparison';
    latitudeSeries4.strokeWidth = 2;
    latitudeSeries4.tooltipText = 'Latitude: {valueY} ({townName})';

    let latitudeBullet4 = latitudeSeries4.bullets.push(new am4charts.CircleBullet());
    latitudeBullet4.circle.fill = am4core.color('#fff');
    latitudeBullet4.circle.strokeWidth = 2;
    latitudeBullet4.circle.propertyFields.radius = 'townSize';

    let latitudeState4 = latitudeBullet4.states.create('hover');
    latitudeState4.properties.scale = 1.2;

    let latitudeLabel4 = latitudeSeries4.bullets.push(new am4charts.LabelBullet());
    latitudeLabel4.label.text = '{townName2}';
    latitudeLabel4.label.horizontalCenter = 'left';
    latitudeLabel4.label.dx = 14;*!/

    // Add legend
    // chart4.legend = new am4charts.Legend();

    // Add cursor
    chart4.cursor = new am4charts.XYCursor();
    chart4.cursor.fullWidthLineX = true;
    chart4.cursor.xAxis = dateAxis4;
    chart4.cursor.lineX.strokeOpacity = 0;
    chart4.cursor.lineX.fill = am4core.color('#000');
    chart4.cursor.lineX.fillOpacity = 0.1;*/
    const chart = am4core.create('chartdiv7', am4charts.XYChart);
    // Add data
    chart.data = this.dataSectors;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = 'Sectors';
    // categoryAxis.fontSize = 10;


    categoryAxis.renderer.labels.template.adapter.add('dy', (dy, target) => {
      if (target.dataItem && target.dataItem.index && 2 === 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.name = 'Visits';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    // override font size
    chart.fontSize = 10;

    this.chart = chart;
    this.categoryAxis = categoryAxis;
  }

  openModal() {
    let chartModal = am4core.create('chartdiv7Modal', am4charts.XYChart);

    // Add data
    chartModal.data = this.dataSectors;

    let categoryAxis = chartModal.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.title.text = 'Sectors';

    categoryAxis.renderer.labels.template.adapter.add('dy', (dy, target) => {
      if (target.dataItem && target.dataItem.index && 2 === 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chartModal.yAxes.push(new am4charts.ValueAxis());

// Create series
    let series = chartModal.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.name = 'Visits';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;
    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};
    series.columns.template.events.on('hit', function (ev) {
      prevClickedColumn.strokeWidth = 0;
      if (!ev.target.column['selected']) {
        ev.target.column.strokeWidth = 4;
        ev.target.column.stroke = am4core.color('#ffd740');
        prevClickedColumn.selected = false;
        prevClickedColumn = ev.target.column;
        prevClickedColumn.selected = true;
      }
      else {
        ev.target.column['selected'] = false;
        prevClickedColumn = {selected: false};
      }
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);
    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart = chartModal;
    this.categoryAxis = categoryAxis;
  }

  showSectorData() {
    this.chart.data = this.dataSectors;
    this.categoryAxis.title.text = 'Sectors';
  }

  showClientData() {
    this.chart.data = this.dataClients;
    this.categoryAxis.title.text = 'Clients';
  }
}
