import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-top-buy-performance',
  templateUrl: './top-buy-performance.component.html',
  styleUrls: ['./top-buy-performance.component.scss']
})
export class TopBuyPerformanceComponent implements OnInit, AfterViewInit {
  changed = false;

  constructor(private refreshService: RefreshService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('top-by-performance', am4charts.XYChart);

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
    dateAxis.skipEmptyPeriods = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;

// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'price';
    series.dataFields.dateX = 'date';
    series.tensionX = 0.8;
    series.strokeWidth = 3;

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
  }

  openModal() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('top-by-performance-modal', am4charts.XYChart);

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
    dateAxis.skipEmptyPeriods = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;

// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'price';
    series.dataFields.dateX = 'date';
    series.tensionX = 0.8;
    series.strokeWidth = 3;
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
    let prevClickedColumn:any = {};
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color('#fff');
    bullet.circle.strokeWidth = 3;
    bullet.events.on('hit', function (ev) {
      prevClickedColumn.strokeWidth = 3;
      if (!ev.target.circle['selected']) {
        ev.target.circle.strokeWidth = 10;
        prevClickedColumn.selected = false;
        prevClickedColumn = ev.target.circle;
        prevClickedColumn.selected = true;
      }
      else {
        ev.target.circle['selected'] = false;
        prevClickedColumn = {selected: false};
      }

      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    });
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
}
