import {Component, OnInit, Input, Output, ViewEncapsulation, ViewChild, TemplateRef, EventEmitter} from '@angular/core';
import * as moment from 'moment';

import {AgGridNg2} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import {BsModalService, BsModalRef, ModalDirective} from 'ngx-bootstrap/modal';
import {FunctionDefinition} from '@angular/compiler-cli/src/ngtsc/host';

@Component({
  selector: 'app-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
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

  constructor(private modalService: BsModalService) {

  }

  openModal() {
    this.modal.show();
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
