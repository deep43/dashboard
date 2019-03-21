import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  columns1 = [
    {name: 'Corporate Access & Analyst Marketing'},
    {name: '2018'},
    {name: '2017'},
    {name: 'YOY'},
  ];
  rowData1 = [
    [{name: 'Analyst Marketing - 1-on-1'}, {name: '6'}, {name: '2'}, {name: '250%'}],
    [{name: 'Analyst Marketing - Group'}, {name: '7'}, {name: '1'}, {name: '25%'}],
    [{name: 'Corporate Marketing - 1-on-1'}, {name: '5'}, {name: '3'}, {name: '32%'}],
    [{name: 'Conference Call'}, {name: '5'}, {name: '3'}, {name: '32%'}],
    [{name: 'Conference & Special Events'}, {name: '5'}, {name: '3'}, {name: '32%'}],
  ];
  columns2 = [
    {name: 'Analyst Marketing'},
    {name: 'Type'},
    {name: 'Contact'},
    {name: 'Date'},
  ];
  columns3 = [
    {name: 'Corporate Marketing'},
    {name: 'Type'},
    {name: 'Contact'},
    {name: 'Date'},
  ];
  columns4 = [
    {name: 'Conference and Special Events'},
    {name: 'Type'},
    {name: 'Contact'},
    {name: 'Date'},
  ];
  rowData4 = [
    [{name: 'Analyst Marketing - 1-on-1'}, {name: '6'}, {name: '2'}, {name: '250%'}],
    [{name: 'Analyst Marketing - Group'}, {name: '7'}, {name: '1'}, {name: '25%'}],
    [{name: 'Corporate Marketing - 1-on-1'}, {name: '5'}, {name: '3'}, {name: '32%'}],
  ];

  columns5 = [
    {name: 'Contact'},
    {name: 'Analyst'},
    {name: 'NDRS'},
    {name: 'Events'},
    {name: 'Total Meetings'},
  ];
  rowData5 = [
    [{name: 'Analyst Marketing - 1-on-1'}, {name: '6'}, {name: '6'}, {name: '2'}, {name: '9'}],
    [{name: 'Analyst Marketing - Group'}, {name: '7'}, {name: '7'}, {name: '1'}, {name: '10'}],
    [{name: 'Corporate Marketing - 1-on-1'}, {name: '5'}, {name: '5'}, {name: '3'}, {name: '9'}],
    [{name: 'Conference Call'}, {name: '5'}, {name: '3'}, {name: '3'}, {name: '10'}],
    [{name: 'Conference & Special Events'}, {name: '5'}, {name: '5'}, {name: '3'}, {name: '9'}],
  ];

  constructor() {
  }

  ngOnInit() {
  }

  printReport() {
    window.print();
  }
}
