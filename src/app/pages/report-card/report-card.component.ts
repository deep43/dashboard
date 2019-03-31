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
    [{name: 'Analyst Marketing - 1-on-1'}, {name: '7'}, {name: '2'}, {name: '250%'}],
    [{name: 'Analyst Marketing - Group'}, {name: '0'}, {name: '2'}, {name: '-'}],
    [{name: 'Corporate Marketing - 1-on-1'}, {name: '5'}, {name: '3'}, {name: '67%'}],
    [{name: 'Corporate Marketing - Group'}, {name: '2'}, {name: '2'}, {name: '-'}],
    [{name: 'Conference Call'}, {name: '0'}, {name: '0'}, {name: '-'}],
    [{name: 'Conference & Special Events'}, {name: '4'}, {name: '2'}, {name: '100%'}],
  ];

  rowData2 = [
    [{name: 'Hamir Patel'}, {name: '1on1'}, {name: 'G. Daniel'}, {name: '01/15/2018'}],
    [{name: 'Michael Ting - CIMB'}, {name: '1on1'}, {name: 'T. Ruby'}, {name: '02/15/2018'}],
    [{name: 'Steph Price'}, {name: '1on1'}, {name: 'H. Patel'}, {name: '02/13/2018'}],
    [{name: 'Craig Johnson - Piper Jaffray'}, {name: '1on1'}, {name: 'M. CIMB'}, {name: '02/21/2018'}],
    [{name: 'Robert Catelleir & Mark Javri'}, {name: '1on1'}, {name: 'S. Price'}, {name: '04/05/2018'}],
    [{name: 'Mark Petrie'}, {name: '1on1'}, {name: 'C. Johnson'}, {name: '04/12/2018'}],
  ];

  rowData3 = [
    [{name: 'Apple Inc'}, {name: '1on1'}, {name: 'G. Daniel'}, {name: '02/15/2018'}],
    [{name: 'Xerox Inc'}, {name: '1on1'}, {name: 'T. Ruby'}, {name: '02/23/2018'}],
    [{name: 'Rogers Telecommunication'}, {name: 'Group'}, {name: 'H. Patel'}, {name: '03/05/2018'}],
    [{name: 'Bell Inc'}, {name: '1on1'}, {name: 'M. CIMB'}, {name: '03/23/2018'}],
    [{name: 'LG Inc'}, {name: '1on1'}, {name: 'S. Price'}, {name: '04/19/2018'}],
    [{name: 'Panasonic Inc'}, {name: 'Group Lunch'}, {name: 'C. Johnson'}, {name: '04/26/2018'}],
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
    [{name: 'Mining Event'}, {name: 'Event - Corporate Access'}, {name: 'G. Daniel'}, {name: '01/11/2018'}],
    [{name: '21st Annual Whistler Investor Conference'}, {name: 'Conference'}, {name: 'T. Ruby'}, {name: '01/24/2018'}],
    [{name: 'Tech & Innovation Event - Martello Technologies'}, {name: 'Event - Corporate Access'}, {name: 'H. Patel'}, {name: '03/23/2018'}],
    [{name: '21st Annual Retail & Consumer Conference'}, {name: 'Conference'}, {name: 'M. CIMB'}, {name: '03/28/2018'}],
  ];

  columns5 = [
    {name: 'Contact'},
    {name: 'Analyst'},
    {name: 'NDRS'},
    {name: 'Events'},
    {name: 'Total Meetings'},
  ];

  rowData5 = [
    [{name: 'G. Daniel'}, {name: '6'}, {name: '6'}, {name: '2'}, {name: '9'}],
    [{name: 'T. Ruby'}, {name: '7'}, {name: '7'}, {name: '1'}, {name: '10'}],
    [{name: 'H. Patel'}, {name: '5'}, {name: '5'}, {name: '3'}, {name: '9'}],
    [{name: 'M. CIMB'}, {name: '5'}, {name: '3'}, {name: '3'}, {name: '10'}],
    [{name: 'S. Price'}, {name: '5'}, {name: '5'}, {name: '3'}, {name: '9'}],
    [{name: 'C. Johnson'}, {name: '5'}, {name: '5'}, {name: '3'}, {name: '9'}],
  ];

  constructor() {
  }

  ngOnInit() {
  }

  printReport() {
    window.print();
  }
}
