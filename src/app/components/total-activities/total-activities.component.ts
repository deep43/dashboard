import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-total-activities',
  templateUrl: './total-activities.component.html',
  styleUrls: ['./total-activities.component.scss']
})
export class TotalActivitiesComponent implements OnInit, AfterViewInit {
  changed = false;
  constructor(private refreshService: RefreshService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('call-activities', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        'date': '2012-03-01',
        'price': 20
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 15
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 158
      }, {
        'date': '2012-03-06',
        'price': 57
      }, {
        'date': '2012-03-07',
        'price': 107
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 75
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 380
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 169
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 147
      }];

// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.skipEmptyPeriods= true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.renderer.labels.template.disabled = true;

// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'price';
    series.dataFields.dateX = 'date';
    series.tensionX = 0.8;
    series.strokeWidth = 3;
    series.stroke = am4core.color('#6694DC');

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;

// Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color('#000');
    chart.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chart.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let range = valueAxis.axisRanges.create();
    range.value = 90.4;
    range.grid.stroke = am4core.color('#396478');
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.grid.strokeDasharray = '3,3';
    range.label.inside = true;
    range.label.text = 'Average';
    range.label.fill = range.grid.stroke;
    range.label.verticalCenter = 'bottom';

    //// EMAILS /////
    let chartEmails = am4core.create('email-activities', am4charts.XYChart);

    // Add data
    chartEmails.data = [
      {
        'date': '2012-03-01',
        'price': 380
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 15
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 80
      }, {
        'date': '2012-03-06',
        'price': 57
      }, {
        'date': '2012-03-07',
        'price': 20
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 75
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 90
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 169
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 400
      }
    ];

// Create axes
    let dateAxisEmails = chartEmails.xAxes.push(new am4charts.DateAxis());
    dateAxisEmails.renderer.grid.template.location = 0;
    dateAxisEmails.renderer.minGridDistance = 50;
    dateAxisEmails.renderer.labels.template.disabled = true;
    dateAxisEmails.skipEmptyPeriods= true;

    let valueAxisEmails = chartEmails.yAxes.push(new am4charts.ValueAxis());
    valueAxisEmails.logarithmic = true;
    valueAxisEmails.renderer.minGridDistance = 20;
    valueAxisEmails.renderer.labels.template.disabled = true;

// Create series
    let seriesEmails = chartEmails.series.push(new am4charts.LineSeries());
    seriesEmails.dataFields.valueY = 'price';
    seriesEmails.dataFields.dateX = 'date';
    seriesEmails.tensionX = 0.8;
    seriesEmails.strokeWidth = 3;
    // seriesEmails.stroke = am4core.color('#9ccc65');

    let bulletEmails = seriesEmails.bullets.push(new am4charts.CircleBullet());
    bulletEmails.circle.fill = am4core.color('#fff');
    bulletEmails.circle.strokeWidth = 3;

// Add cursor
    chartEmails.cursor = new am4charts.XYCursor();
    chartEmails.cursor.fullWidthLineX = true;
    chartEmails.cursor.xAxis = dateAxisEmails;
    chartEmails.cursor.lineX.strokeWidth = 0;
    chartEmails.cursor.lineX.fill = am4core.color('#000');
    chartEmails.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartEmails.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeEmails = valueAxisEmails.axisRanges.create();
    rangeEmails.value = 90.4;
    rangeEmails.grid.stroke = am4core.color('#396478');
    rangeEmails.grid.strokeWidth = 1;
    rangeEmails.grid.strokeOpacity = 1;
    rangeEmails.grid.strokeDasharray = '3,3';
    rangeEmails.label.inside = true;
    rangeEmails.label.text = 'Average';
    rangeEmails.label.fill = rangeEmails.grid.stroke;
    rangeEmails.label.verticalCenter = 'bottom';

    //// Meetings /////
    let chartMeetings = am4core.create('meetings-activities', am4charts.XYChart);

    // Add data
    chartMeetings.data = [
      {
        'date': '2012-03-01',
        'price': 200
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 100
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 158
      }, {
        'date': '2012-03-06',
        'price': 200
      }, {
        'date': '2012-03-07',
        'price': 107
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 400
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 40
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 75
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 90
      }
    ];

// Create axes
    let dateAxisMeetings = chartMeetings.xAxes.push(new am4charts.DateAxis());
    dateAxisMeetings.renderer.grid.template.location = 0;
    dateAxisMeetings.renderer.minGridDistance = 50;
    dateAxisMeetings.renderer.labels.template.disabled = true;
    dateAxisMeetings.skipEmptyPeriods= true;

    let valueAxisMeetings = chartMeetings.yAxes.push(new am4charts.ValueAxis());
    valueAxisMeetings.logarithmic = true;
    valueAxisMeetings.renderer.minGridDistance = 20;
    valueAxisMeetings.renderer.labels.template.disabled = true;

// Create series
    let seriesMeetings = chartMeetings.series.push(new am4charts.LineSeries());
    seriesMeetings.dataFields.valueY = 'price';
    seriesMeetings.dataFields.dateX = 'date';
    seriesMeetings.tensionX = 0.8;
    seriesMeetings.strokeWidth = 3;
    seriesMeetings.stroke = am4core.color('#8066DC');

    let bulletMeetings = seriesMeetings.bullets.push(new am4charts.CircleBullet());
    bulletMeetings.circle.fill = am4core.color('#fff');
    bulletMeetings.circle.strokeWidth = 3;

// Add cursor
    chartMeetings.cursor = new am4charts.XYCursor();
    chartMeetings.cursor.fullWidthLineX = true;
    chartMeetings.cursor.xAxis = dateAxisMeetings;
    chartMeetings.cursor.lineX.strokeWidth = 0;
    chartMeetings.cursor.lineX.fill = am4core.color('#000');
    chartMeetings.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartMeetings.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeMeetings = valueAxisMeetings.axisRanges.create();
    rangeMeetings.value = 90.4;
    rangeMeetings.grid.stroke = am4core.color('#396478');
    rangeMeetings.grid.strokeWidth = 1;
    rangeMeetings.grid.strokeOpacity = 1;
    rangeMeetings.grid.strokeDasharray = '3,3';
    rangeMeetings.label.inside = true;
    rangeMeetings.label.text = 'Average';
    rangeMeetings.label.fill = rangeMeetings.grid.stroke;
    rangeMeetings.label.verticalCenter = 'bottom';

    //// Combined /////
    let chartCombined = am4core.create('combined-activities', am4charts.XYChart);

    // Add data
    chartCombined.data = [
      {
        'date': '2012-03-01',
        'price': 400
      }, {
        'date': '2012-03-02',
        'price': 350
      }, {
        'date': '2012-03-03',
        'price': 325
      }, {
        'date': '2012-03-04',
        'price': 375
      }, {
        'date': '2012-03-05',
        'price': 358
      }, {
        'date': '2012-03-06',
        'price': 320
      }, {
        'date': '2012-03-07',
        'price': 307
      }, {
        'date': '2012-03-08',
        'price': 340
      }, {
        'date': '2012-03-09',
        'price': 380
      }, {
        'date': '2012-03-10',
        'price': 332
      }, {
        'date': '2012-03-11',
        'price': 380
      }, {
        'date': '2012-03-12',
        'price': 356
      }, {
        'date': '2012-03-13',
        'price': 369
      }, {
        'date': '2012-03-14',
        'price': 400
      }, {
        'date': '2012-03-15',
        'price': 447
      }
    ];

// Create axes
    let dateAxisCombined = chartCombined.xAxes.push(new am4charts.DateAxis());
    dateAxisCombined.renderer.grid.template.location = 0;
    dateAxisCombined.renderer.minGridDistance = 50;
    dateAxisCombined.renderer.labels.template.disabled = true;
    dateAxisCombined.skipEmptyPeriods= true;

    let valueAxisCombined = chartCombined.yAxes.push(new am4charts.ValueAxis());
    valueAxisCombined.logarithmic = true;
    valueAxisCombined.renderer.minGridDistance = 20;
    valueAxisCombined.renderer.labels.template.disabled = true;

// Create series
    let seriesCombined = chartCombined.series.push(new am4charts.LineSeries());
    seriesCombined.dataFields.valueY = 'price';
    seriesCombined.dataFields.dateX = 'date';
    seriesCombined.tensionX = 0.8;
    seriesCombined.strokeWidth = 3;
    seriesCombined.stroke = am4core.color('#ffd507');

    let bulletCombined = seriesCombined.bullets.push(new am4charts.CircleBullet());
    bulletCombined.circle.fill = am4core.color('#fff');
    bulletCombined.circle.strokeWidth = 3;

// Add cursor
    chartCombined.cursor = new am4charts.XYCursor();
    chartCombined.cursor.fullWidthLineX = true;
    chartCombined.cursor.xAxis = dateAxisCombined;
    chartCombined.cursor.lineX.strokeWidth = 0;
    chartCombined.cursor.lineX.fill = am4core.color('#000');
    chartCombined.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartCombined.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeCombined = valueAxisCombined.axisRanges.create();
    rangeCombined.value = 90.4;
    rangeCombined.grid.stroke = am4core.color('#396478');
    rangeCombined.grid.strokeWidth = 1;
    rangeCombined.grid.strokeOpacity = 1;
    rangeCombined.grid.strokeDasharray = '3,3';
    rangeCombined.label.inside = true;
    rangeCombined.label.text = 'Average';
    rangeCombined.label.fill = rangeCombined.grid.stroke;
    rangeCombined.label.verticalCenter = 'bottom';
  }

  openModal() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('call-activities-modal', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        'date': '2012-03-01',
        'price': 20
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 15
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 158
      }, {
        'date': '2012-03-06',
        'price': 57
      }, {
        'date': '2012-03-07',
        'price': 107
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 75
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 380
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 169
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 147
      }
      ];

// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.skipEmptyPeriods= true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;

// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'price';
    series.dataFields.dateX = 'date';
    series.tensionX = 0.8;
    series.strokeWidth = 3;
    series.stroke = am4core.color('#6694DC');
    const that = this;
    series.segments.template.interactionsEnabled = true;
    series.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;

// Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color('#000');
    chart.cursor.lineX.fillOpacity = 0.1;

// Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let range = valueAxis.axisRanges.create();
    range.value = 90.4;
    range.grid.stroke = am4core.color('#396478');
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.grid.strokeDasharray = '3,3';
    range.label.inside = true;
    range.label.text = 'Average';
    range.label.fill = range.grid.stroke;
    range.label.verticalCenter = 'bottom';
  }

  openModalEmail() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    //// EMAILS /////
    let chartEmails = am4core.create('email-activities-modal', am4charts.XYChart);

    // Add data
    chartEmails.data = [
      {
        'date': '2012-03-01',
        'price': 380
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 15
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 80
      }, {
        'date': '2012-03-06',
        'price': 57
      }, {
        'date': '2012-03-07',
        'price': 20
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 75
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 90
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 169
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 400
      }
    ];

// Create axes
    let dateAxisEmails = chartEmails.xAxes.push(new am4charts.DateAxis());
    dateAxisEmails.renderer.grid.template.location = 0;
    dateAxisEmails.renderer.minGridDistance = 50;
    dateAxisEmails.renderer.labels.template.disabled = true;
    dateAxisEmails.skipEmptyPeriods= true;

    let valueAxisEmails = chartEmails.yAxes.push(new am4charts.ValueAxis());
    valueAxisEmails.logarithmic = true;
    valueAxisEmails.renderer.minGridDistance = 20;
    valueAxisEmails.renderer.labels.template.disabled = true;

// Create series
    let seriesEmails = chartEmails.series.push(new am4charts.LineSeries());
    seriesEmails.dataFields.valueY = 'price';
    seriesEmails.dataFields.dateX = 'date';
    seriesEmails.tensionX = 0.8;
    seriesEmails.strokeWidth = 3;
    // seriesEmails.stroke = am4core.color('#9ccc65');
    const that = this;
    seriesEmails.segments.template.interactionsEnabled = true;
    seriesEmails.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    let bulletEmails = seriesEmails.bullets.push(new am4charts.CircleBullet());
    bulletEmails.circle.fill = am4core.color('#fff');
    bulletEmails.circle.strokeWidth = 3;

// Add cursor
    chartEmails.cursor = new am4charts.XYCursor();
    chartEmails.cursor.fullWidthLineX = true;
    chartEmails.cursor.xAxis = dateAxisEmails;
    chartEmails.cursor.lineX.strokeWidth = 0;
    chartEmails.cursor.lineX.fill = am4core.color('#000');
    chartEmails.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartEmails.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeEmails = valueAxisEmails.axisRanges.create();
    rangeEmails.value = 90.4;
    rangeEmails.grid.stroke = am4core.color('#396478');
    rangeEmails.grid.strokeWidth = 1;
    rangeEmails.grid.strokeOpacity = 1;
    rangeEmails.grid.strokeDasharray = '3,3';
    rangeEmails.label.inside = true;
    rangeEmails.label.text = 'Average';
    rangeEmails.label.fill = rangeEmails.grid.stroke;
    rangeEmails.label.verticalCenter = 'bottom';
  }

  openModalMeetings() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    //// EMAILS /////
    let chartMeetings = am4core.create('meetings-activities-modal', am4charts.XYChart);

    // Add data
    // Add data
    chartMeetings.data = [
      {
        'date': '2012-03-01',
        'price': 200
      }, {
        'date': '2012-03-02',
        'price': 75
      }, {
        'date': '2012-03-03',
        'price': 100
      }, {
        'date': '2012-03-04',
        'price': 75
      }, {
        'date': '2012-03-05',
        'price': 158
      }, {
        'date': '2012-03-06',
        'price': 200
      }, {
        'date': '2012-03-07',
        'price': 107
      }, {
        'date': '2012-03-08',
        'price': 89
      }, {
        'date': '2012-03-09',
        'price': 400
      }, {
        'date': '2012-03-10',
        'price': 132
      }, {
        'date': '2012-03-11',
        'price': 40
      }, {
        'date': '2012-03-12',
        'price': 56
      }, {
        'date': '2012-03-13',
        'price': 75
      }, {
        'date': '2012-03-14',
        'price': 24
      }, {
        'date': '2012-03-15',
        'price': 90
      }
    ];

// Create axes
    let dateAxisMeetings = chartMeetings.xAxes.push(new am4charts.DateAxis());
    dateAxisMeetings.renderer.grid.template.location = 0;
    dateAxisMeetings.renderer.minGridDistance = 50;
    dateAxisMeetings.renderer.labels.template.disabled = true;
    dateAxisMeetings.skipEmptyPeriods= true;

    let valueAxisMeetings = chartMeetings.yAxes.push(new am4charts.ValueAxis());
    valueAxisMeetings.logarithmic = true;
    valueAxisMeetings.renderer.minGridDistance = 20;
    valueAxisMeetings.renderer.labels.template.disabled = true;

// Create series
    let seriesMeetings = chartMeetings.series.push(new am4charts.LineSeries());
    seriesMeetings.dataFields.valueY = 'price';
    seriesMeetings.dataFields.dateX = 'date';
    seriesMeetings.tensionX = 0.8;
    seriesMeetings.strokeWidth = 3;
    seriesMeetings.stroke = am4core.color('#8066DC');
    const that = this;
    seriesMeetings.segments.template.interactionsEnabled = true;
    seriesMeetings.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    let bulletMeetings = seriesMeetings.bullets.push(new am4charts.CircleBullet());
    bulletMeetings.circle.fill = am4core.color('#fff');
    bulletMeetings.circle.strokeWidth = 3;

// Add cursor
    chartMeetings.cursor = new am4charts.XYCursor();
    chartMeetings.cursor.fullWidthLineX = true;
    chartMeetings.cursor.xAxis = dateAxisMeetings;
    chartMeetings.cursor.lineX.strokeWidth = 0;
    chartMeetings.cursor.lineX.fill = am4core.color('#000');
    chartMeetings.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartMeetings.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeMeetings = valueAxisMeetings.axisRanges.create();
    rangeMeetings.value = 90.4;
    rangeMeetings.grid.stroke = am4core.color('#396478');
    rangeMeetings.grid.strokeWidth = 1;
    rangeMeetings.grid.strokeOpacity = 1;
    rangeMeetings.grid.strokeDasharray = '3,3';
    rangeMeetings.label.inside = true;
    rangeMeetings.label.text = 'Average';
    rangeMeetings.label.fill = rangeMeetings.grid.stroke;
    rangeMeetings.label.verticalCenter = 'bottom';
  }

  openModalCombined() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    //// Combined /////
    let chartCombined = am4core.create('combined-activities-modal', am4charts.XYChart);

    // Add data
    chartCombined.data = [
      {
        'date': '2012-03-01',
        'price': 400
      }, {
        'date': '2012-03-02',
        'price': 350
      }, {
        'date': '2012-03-03',
        'price': 325
      }, {
        'date': '2012-03-04',
        'price': 375
      }, {
        'date': '2012-03-05',
        'price': 358
      }, {
        'date': '2012-03-06',
        'price': 320
      }, {
        'date': '2012-03-07',
        'price': 307
      }, {
        'date': '2012-03-08',
        'price': 340
      }, {
        'date': '2012-03-09',
        'price': 380
      }, {
        'date': '2012-03-10',
        'price': 332
      }, {
        'date': '2012-03-11',
        'price': 380
      }, {
        'date': '2012-03-12',
        'price': 356
      }, {
        'date': '2012-03-13',
        'price': 369
      }, {
        'date': '2012-03-14',
        'price': 400
      }, {
        'date': '2012-03-15',
        'price': 447
      }
    ];

// Create axes
    let dateAxisCombined = chartCombined.xAxes.push(new am4charts.DateAxis());
    dateAxisCombined.renderer.grid.template.location = 0;
    dateAxisCombined.renderer.minGridDistance = 50;
    dateAxisCombined.renderer.labels.template.disabled = true;
    dateAxisCombined.skipEmptyPeriods= true;

    let valueAxisCombined = chartCombined.yAxes.push(new am4charts.ValueAxis());
    valueAxisCombined.logarithmic = true;
    valueAxisCombined.renderer.minGridDistance = 20;
    valueAxisCombined.renderer.labels.template.disabled = true;

// Create series
    let seriesCombined = chartCombined.series.push(new am4charts.LineSeries());
    seriesCombined.dataFields.valueY = 'price';
    seriesCombined.dataFields.dateX = 'date';
    seriesCombined.tensionX = 0.8;
    seriesCombined.strokeWidth = 3;
    seriesCombined.stroke = am4core.color('#ffd507');
    const that = this;
    seriesCombined.segments.template.interactionsEnabled = true;
    seriesCombined.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    let bulletCombined = seriesCombined.bullets.push(new am4charts.CircleBullet());
    bulletCombined.circle.fill = am4core.color('#fff');
    bulletCombined.circle.strokeWidth = 3;

// Add cursor
    chartCombined.cursor = new am4charts.XYCursor();
    chartCombined.cursor.fullWidthLineX = true;
    chartCombined.cursor.xAxis = dateAxisCombined;
    chartCombined.cursor.lineX.strokeWidth = 0;
    chartCombined.cursor.lineX.fill = am4core.color('#000');
    chartCombined.cursor.lineX.fillOpacity = 0.1;

    // override font size
    chartCombined.fontSize = 10;

// Add scrollbar
    // chart.scrollbarX = new am4core.Scrollbar();

// Add a guide
    let rangeCombined = valueAxisCombined.axisRanges.create();
    rangeCombined.value = 90.4;
    rangeCombined.grid.stroke = am4core.color('#396478');
    rangeCombined.grid.strokeWidth = 1;
    rangeCombined.grid.strokeOpacity = 1;
    rangeCombined.grid.strokeDasharray = '3,3';
    rangeCombined.label.inside = true;
    rangeCombined.label.text = 'Average';
    rangeCombined.label.fill = rangeCombined.grid.stroke;
    rangeCombined.label.verticalCenter = 'bottom';
  }
}
