import {Component, OnInit, AfterViewInit, NgZone, OnDestroy, Input} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.scss']
})
export class AccountActivityComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;
  private changed = false;
  @Input() height: string = '24vh';
  constructor(private zone: NgZone, private refreshService: RefreshService) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      // let chart = am4core.create('chartdivActivity', am4charts.XYChart);
      let chart = am4core.create('chartdivActivity', am4charts.XYChart);
      let data = [
        {
          'name': 'Alex',
          'email': 2,
          'calls': 4,
          'meetings': 3,
        }, {
          'name': 'Henry',
          'email': 1,
          'calls': 5,
          'meetings': 3,
        }, {
          'name': 'Soojan',
          'email': 5,
          'calls': 1,
          'meetings': 5,
        }, {
          'name': 'Ramdin',
          'email': 1,
          'calls': 2,
          'meetings': 3,
        }, {
          'name': 'Camelon',
          'email': 4,
          'calls': 4,
          'meetings': 5,
        }, {
          'name': 'Sofia',
          'email': 5,
          'calls': 4,
          'meetings': 1,
        }, {
          'name': 'Jakes',
          'email': 7,
          'calls': 5,
          'meetings': 1,
        }, {
          'name': 'John',
          'email': 4,
          'calls': 4,
          'meetings': 3,
        }, {
          'name': 'Peter',
          'email': 2,
          'calls': 3,
          'meetings': 1,
        }, {
          'name': 'Harry',
          'email': 4,
          'calls': 4,
          'meetings': 1,
        }
      ];

      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = data;


// Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'name';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.renderer.inside = true;
      // valueAxis.renderer.labels.template.disabled = true;
      // valueAxis.min = 0;

// Create series
      function createSeries(field, name) {

        // Set up series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = 'name';
        series.sequencedInterpolation = true;
        console.log(series.stroke);

        // Make it stacked
        series.stacked = true;

        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText = `[bold]{name}[/]\n[font-size:14px]${name}: {valueY}`;

        // Add label
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = '{valueY}';
        labelBullet.locationY = 0.5;

        return series;
      }

      createSeries('email', 'Emails');
      createSeries('calls', 'Calls');
      createSeries('meetings', 'Meetings');
      chart.fontSize = 10;

      // Legend
      chart.legend = new am4charts.Legend();

      this.chart = chart;
    });
  }

  openModal() {
    // Create chart instance

    // Create chart instance
    let chart = am4core.create('chartdivActivityModal', am4charts.XYChart);

    // Add data
    // Add data
    let data = [
      {
        'name': 'Alex',
        'email': 2,
        'calls': 4,
        'meetings': 3,
      }, {
        'name': 'Henry',
        'email': 1,
        'calls': 5,
        'meetings': 3,
      }, {
        'name': 'Soojan',
        'email': 5,
        'calls': 1,
        'meetings': 5,
      }, {
        'name': 'Ramdin',
        'email': 1,
        'calls': 2,
        'meetings': 3,
      }, {
        'name': 'Camelon',
        'email': 4,
        'calls': 4,
        'meetings': 5,
      }, {
        'name': 'Sofia',
        'email': 5,
        'calls': 4,
        'meetings': 1,
      }, {
        'name': 'Jakes',
        'email': 7,
        'calls': 5,
        'meetings': 1,
      }, {
        'name': 'John',
        'email': 4,
        'calls': 4,
        'meetings': 3,
      }, {
        'name': 'Peter',
        'email': 2,
        'calls': 3,
        'meetings': 1,
      }, {
        'name': 'Harry',
        'email': 4,
        'calls': 4,
        'meetings': 1,
      }
    ];

    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // Add data
    /*chart.data = [
      {
      'year': '2016',
      'europe': 2.5,
      'namerica': 2.5,
      'asia': 2.1,
      'lamerica': 0.3,
      'meast': 0.2,
      'africa': 0.1
    }, {
      'year': '2017',
      'europe': 2.6,
      'namerica': 2.7,
      'asia': 2.2,
      'lamerica': 0.3,
      'meast': 0.3,
      'africa': 0.1
    }, {
      'year': '2018',
      'europe': 2.8,
      'namerica': 2.9,
      'asia': 2.4,
      'lamerica': 0.3,
      'meast': 0.3,
      'africa': 0.1
    }];*/
    chart.data = data;


// Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};

// Create series
    function createSeries(field, name) {

      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'name';
      series.sequencedInterpolation = true;

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

      // Make it stacked
      series.stacked = true;

      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = `[bold]{name}[/]\n[font-size:14px]${name}: {valueY}`;

      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = '{valueY}';
      labelBullet.locationY = 0.5;

      return series;
    }

    createSeries('email', 'Emails');
    createSeries('calls', 'Calls');
    createSeries('meetings', 'Meetings');
    /*createSeries('lamerica', 'Latin America');
    createSeries('meast', 'Middle-East');
    createSeries('africa', 'Africa');*/

    // Legend
    chart.legend = new am4charts.Legend();

    this.chart = chart;

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
