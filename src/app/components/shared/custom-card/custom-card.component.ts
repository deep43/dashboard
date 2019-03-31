import {Component, OnInit, Input, Output, ViewEncapsulation, ViewChild, TemplateRef, EventEmitter} from '@angular/core';
import * as moment from 'moment';

import {AgGridNg2} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import {BsModalService, BsModalRef, ModalDirective} from 'ngx-bootstrap/modal';
import {FunctionDefinition} from '@angular/compiler-cli/src/ngtsc/host';
import {RefreshService} from '../service/refresh.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
// import ObjectContaining = jasmine.ObjectContaining;

@Component({
  selector: 'app-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
      })),
      state('closed', style({
        overflow: 'hidden',
        height: '0',
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ]),
    trigger('openCloseEffect', [
      // ...
      state('openEffect', style({
        height: '100%',
      })),
      state('closedEffect', style({
        height: 'auto',
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  @ViewChild('modal') modal: ModalDirective;

  @Input() headerContent: string;
  @Input() title: string;
  @Input() openModalCallback: any;
  @Output() public onModalOpen: EventEmitter<any> = new EventEmitter();

  fullCard = '';
  fullCardIcon = '';
  appliedThemeClassOnTable = 'ag-theme-balham-dark';

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
  gridApi;
  gridColumnApi;
  columnDefs = [
    {
      headerName: 'Updated By', field: 'updatedBy', filter: true, suppressMovable: true
    }, {
      headerName: 'Updated Date', field: 'updatedDate', filter: true, suppressMovable: true
    },
    {
      headerName: 'Name', field: 'name', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        return '<a href="#/client"><span class="client-link">'
          + params.getValue() + '</span></a>';
      }
    },
    {
      headerName: 'Code', field: 'code', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Account Type', field: 'accountType', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Reporting Name', field: 'reportingName', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Base Currency', field: 'baseCurrency', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'CDR ID', field: 'cdrID', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'LEI ID', field: 'leiIDy', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Active Flag', field: 'activeFlag', filter: true, resizable: true, suppressMovable: true
    },
  ];
  rowData = [

    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Goldman Sachs',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Goldman Sachs',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Goldman Sachs',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Goldman Sachs',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Barrick Gold',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingname: 'Goldman Sachs', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Goldman Sachs',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },

    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },

    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'PWC',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },

    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },

    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'EY',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'Apple',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'MSN',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'MSN',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
    {
      version: '1.1', updatedBy: 'CDR', updatedDate: '05-Oct-18', name: 'MSN',
      code: 'GLDMNSCHS', accountType: 'Counterparty', reportingName: 'Barrick Gold', baseCurrency: 'USD',
      openDate: '1-OCT-18', closeDate: '', cdrID: 'CDR001', leiIDy: 'LEI001', activeFlag: 'Y'
    },
  ];
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };
  selected = {start: moment().subtract(29, 'days'), end: moment()};

  selectedRowsPerPage = 8;
  subscription: Subscription;
  minimise = false;

  constructor(private modalService: BsModalService, private refreshService: RefreshService) {

  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array.map(x => Object.assign({}, x));
  }

  openModal() {
    this.modal.show();
    this.subscription = this.refreshService.getRefreshedData().subscribe(() => {
      this.rowData = this.shuffle(this.rowData);
    });
  }

  toggleMinimise(){
    this.minimise = !this.minimise;
  }

  handler(type: string, $event: ModalDirective) {
    this.onModalOpen.emit();
  }

  ngOnInit() {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onPageSizeChanged(newPageSize) {
    const value = this.selectedRowsPerPage; // document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  fullScreen(event) {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'icon-maximize' ? 'icon-minimize' : 'icon-maximize';
  }

}
