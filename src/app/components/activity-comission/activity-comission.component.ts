import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-activity-comission',
  templateUrl: './activity-comission.component.html',
  styleUrls: ['./activity-comission.component.scss']
})
export class ActivityComissionComponent implements OnInit, AfterViewInit {
  chart: any;
  private changed = false;

  constructor(private refreshService: RefreshService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('activity-comission', am4charts.XYChart);

    // Add data
    /*chart.data = [
      {
        'date': '2016-03-01',
        'market1': 71,
        'market2': 75,
        'sales1': 50,
        'sales2': 70
      }, {
        'date': '2016-03-06',
        'market1': 74,
        'market2': 78,
        'sales1': 40,
        'sales2': 60
      }, {
        'date': '2016-03-14',
        'market1': 78,
        'market2': 88,
        'sales1': 30,
        'sales2': 40
      }, {
        'date': '2016-03-18',
        'market1': 85,
        'market2': 89,
        'sales1': 60,
        'sales2': 100
      }, {
        'date': '2016-03-22',
        'market1': 82,
        'market2': 89,
        'sales1': 10,
        'sales2': 15
      },{
        'date': '2016-03-26',
        'market1': 82,
        'market2': 89,
        'sales1': 10,
        'sales2': 15
      }, {
        'date': '2016-04-04',
        'market1': 83,
        'market2': 85,
        'sales1': 25,
        'sales2': 50
      }, {
        'date': '2016-04-11',
        'market1': 88,
        'market2': 92,
        'sales1': 45,
        'sales2': 70
      }, {
        'date': '2016-04-18',
        'market1': 85,
        'market2': 90,
        'sales1': 55,
        'sales2': 90
      }, {
        'date': '2016-04-25',
        'market1': 85,
        'market2': 91,
        'sales1': 59,
        'sales2': 95
      }];*/
    /*chart.data = [
      {
        'date': '2016-01-16',
        'market1': 71,
        'market2': 75,
        'sales1': 50,
        'sales2': 70
      }, {
        'date': '2016-01-23',
        'market1': 74,
        'market2': 78,
        'sales1': 40,
        'sales2': 60
      }, {
        'date': '2016-01-30',
        'market1': 78,
        'market2': 88,
        'sales1': 30,
        'sales2': 40
      }, {
        'date': '2016-02-07',
        'market1': 85,
        'market2': 89,
        'sales1': 60,
        'sales2': 100
      }, {
        'date': '2016-02-14',
        'market1': 82,
        'market2': 89,
        'sales1': 10,
        'sales2': 15
      }, {
        'date': '2016-02-21',
        'market1': 83,
        'market2': 85,
        'sales1': 25,
        'sales2': 50
      }, {
        'date': '2016-02-28',
        'market1': 88,
        'market2': 92,
        'sales1': 45,
        'sales2': 70
      }, {
        'date': '2016-03-07',
        'market1': 85,
        'market2': 90,
        'sales1': 55,
        'sales2': 90
      }, {
        'date': '2016-03-14',
        'market1': 85,
        'market2': 91,
        'sales1': 59,
        'sales2': 95
      }];*/

    chart.data = [
      {
        'date': '2019-01-02',
        'market1': 5415558,
        'market2': 4293683,
        'sales1': 17092411,
        'sales2': 37497555
      }, {
        'date': '2019-01-03',
        'market1': 6940018,
        'market2': 6629146,
        'sales1': 13569164,
        'sales2': 29572928
      }, {
        'date': '2019-01-04',
        'market1': 6551180,
        'market2': 5157816,
        'sales1': 11708996,
        'sales2': 24037859
      }, {
        'date': '2019-01-07',
        'market1': 5816263,
        'market2': 7096904,
        'sales1': 12913167,
        'sales2': 27600601
      }, {
        'date': '2019-01-08',
        'market1': 11799595,
        'market2': 4897549,
        'sales1': 16697144,
        'sales2': 33143713
      }, {
        'date': '2019-01-09',
        'market1': 6511073,
        'market2': 6008038,
        'sales1': 12519111,
        'sales2': 24978550
      }, {
        'date': '2019-01-10',
        'market1': 4491119,
        'market2': 5205291,
        'sales1': 9696410,
        'sales2': 25105605
      }, {
        'date': '2019-01-11',
        'market1': 8907644,
        'market2': 7223574,
        'sales1': 16131218,
        'sales2': 24826602
      }, {
        'date': '2019-01-14',
        'market1': 5435561,
        'market2': 7599663,
        'sales1': 13035224,
        'sales2': 27001508
      }, {
        'date': '2019-01-15',
        'market1': 3355115,
        'market2': 3806139,
        'sales1': 7161254,
        'sales2': 15972510
      }];


// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // ateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.title.text = 'Activities';
    dateAxis.skipEmptyPeriods= true;

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = 'Client Commissions';

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    // valueAxis2.renderer.grid.template.disabled = true;

// Create series
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'sales1';
    series1.dataFields.dateX = 'date';
    series1.yAxis = valueAxis1;
    series1.name = 'Activities';
    series1.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
    series1.fill = chart.colors.getIndex(0);
    series1.strokeWidth = 0;
    series1.clustered = false;
    series1.columns.template.width = am4core.percent(40);

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'sales2';
    series2.dataFields.dateX = 'date';
    series2.yAxis = valueAxis1;
    series2.name = 'Client Commission';
    series2.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
    series2.fill = chart.colors.getIndex(0).lighten(0.5);
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.toBack();

    /*let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'market1';
    series3.dataFields.dateX = 'date';
    series3.name = 'Market Days';
    series3.strokeWidth = 2;
    series3.tensionX = 0.7;
    series3.yAxis = valueAxis2;
    series3.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';

    let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 3;
    bullet3.circle.strokeWidth = 2;
    bullet3.circle.fill = am4core.color('#fff');

    let series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = 'market2';
    series4.dataFields.dateX = 'date';
    series4.name = 'Market Days ALL';
    series4.strokeWidth = 2;
    series4.tensionX = 0.7;
    series4.yAxis = valueAxis2;
    series4.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
    series4.stroke = chart.colors.getIndex(0).lighten(0.5);
    series4.strokeDasharray = '3,3';

    let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
    bullet4.circle.radius = 3;
    bullet4.circle.strokeWidth = 2;
    bullet4.circle.fill = am4core.color('#fff');*/

// Add cursor
    chart.cursor = new am4charts.XYCursor();

// Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';

    this.chart = chart;
  }

  openModal() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('activity-comission-modal', am4charts.XYChart);

    // Add data
    /*chart.data = [
      {
        'date': '2016-01-16',
        'market1': 71,
        'market2': 75,
        'sales1': 50,
        'sales2': 70
      }, {
        'date': '2016-01-23',
        'market1': 74,
        'market2': 78,
        'sales1': 40,
        'sales2': 60
      }, {
        'date': '2016-01-30',
        'market1': 78,
        'market2': 88,
        'sales1': 30,
        'sales2': 40
      }, {
        'date': '2016-02-07',
        'market1': 85,
        'market2': 89,
        'sales1': 60,
        'sales2': 100
      }, {
        'date': '2016-02-14',
        'market1': 82,
        'market2': 89,
        'sales1': 10,
        'sales2': 15
      }, {
        'date': '2016-02-21',
        'market1': 83,
        'market2': 85,
        'sales1': 25,
        'sales2': 50
      }, {
        'date': '2016-02-28',
        'market1': 88,
        'market2': 92,
        'sales1': 45,
        'sales2': 70
      }, {
        'date': '2016-03-07',
        'market1': 85,
        'market2': 90,
        'sales1': 55,
        'sales2': 90
      }, {
        'date': '2016-03-14',
        'market1': 85,
        'market2': 91,
        'sales1': 59,
        'sales2': 95
      }
      ];*/
    /*chart.data = [
      {
        'date': '2016-03-01',
        'market1': 71,
        'market2': 75,
        'sales1': 50,
        'sales2': 70
      }, {
        'date': '2016-03-07',
        'market1': 74,
        'market2': 78,
        'sales1': 40,
        'sales2': 60
      }, {
        'date': '2016-03-14',
        'market1': 78,
        'market2': 88,
        'sales1': 30,
        'sales2': 40
      }, {
        'date': '2016-03-21',
        'market1': 85,
        'market2': 89,
        'sales1': 60,
        'sales2': 100
      }, {
        'date': '2016-03-28',
        'market1': 82,
        'market2': 89,
        'sales1': 10,
        'sales2': 15
      }, {
        'date': '2016-04-04',
        'market1': 83,
        'market2': 85,
        'sales1': 25,
        'sales2': 50
      }, {
        'date': '2016-04-11',
        'market1': 88,
        'market2': 92,
        'sales1': 45,
        'sales2': 70
      }, {
        'date': '2016-04-18',
        'market1': 85,
        'market2': 90,
        'sales1': 55,
        'sales2': 90
      }, {
        'date': '2016-04-25',
        'market1': 85,
        'market2': 91,
        'sales1': 59,
        'sales2': 95
      }];*/
    chart.data = [
      {
        'date': '2019-01-02',
        'market1': 5415558,
        'market2': 4293683,
        'sales1': 17092411,
        'sales2': 37497555
      }, {
        'date': '2019-01-03',
        'market1': 6940018,
        'market2': 6629146,
        'sales1': 13569164,
        'sales2': 29572928
      }, {
        'date': '2019-01-04',
        'market1': 6551180,
        'market2': 5157816,
        'sales1': 11708996,
        'sales2': 24037859
      }, {
        'date': '2019-01-07',
        'market1': 5816263,
        'market2': 7096904,
        'sales1': 12913167,
        'sales2': 27600601
      }, {
        'date': '2019-01-08',
        'market1': 11799595,
        'market2': 4897549,
        'sales1': 16697144,
        'sales2': 33143713
      }, {
        'date': '2019-01-09',
        'market1': 6511073,
        'market2': 6008038,
        'sales1': 12519111,
        'sales2': 24978550
      }, {
        'date': '2019-01-10',
        'market1': 4491119,
        'market2': 5205291,
        'sales1': 9696410,
        'sales2': 25105605
      }, {
        'date': '2019-01-11',
        'market1': 8907644,
        'market2': 7223574,
        'sales1': 16131218,
        'sales2': 24826602
      }, {
        'date': '2019-01-14',
        'market1': 5435561,
        'market2': 7599663,
        'sales1': 13035224,
        'sales2': 27001508
      }, {
        'date': '2019-01-15',
        'market1': 3355115,
        'market2': 3806139,
        'sales1': 7161254,
        'sales2': 15972510
      }];

// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 10;
    dateAxis.title.text = 'Activities';
    dateAxis.skipEmptyPeriods = true;

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = 'Client Commissions';

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    // valueAxis2.renderer.grid.template.disabled = true;

// Create series
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'sales1';
    series1.dataFields.dateX = 'date';
    series1.yAxis = valueAxis1;
    series1.name = 'Activities';
    series1.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
    series1.fill = chart.colors.getIndex(0);
    series1.strokeWidth = 0;
    series1.clustered = false;
    series1.columns.template.width = am4core.percent(40);

    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};
    series1.columns.template.events.on('hit', function (ev) {
      prevClickedColumn.strokeWidth = 0;
      if (!ev.target.column['selected']) {
        ev.target.column.strokeWidth = 4;
        ev.target.column.stroke = am4core.color('#ffd740');
        prevClickedColumn.selected = false;
        prevClickedColumn.selected = false;
        prevClickedColumn = ev.target.column;
        prevClickedColumn.selected = true;
        ev.target.column['selected'] = true;
      }
      else {
        ev.target.column['selected'] = false;
        prevClickedColumn = {selected: false};
      }
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'sales2';
    series2.dataFields.dateX = 'date';
    series2.yAxis = valueAxis1;
    series2.name = 'Client Commission';
    series2.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
    series2.fill = chart.colors.getIndex(0).lighten(0.5);
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.toBack();
    series2.columns.template.events.on('hit', function (ev) {
      prevClickedColumn.strokeWidth = 0;
      if (!ev.target.column['selected']) {
        ev.target.column.strokeWidth = 4;
        ev.target.column.stroke = am4core.color('#ffd740');
        prevClickedColumn.selected = false;
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

// Add cursor
    chart.cursor = new am4charts.XYCursor();

// Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
  }
}
