import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-individual-metrics',
  templateUrl: './individual-metrics.component.html',
  styleUrls: ['./individual-metrics.component.scss']
})
export class IndividualMetricsComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor() {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chart = am4core.create('individual-metrics', am4charts.XYChart);

    // Add data
    // Increase contrast by taking evey second color
    chart.colors.step = 2;

// Add data
    chart.data = this.generateChartData();

// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.skipEmptyPeriods= true;

// Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = 'date';
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = '{name}: [bold]{valueY}[/]';
      series.tensionX = 0.8;

      let interfaceColors = new am4core.InterfaceColorSet();

      switch (bullet) {
        case 'triangle':
          let bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 12;
          bullet.height = 12;
          bullet.horizontalCenter = 'middle';
          bullet.verticalCenter = 'middle';

          let triangle = bullet.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor('background');
          triangle.strokeWidth = 2;
          triangle.direction = 'top';
          triangle.width = 12;
          triangle.height = 12;
          break;
        case 'rectangle':
          let bullet1 = series.bullets.push(new am4charts.Bullet());
          bullet1.width = 10;
          bullet1.height = 10;
          bullet1.horizontalCenter = 'middle';
          bullet1.verticalCenter = 'middle';

          let rectangle = bullet1.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor('background');
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        default:
          let bullet2 = series.bullets.push(new am4charts.CircleBullet());
          bullet2.circle.stroke = interfaceColors.getFor('background');
          bullet2.circle.strokeWidth = 2;
          break;
      }

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
      valueAxis.renderer.grid.template.disabled = true;
    }

    createAxisAndSeries('visits', 'Emails', false, 'circle');
    createAxisAndSeries('views', 'Calls', true, 'triangle');
    createAxisAndSeries('hits', 'Meetings', true, 'rectangle');

// Add legend
    chart.legend = new am4charts.Legend();

// Add cursor
    chart.cursor = new am4charts.XYCursor();

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat'];

// generate some random data, quite different range

    // override font size
    chart.fontSize = 10;

    this.chart = chart;
  }

  generateChartData() {
    let chartData = [];
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);
    firstDate.setHours(0, 0, 0, 0);

    let visits = 15;
    let hits = 20;
    let views = 30;

    for (let i = 0; i < 7; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      let newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      chartData.push({
        date: newDate,
        visits: visits,
        hits: hits,
        views: views
      });
    }
    return chartData;
  }

  changeIndividual() {
    this.chart.data = this.generateChartData();

  }

  openModal() {
    ///// Char 4
    am4core.options.autoSetClassName = true;

    // Create chart instance
    let chartModal = am4core.create('individual-metrics-modal', am4charts.XYChart);

    // Add data
    // Increase contrast by taking evey second color
    chartModal.colors.step = 2;

// Add data
    chartModal.data = generateChartData();

// Create axes
    let dateAxisModal = chartModal.xAxes.push(new am4charts.DateAxis());
    dateAxisModal.renderer.minGridDistance = 50;
    dateAxisModal.skipEmptyPeriods= true;

// Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      let valueAxis = chartModal.yAxes.push(new am4charts.ValueAxis());

      let series = chartModal.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = 'date';
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = '{name}: [bold]{valueY}[/]';
      series.tensionX = 0.8;

      let interfaceColors = new am4core.InterfaceColorSet();

      switch (bullet) {
        case 'triangle':
          let bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 12;
          bullet.height = 12;
          bullet.horizontalCenter = 'middle';
          bullet.verticalCenter = 'middle';

          let triangle = bullet.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor('background');
          triangle.strokeWidth = 2;
          triangle.direction = 'top';
          triangle.width = 12;
          triangle.height = 12;
          break;
        case 'rectangle':
          let bullet1 = series.bullets.push(new am4charts.Bullet());
          bullet1.width = 10;
          bullet1.height = 10;
          bullet1.horizontalCenter = 'middle';
          bullet1.verticalCenter = 'middle';

          let rectangle = bullet1.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor('background');
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        default:
          let bullet2 = series.bullets.push(new am4charts.CircleBullet());
          bullet2.circle.stroke = interfaceColors.getFor('background');
          bullet2.circle.strokeWidth = 2;
          break;
      }

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
      valueAxis.renderer.grid.template.disabled = true;
    }

    createAxisAndSeries('visits', 'Emails', false, 'circle');
    createAxisAndSeries('views', 'Calls', true, 'triangle');
    createAxisAndSeries('hits', 'Meetings', true, 'rectangle');

// Add legend
    chartModal.legend = new am4charts.Legend();

// Add cursor
    chartModal.cursor = new am4charts.XYCursor();

// generate some random data, quite different range
    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
      firstDate.setHours(0, 0, 0, 0);

      let visits = 1600;
      let hits = 2900;
      let views = 8700;

      for (let i = 0; i < 15; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits,
          hits: hits,
          views: views
        });
      }
      return chartData;
    }
  }
}
