import {Component, OnInit, AfterViewInit, NgZone, OnDestroy} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-weekly-performance',
  templateUrl: './weekly-performance.component.html',
  styleUrls: ['./weekly-performance.component.scss']
})
export class WeeklyPerformanceComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;
  changed = false;

  constructor(private zone: NgZone, private refreshService: RefreshService) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create('chartdivWeekly', am4charts.XYChart);

      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
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
      /*chart.data = [
        {
          category: 'One',
          value1: 1,
          value2: 5,
          value3: 3
        },
        {
          category: 'Two',
          value1: 2,
          value2: 5,
          value3: 3
        },
        {
          category: 'Three',
          value1: 3,
          value2: 5,
          value3: 4
        },
        {
          category: 'Four',
          value1: 4,
          value2: 5,
          value3: 6
        },
        {
          category: 'Five',
          value1: 3,
          value2: 5,
          value3: 4
        },
        {
          category: 'Six',
          value1: 2,
          value2: 13,
          value3: 1
        }
      ];*/

      chart.data = data;

      chart.colors.step = 2;
      chart.padding(30, 30, 10, 30);
      chart.legend = new am4charts.Legend();

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'name';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;
      valueAxis.calculateTotals = true;
      valueAxis.renderer.minWidth = 50;


      let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.columns.template.width = am4core.percent(80);
      series1.columns.template.tooltipText =
        '{name}: Emails {valueY.totalPercent.formatNumber("#.00")}%';
      series1.name = 'Emails';
      series1.dataFields.categoryX = 'name';
      series1.dataFields.valueY = 'email';
      series1.dataFields.valueYShow = 'totalPercent';
      series1.dataItems.template.locations.categoryX = 0.5;
      series1.stacked = true;
      series1.tooltip.pointerOrientation = 'vertical';

      let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
      bullet1.interactionsEnabled = false;
      bullet1.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
      bullet1.label.fill = am4core.color('#ffffff');
      bullet1.locationY = 0.5;

      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.columns.template.width = am4core.percent(80);
      series2.columns.template.tooltipText =
        '{name}: Calls {valueY.totalPercent.formatNumber("#.00")}%';
      series2.name = 'Calls';
      series2.dataFields.categoryX = 'name';
      series2.dataFields.valueY = 'calls';
      series2.dataFields.valueYShow = 'totalPercent';
      series2.dataItems.template.locations.categoryX = 0.5;
      series2.stacked = true;
      series2.tooltip.pointerOrientation = 'vertical';

      let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
      bullet2.interactionsEnabled = false;
      bullet2.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
      bullet2.locationY = 0.5;
      bullet2.label.fill = am4core.color('#ffffff');

      let series3 = chart.series.push(new am4charts.ColumnSeries());
      series3.columns.template.width = am4core.percent(80);
      series3.columns.template.tooltipText =
        '{name}: Meetings {valueY.totalPercent.formatNumber("#.00")}%';
      series3.name = 'Meetings';
      series3.dataFields.categoryX = 'name';
      series3.dataFields.valueY = 'meetings';
      series3.dataFields.valueYShow = 'totalPercent';
      series3.dataItems.template.locations.categoryX = 0.5;
      series3.stacked = true;
      series3.tooltip.pointerOrientation = 'vertical';

      let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
      bullet3.interactionsEnabled = false;
      bullet3.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
      bullet3.locationY = 0.5;
      bullet3.label.fill = am4core.color('#ffffff');

      chart.scrollbarX = new am4core.Scrollbar();
      chart.fontSize = 10;

      this.chart = chart;
    });
  }

  openModal() {
    // Create chart instance

    // Create chart instance
    let chart = am4core.create('chartdivWeeklyModal', am4charts.XYChart);

    // Add data
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
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
    /*chart.data = [
      {
        category: 'One',
        value1: 1,
        value2: 5,
        value3: 3
      },
      {
        category: 'Two',
        value1: 2,
        value2: 5,
        value3: 3
      },
      {
        category: 'Three',
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: 'Four',
        value1: 4,
        value2: 5,
        value3: 6
      },
      {
        category: 'Five',
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: 'Six',
        value1: 2,
        value2: 13,
        value3: 1
      }
    ];*/

    chart.data = data;

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;


    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      '{name}: Emails {valueY.totalPercent.formatNumber("#.00")}%';
    series1.name = 'Emails';
    series1.dataFields.categoryX = 'name';
    series1.dataFields.valueY = 'email';
    series1.dataFields.valueYShow = 'totalPercent';
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = 'vertical';
    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};
    series1.columns.template.events.on("hit", function(ev) {
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

    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
    bullet1.label.fill = am4core.color('#ffffff');
    bullet1.locationY = 0.5;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      '{name}: Calls {valueY.totalPercent.formatNumber("#.00")}%';
    series2.name = 'Calls';
    series2.dataFields.categoryX = 'name';
    series2.dataFields.valueY = 'calls';
    series2.dataFields.valueYShow = 'totalPercent';
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = 'vertical';

    series2.columns.template.events.on("hit", function(ev) {
      prevClickedColumn.strokeWidth = 0;
      ev.target.column.strokeWidth = 4;
      ev.target.column.stroke = am4core.color('#ffd740');
      prevClickedColumn.selected = false;
      prevClickedColumn = ev.target.column;
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);

    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color('#ffffff');

    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      '{name}: Meetings {valueY.totalPercent.formatNumber("#.00")}%';
    series3.name = 'Meetings';
    series3.dataFields.categoryX = 'name';
    series3.dataFields.valueY = 'meetings';
    series3.dataFields.valueYShow = 'totalPercent';
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = 'vertical';

    series3.columns.template.events.on("hit", function(ev) {
      prevClickedColumn.strokeWidth = 0;
      ev.target.column.strokeWidth = 4;
      ev.target.column.stroke = am4core.color('#ffd740');
      prevClickedColumn.selected = false;
      prevClickedColumn = ev.target.column;
      that.changed = !that.changed;
      that.refreshService.setRefreshedData(that.changed);
    }, this);

    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = '{valueY.totalPercent.formatNumber("#.00")}%';
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color('#ffffff');

    chart.scrollbarX = new am4core.Scrollbar();

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
