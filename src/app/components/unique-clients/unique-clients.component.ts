import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-unique-clients',
  templateUrl: './unique-clients.component.html',
  styleUrls: ['./unique-clients.component.scss']
})
export class UniqueClientsComponent implements OnInit, AfterViewInit {
  changed = false;

  constructor(private refreshService: RefreshService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart4 = am4core.create('chartdiv4', am4charts.XYChart);

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
        'latitude': 40,
        'duration': 408
      }, {
        'date': '2012-01-02',
        'distance': 371,
        'townName': 'Washington',
        'townSize': 7,
        'latitude': 38,
        'duration': 482
      }, {
        'date': '2012-01-03',
        'distance': 433,
        'townName': 'Wilmington',
        'townSize': 3,
        'latitude': 34,
        'duration': 562
      }, {
        'date': '2012-01-04',
        'distance': 345,
        'townName': 'Jacksonville',
        'townSize': 3.5,
        'latitude': 30,
        'duration': 379
      }, {
        'date': '2012-01-05',
        'distance': 480,
        'townName': '',
        'townName2': '',
        'townSize': 5,
        'latitude': 25,
        'duration': 501
      }, {
        'date': '2012-01-06',
        'distance': 386,
        'townName': 'Tallahassee',
        'townSize': 3.5,
        'latitude': 30,
        'duration': 443
      }, {
        'date': '2012-01-07',
        'distance': 348,
        'townName': 'New Orleans',
        'townSize': 5,
        'latitude': 29,
        'duration': 405
      }, {
        'date': '2012-01-08',
        'distance': 238,
        'townName': '',
        'townName2': '',
        'townSize': 8,
        'latitude': 29,
        'duration': 309
      }, {
        'date': '2012-01-09',
        'distance': 218,
        'townName': 'Dalas',
        'townSize': 8,
        'latitude': 32,
        'duration': 287
      }, {
        'date': '2012-01-10',
        'distance': 349,
        'townName': 'Oklahoma City',
        'townSize': 5,
        'latitude': 35,
        'duration': 485
      }, {
        'date': '2012-01-11',
        'distance': 603,
        'townName': 'Kansas City',
        'townSize': 5,
        'latitude': 39,
        'duration': 890
      }, {
        'date': '2012-01-12',
        'distance': 534,
        'townName': '',
        'townName2': '',
        'townSize': 9,
        'latitude': 39,
        'duration': 810
      }, {
        'date': '2012-01-13',
        'townName': 'Salt Lake City',
        'townSize': 6,
        'distance': 425,
        'duration': 670,
        'latitude': 40,
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
    dateAxis4.skipEmptyPeriods = true;

    let distanceAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
    distanceAxis4.title.text = 'Number Of Clients';
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
    distanceSeries4.tooltipText = '{valueY} Clients';
    distanceSeries4.name = 'Current Period';
    distanceSeries4.columns.template.fillOpacity = 0.7;

    let disatnceState4 = distanceSeries4.columns.template.states.create('hover');
    disatnceState4.properties.fillOpacity = 0.9;

    let latitudeSeries4 = chart4.series.push(new am4charts.LineSeries());
    latitudeSeries4.id = 'g2';
    latitudeSeries4.dataFields.valueY = 'latitude';
    latitudeSeries4.dataFields.dateX = 'date';
    latitudeSeries4.yAxis = latitudeAxis4;
    latitudeSeries4.name = 'Last Year Comparison';
    latitudeSeries4.strokeWidth = 2;
    latitudeSeries4.tooltipText = '{valueY} Clients';

    let latitudeBullet4 = latitudeSeries4.bullets.push(new am4charts.CircleBullet());
    latitudeBullet4.circle.fill = am4core.color('#fff');
    latitudeBullet4.circle.strokeWidth = 2;
    latitudeBullet4.circle.propertyFields.radius = 'townSize';

    let latitudeState4 = latitudeBullet4.states.create('hover');
    latitudeState4.properties.scale = 1.2;

    let latitudeLabel4 = latitudeSeries4.bullets.push(new am4charts.LabelBullet());
    latitudeLabel4.label.text = '{townName2}';
    latitudeLabel4.label.horizontalCenter = 'left';
    latitudeLabel4.label.dx = 14;

    // Add legend
    chart4.legend = new am4charts.Legend();

    // Add cursor
    chart4.cursor = new am4charts.XYCursor();
    chart4.cursor.fullWidthLineX = true;
    chart4.cursor.xAxis = dateAxis4;
    chart4.cursor.lineX.strokeOpacity = 0;
    chart4.cursor.lineX.fill = am4core.color('#000');
    chart4.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chart4.fontSize = 10;
  }

  openModal() {
    let chartModal = am4core.create('chartdiv4Modal', am4charts.XYChart);

    chartModal.colors.step = 2;
    chartModal.maskBullets = false;

    // Add data
    chartModal.data = [
      {
        'date': '2012-01-01',
        'distance': 227,
        'townName': '',
        'townName2': '',
        'townSize': 12,
        'latitude': 40,
        'duration': 408
      }, {
        'date': '2012-01-02',
        'distance': 371,
        'townName': 'Washington',
        'townSize': 7,
        'latitude': 38,
        'duration': 482
      }, {
        'date': '2012-01-03',
        'distance': 433,
        'townName': 'Wilmington',
        'townSize': 3,
        'latitude': 34,
        'duration': 562
      }, {
        'date': '2012-01-04',
        'distance': 345,
        'townName': 'Jacksonville',
        'townSize': 3.5,
        'latitude': 30,
        'duration': 379
      }, {
        'date': '2012-01-05',
        'distance': 480,
        'townName': '',
        'townName2': '',
        'townSize': 5,
        'latitude': 25,
        'duration': 501
      }, {
        'date': '2012-01-06',
        'distance': 386,
        'townName': 'Tallahassee',
        'townSize': 3.5,
        'latitude': 30,
        'duration': 443
      }, {
        'date': '2012-01-07',
        'distance': 348,
        'townName': 'New Orleans',
        'townSize': 5,
        'latitude': 29,
        'duration': 405
      }, {
        'date': '2012-01-08',
        'distance': 238,
        'townName': '',
        'townName2': '',
        'townSize': 8,
        'latitude': 29,
        'duration': 309
      }, {
        'date': '2012-01-09',
        'distance': 218,
        'townName': 'Dalas',
        'townSize': 8,
        'latitude': 32,
        'duration': 287
      }, {
        'date': '2012-01-10',
        'distance': 349,
        'townName': 'Oklahoma City',
        'townSize': 5,
        'latitude': 35,
        'duration': 485
      }, {
        'date': '2012-01-11',
        'distance': 603,
        'townName': 'Kansas City',
        'townSize': 5,
        'latitude': 39,
        'duration': 890
      }, {
        'date': '2012-01-12',
        'distance': 534,
        'townName': '',
        'townName2': '',
        'townSize': 9,
        'latitude': 39,
        'duration': 810
      }, {
        'date': '2012-01-13',
        'townName': 'Salt Lake City',
        'townSize': 6,
        'distance': 425,
        'duration': 670,
        'latitude': 40,
        'dashLength': 8,
        'alpha': 0.4
      }
    ];

    // Create axes
    let dateAxis4Modal = chartModal.xAxes.push(new am4charts.DateAxis());
    // dateAxis4.dataFields.category = 'category';
    dateAxis4Modal.renderer.grid.template.location = 0;
    dateAxis4Modal.renderer.minGridDistance = 50;
    dateAxis4Modal.renderer.grid.template.disabled = true;
    dateAxis4Modal.renderer.fullWidthTooltip = true;
    dateAxis4Modal.skipEmptyPeriods = true;

    let distanceAxis4Modal = chartModal.yAxes.push(new am4charts.ValueAxis());
    distanceAxis4Modal.title.text = 'Number Of Clients';
    distanceAxis4Modal.renderer.grid.template.disabled = true;

    let durationAxis4Modal = chartModal.yAxes.push(new am4charts.DurationAxis());
    durationAxis4Modal.title.text = '';
    durationAxis4Modal.baseUnit = 'minute';
    durationAxis4Modal.renderer.grid.template.disabled = true;
    durationAxis4Modal.renderer.opposite = true;

    // durationAxis4.durationFormatter.durationFormat = 'hh\'h\' mm\'min\'';
    durationAxis4Modal.renderer.labels.template.disabled = true;

    let latitudeAxis4Modal = chartModal.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis4Modal.renderer.grid.template.disabled = true;
    latitudeAxis4Modal.renderer.labels.template.disabled = true;

    // Create series
    let distanceSeries4Modal = chartModal.series.push(new am4charts.ColumnSeries());
    distanceSeries4Modal.id = 'g1';
    distanceSeries4Modal.dataFields.valueY = 'distance';
    distanceSeries4Modal.dataFields.dateX = 'date';
    distanceSeries4Modal.yAxis = distanceAxis4Modal;
    distanceSeries4Modal.tooltipText = '{valueY} Clients';
    distanceSeries4Modal.name = 'Current Period';
    distanceSeries4Modal.columns.template.fillOpacity = 0.7;
    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};
    distanceSeries4Modal.columns.template.events.on('hit', function (ev) {
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

    let disatnceState4Modal = distanceSeries4Modal.columns.template.states.create('hover');
    disatnceState4Modal.properties.fillOpacity = 0.9;

    let latitudeSeries4Modal = chartModal.series.push(new am4charts.LineSeries());
    latitudeSeries4Modal.id = 'g2';
    latitudeSeries4Modal.dataFields.valueY = 'latitude';
    latitudeSeries4Modal.dataFields.dateX = 'date';
    latitudeSeries4Modal.yAxis = latitudeAxis4Modal;
    latitudeSeries4Modal.name = 'Last Year Comparison';
    latitudeSeries4Modal.strokeWidth = 2;
    latitudeSeries4Modal.tooltipText = '{valueY} Clients';
    latitudeSeries4Modal.segments.template.interactionsEnabled = true;
    latitudeSeries4Modal.segments.template.events.on(
      'hit',
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    let latitudeBullet4Modal = latitudeSeries4Modal.bullets.push(new am4charts.CircleBullet());
    latitudeBullet4Modal.circle.fill = am4core.color('#fff');
    latitudeBullet4Modal.circle.strokeWidth = 2;
    latitudeBullet4Modal.circle.propertyFields.radius = 'townSize';

    let latitudeState4Modal = latitudeBullet4Modal.states.create('hover');
    latitudeState4Modal.properties.scale = 1.2;

    let latitudeLabel4Modal = latitudeSeries4Modal.bullets.push(new am4charts.LabelBullet());
    latitudeLabel4Modal.label.text = '{townName2}';
    latitudeLabel4Modal.label.horizontalCenter = 'left';
    latitudeLabel4Modal.label.dx = 14;

    // Add legend
    chartModal.legend = new am4charts.Legend();

    // Add cursor
    chartModal.cursor = new am4charts.XYCursor();
    chartModal.cursor.fullWidthLineX = true;
    chartModal.cursor.xAxis = dateAxis4Modal;
    chartModal.cursor.lineX.strokeOpacity = 0;
    chartModal.cursor.lineX.fill = am4core.color('#000');
    chartModal.cursor.lineX.fillOpacity = 0.1;
  }
}
