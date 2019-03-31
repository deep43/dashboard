import {Component, OnInit, AfterViewInit, NgZone, OnDestroy} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import {RefreshService} from '../shared/service/refresh.service';

@Component({
  selector: 'app-activity-notional',
  templateUrl: './activity-notional.component.html',
  styleUrls: ['./activity-notional.component.scss']
})
export class ActivityNotionalComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;
  private changed = false;

  constructor(private zone: NgZone, private refreshService: RefreshService) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create('chartdivNotional', am4charts.XYChart);

      // Add data
      chart.data = [
        {
          'date': '2019-01-02',
          'market1': 5415558,
          'market2': 4293683,
          'sales1': 9709241,
          'sales2': 374975537
        }, {
          'date': '2019-01-03',
          'market1': 6940018,
          'market2': 6629146,
          'sales1': 13569164,
          'sales2': 295729285
        }, {
          'date': '2019-01-04',
          'market1': 6551180,
          'market2': 5157816,
          'sales1': 11708996,
          'sales2': 240378590
        }, {
          'date': '2019-01-07',
          'market1': 5816263,
          'market2': 7096904,
          'sales1': 12913167,
          'sales2': 276006015
        }, {
          'date': '2019-01-08',
          'market1': 11799595,
          'market2': 4897549,
          'sales1': 16697144,
          'sales2': 631437134
        }, {
          'date': '2019-01-09',
          'market1': 6511073,
          'market2': 6008038,
          'sales1': 12519111,
          'sales2': 249785502
        }, {
          'date': '2019-01-10',
          'market1': 4491119,
          'market2': 5205291,
          'sales1': 9696410,
          'sales2': 251056056
        }, {
          'date': '2019-01-11',
          'market1': 8907644,
          'market2': 7223574,
          'sales1': 16131218,
          'sales2': 448266021
        }, {
          'date': '2019-01-14',
          'market1': 5435561,
          'market2': 7599663,
          'sales1': 13035224,
          'sales2': 270015080
        }, {
          'date': '2019-01-15',
          'market1': 3355115,
          'market2': 3806139,
          'sales1': 7161254,
          'sales2': 159725103
        }];

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // dateAxis.renderer.grid.template.location = 0;
      // dateAxis.renderer.minGridDistance = 30;
      dateAxis.skipEmptyPeriods= true;

      let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis1.title.text = 'Number Of Shares';

      let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.title.text = ' Percentage ';
      valueAxis2.renderer.opposite = true;
      valueAxis2.renderer.grid.template.disabled = true;

      // Create series
      /*let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.dataFields.valueY = 'sales1';
      series1.dataFields.dateX = 'date';
      series1.yAxis = valueAxis1;
      series1.name = 'Buy';
      series1.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
      series1.fill = chart.colors.getIndex(0);
      series1.strokeWidth = 0;
      series1.clustered = false;
      series1.columns.template.width = am4core.percent(40);*/

      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = 'sales2';
      series2.dataFields.dateX = 'date';
      series2.yAxis = valueAxis1;
      series2.name = 'Sold';
      series2.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
      series2.fill = chart.colors.getIndex(0).lighten(0.5);
      series2.strokeWidth = 0;
      series2.clustered = false;
      series2.toBack();

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = 'market1';
      series3.dataFields.dateX = 'date';
      series3.name = 'Total Buy($)';
      series3.strokeWidth = 2;
      series3.tensionX = 0.7;
      series3.stroke = am4core.color('#9ccc65').lighten(0.5);
      series3.yAxis = valueAxis2;
      series3.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';

      /*let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
      bullet3.circle.radius = 3;
      bullet3.circle.strokeWidth = 2;
      bullet3.circle.fill = am4core.color('#fff');*/

      let bullet = series3.bullets.push(new am4charts.Bullet());
      bullet.width = 12;
      bullet.height = 12;
      bullet.horizontalCenter = 'middle';
      bullet.verticalCenter = 'middle';

      let triangle = bullet.createChild(am4core.Triangle);
      triangle.stroke = am4core.color('#9ccc65');
      triangle.fill = am4core.color('#9ccc65');
      triangle.strokeWidth = 2;
      triangle.direction = 'top';
      triangle.width = 8;
      triangle.height = 8;

      let series4 = chart.series.push(new am4charts.LineSeries());
      series4.dataFields.valueY = 'market2';
      series4.dataFields.dateX = 'date';
      series4.name = 'Total Sold($)';
      series4.strokeWidth = 2;
      series4.stroke = am4core.color('#ff5252').lighten(0.5);
      series4.tensionX = 0.7;
      series4.yAxis = valueAxis2;
      series4.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
      // series4.stroke = chart.colors.getIndex(0).lighten(0.5);
      series4.strokeDasharray = '3,3';

      /*let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
      bullet4.circle.radius = 3;
      bullet4.circle.strokeWidth = 2;
      bullet4.circle.fill = am4core.color('#fff');*/

      let bullet2 = series4.bullets.push(new am4charts.Bullet());
      bullet2.width = 12;
      bullet2.height = 12;
      bullet2.horizontalCenter = 'middle';
      bullet2.verticalCenter = 'middle';

      let triangle2 = bullet2.createChild(am4core.Triangle);
      triangle2.stroke = am4core.color('#ff5252');
      triangle2.fill = am4core.color('#ff5252');
      triangle2.strokeWidth = 2;
      triangle2.direction = 'bottom';
      triangle2.width = 8;
      triangle2.height = 8;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      // Add legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';

      // Add scrollbar
      // chart.scrollbarX = new am4charts.XYChartScrollbar();
      // chart.scrollbarX.series.push(series1);
      // chart.scrollbarX.series.push(series3);
      // chart.scrollbarX.parent = chart.bottomAxesContainer;
      /*chart.write('chartdiv');
      chart.write('chartmodal');*/
      /*chart.write('chartdiv');
      chart.write('chartmodal');*/
      // this.chart = chartModal;

      // override font size
      chart.fontSize = 10;

      this.chart = chart;
    });
  }

  openModal() {
    // Create chart instance

    // Create chart instance
    let chartModal = am4core.create('chartdivNotionalModal', am4charts.XYChart);

    // Add data
    chartModal.data = [
      {
        'date': '2019-01-02',
        'market1': 5415558,
        'market2': 4293683,
        'sales1': 9709241,
        'sales2': 374975537
      }, {
        'date': '2019-01-03',
        'market1': 6940018,
        'market2': 6629146,
        'sales1': 13569164,
        'sales2': 295729285
      }, {
        'date': '2019-01-04',
        'market1': 6551180,
        'market2': 5157816,
        'sales1': 11708996,
        'sales2': 240378590
      }, {
        'date': '2019-01-07',
        'market1': 5816263,
        'market2': 7096904,
        'sales1': 12913167,
        'sales2': 276006015
      }, {
        'date': '2019-01-08',
        'market1': 11799595,
        'market2': 4897549,
        'sales1': 16697144,
        'sales2': 631437134
      }, {
        'date': '2019-01-09',
        'market1': 6511073,
        'market2': 6008038,
        'sales1': 12519111,
        'sales2': 249785502
      }, {
        'date': '2019-01-10',
        'market1': 4491119,
        'market2': 5205291,
        'sales1': 9696410,
        'sales2': 251056056
      }, {
        'date': '2019-01-11',
        'market1': 8907644,
        'market2': 7223574,
        'sales1': 16131218,
        'sales2': 448266021
      }, {
        'date': '2019-01-14',
        'market1': 5435561,
        'market2': 7599663,
        'sales1': 13035224,
        'sales2': 270015080
      }, {
        'date': '2019-01-15',
        'market1': 3355115,
        'market2': 3806139,
        'sales1': 7161254,
        'sales2': 159725103
      }];

    // Create axes
    let dateAxisModal = chartModal.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;
    // dateAxis.renderer.minGridDistance = 30;
    dateAxisModal.skipEmptyPeriods= true;

    let valueAxis1Modal = chartModal.yAxes.push(new am4charts.ValueAxis());
    valueAxis1Modal.title.text = 'Number Of Shares';

    let valueAxis2Modal = chartModal.yAxes.push(new am4charts.ValueAxis());
    valueAxis2Modal.title.text = ' Percentage ';
    valueAxis2Modal.renderer.opposite = true;
    valueAxis2Modal.renderer.grid.template.disabled = true;

    // Create series
    /*let series1Modal = chartModal.series.push(new am4charts.ColumnSeries());
    series1Modal.dataFields.valueY = 'sales1';
    series1Modal.dataFields.dateX = 'date';
    series1Modal.yAxis = valueAxis1Modal;
    series1Modal.name = 'Buy';
    series1Modal.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
    series1Modal.fill = chartModal.colors.getIndex(0);
    series1Modal.strokeWidth = 0;
    series1Modal.clustered = false;
    series1Modal.columns.template.width = am4core.percent(40);*/

    let series2Modal = chartModal.series.push(new am4charts.ColumnSeries());
    series2Modal.dataFields.valueY = 'sales2';
    series2Modal.dataFields.dateX = 'date';
    series2Modal.yAxis = valueAxis1Modal;
    series2Modal.name = 'Sold';
    series2Modal.tooltipText = '{name}\n[bold font-size: 20]${valueY}M[/]';
    series2Modal.fill = chartModal.colors.getIndex(0).lighten(0.5);
    series2Modal.strokeWidth = 0;
    series2Modal.clustered = false;
    series2Modal.toBack();
    const that = this;
    let prevClickedColumn: any = {strokeWidth: 0};
    series2Modal.columns.template.events.on('hit', function (ev) {
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

    let series3Modal = chartModal.series.push(new am4charts.LineSeries());
    series3Modal.dataFields.valueY = 'market1';
    series3Modal.dataFields.dateX = 'date';
    series3Modal.name = 'Total Buy($)';
    series3Modal.strokeWidth = 2;
    series3Modal.stroke = am4core.color('#9ccc65').lighten(0.5);
    series3Modal.tensionX = 0.7;
    series3Modal.yAxis = valueAxis2Modal;
    series3Modal.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
    series3Modal.segments.template.interactionsEnabled = true;
    series3Modal.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    /*let bullet3Modal = series3Modal.bullets.push(new am4charts.CircleBullet());
    bullet3Modal.circle.radius = 3;
    bullet3Modal.circle.strokeWidth = 2;
    bullet3Modal.circle.fill = am4core.color('#fff');*/
    let bullet = series3Modal.bullets.push(new am4charts.Bullet());
    bullet.width = 12;
    bullet.height = 12;
    bullet.horizontalCenter = 'middle';
    bullet.verticalCenter = 'middle';

    let triangle = bullet.createChild(am4core.Triangle);
    triangle.stroke = am4core.color('#9ccc65');
    triangle.fill = am4core.color('#9ccc65');
    triangle.strokeWidth = 2;
    triangle.direction = 'top';
    triangle.width = 8;
    triangle.height = 8;

    let series4Modal = chartModal.series.push(new am4charts.LineSeries());
    series4Modal.dataFields.valueY = 'market2';
    series4Modal.dataFields.dateX = 'date';
    series4Modal.name = 'Total Sold($)';
    series4Modal.strokeWidth = 2;
    series4Modal.stroke = am4core.color('#ff5252').lighten(0.5);
    series4Modal.tensionX = 0.7;
    series4Modal.yAxis = valueAxis2Modal;
    series4Modal.tooltipText = '{name}\n[bold font-size: 20]{valueY}[/]';
    // series4Modal.stroke = chartModal.colors.getIndex(0).lighten(0.5);
    series4Modal.strokeDasharray = '3,3';
    series4Modal.segments.template.interactionsEnabled = true;
    series4Modal.segments.template.events.on(
      "hit",
      ev => {
        // var item = ev.target.dataItem.component.tooltipDataItem.dataContext;
        that.changed = !that.changed;
        that.refreshService.setRefreshedData(that.changed);
      },
      this
    );
    /*let bullet4Modal = series4Modal.bullets.push(new am4charts.CircleBullet());
    bullet4Modal.circle.radius = 3;
    bullet4Modal.circle.strokeWidth = 2;
    bullet4Modal.circle.fill = am4core.color('#fff');*/

    let bullet2 = series4Modal.bullets.push(new am4charts.Bullet());
    bullet2.width = 12;
    bullet2.height = 12;
    bullet2.horizontalCenter = 'middle';
    bullet2.verticalCenter = 'middle';

    let triangle2 = bullet2.createChild(am4core.Triangle);
    triangle2.stroke = am4core.color('#ff5252');
    triangle2.fill = am4core.color('#ff5252');
    triangle2.strokeWidth = 2;
    triangle2.direction = 'bottom';
    triangle2.width = 8;
    triangle2.height = 8;

    // Add cursor
    chartModal.cursor = new am4charts.XYCursor();

    // Add legend
    chartModal.legend = new am4charts.Legend();
    chartModal.legend.position = 'top';

    // Add scrollbar
    // chartModal.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series1);
    // chart.scrollbarX.series.push(series3);
    // chartModal.scrollbarX.parent = chartModal.bottomAxesContainer;

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
