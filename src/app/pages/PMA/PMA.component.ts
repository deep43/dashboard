import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {AgGridNg2} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import {CustomTooltipComponent} from './custom-tooltip.component';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-PMA',
  templateUrl: './PMA.component.html',
  styleUrls: ['./PMA.component.scss']
})
export class PMAComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  @ViewChild('manualTradeModal') manualTradeModal: ModalDirective;
  @ViewChild('allManualTradeModal') allManualTradeModal: ModalDirective;

  private frameworkComponents;

  model = {
    C: true,
    P: false,
    F: false,
    total: false
  };

  mtModel = {
    C: true,
    P: false,
    F: false
  };

  appliedThemeClassOnTable = 'ag-theme-balham-dark';

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    animateRows: true,
    tooltipComponent: 'customTooltip'
  };
  gridApi;
  gridColumnApi;

  columnDefs = [
    {
      headerName: 'Symbol', field: 'Symbol', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        return '<span class="symbol-col">'
          + params.getValue() + '</span>';
      },
      tooltipField: 'Symbol',
      tooltipComponentParams: {color: '#ececec'}
    },
    {
      headerName: 'Side', field: 'side', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        let className = params.getValue() === 'L' ? 'green-cell' : 'red-cell';
        return '<div class="' + className + '">'
          + params.getValue() + '</div>';
      }
    },
    {
      headerName: 'Volume', field: 'volume', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        let value = params.getValue().indexOf('-') < 0 ? params.getValue() :
          '(' + params.getValue().replace('-', '') + ')';
        return '<div class="">'
          + value + '</div>';
      }
    },
    {
      headerName: 'Avg. Price', field: 'avgPrice', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        let value = params.getValue().indexOf('-') < 0 ? params.getValue() :
          '(' + params.getValue().replace('-', '') + ')';
        return '<div class="">'
          + value + '</div>';
      }
    },
    {
      headerName: 'Net Value', field: 'netValue', filter: true, resizable: true, suppressMovable: true,
      cellRenderer: (params) => {
        let value = params.getValue().indexOf('-') < 0 ? params.getValue() :
          '(' + params.getValue().replace('-', '') + ')';
        return '<div class="">'
          + value + '</div>';
      }
    },
    {
      headerName: 'Bid', field: 'bid', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Ask', field: 'ask', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Daily P&L', field: 'dailyPL', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'MTD P&L', field: 'mtdPL', filter: true, resizable: true, suppressMovable: true,
      cellRenderer: (params) => {
        let className = params.getValue().indexOf('-') < 0 ? 'green-cell' : 'red-cell';
        let value = params.getValue().indexOf('-') < 0 ? params.getValue() :
          '(' + params.getValue().replace('-', '') + ')';
        return '<div class="' + className + '">'
          + value + '</div>';
      }
    }
  ];

  rowData = [
    {
      Symbol: 'AAPPL',
      side: 'L',
      volume: '339,100',
      avgPrice: '3,0000',
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000'
    },
    {
      Symbol: 'BSE',
      side: 'S',
      volume: '-29,000',
      avgPrice: '-6,9990',
      netValue: '-522,200',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-6,9990'
    },
    {
      Symbol: 'TTS',
      side: 'L',
      volume: '150,000',
      avgPrice: '18,9000',
      netValue: '2,899,990',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '18,9000'
    },
    {
      Symbol: 'YAHOO',
      side: 'L',
      volume: '100,000',
      avgPrice: '22,9900',
      netValue: '5,987,200',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-22,9900'
    },
    {
      Symbol: 'STC',
      side: 'S',
      volume: '-100',
      avgPrice: '-12,0000',
      netValue: '3,99,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-12,0000'
    },
    {
      Symbol: 'ARE',
      side: 'S',
      volume: '-20,000',
      avgPrice: '32,0000',
      netValue: '59,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '32,0000'
    },
    {Symbol: 'AEM', side: 'L', volume: '30,000', avgPrice: '33,0000', netValue: '30,000', bid: '', ask: '', dailyPL: '0', mtdPL: '33,0000'},
    {
      Symbol: 'AGU',
      side: 'S',
      volume: '-20,100',
      avgPrice: '-52,9999',
      netValue: '2,11,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-52,9999'
    },
    {
      Symbol: 'AIM',
      side: 'S',
      volume: '-15,000',
      avgPrice: '-8,0000',
      netValue: '1,88,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-8,0000'
    },
    {
      Symbol: 'AC.A',
      side: 'L',
      volume: '20,300',
      avgPrice: '12,0000',
      netValue: '2,98,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '12,0000'
    },
    {
      Symbol: 'ATD.B',
      side: 'L',
      volume: '22,500',
      avgPrice: '35,0000',
      netValue: '26,880',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-35,0000'
    },
    {
      Symbol: 'AGT',
      side: 'S',
      volume: '-10,200',
      avgPrice: '-28,0000',
      netValue: '15,800',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '28,0000'
    },
    {
      Symbol: 'ALA',
      side: 'S',
      volume: '-40,000',
      avgPrice: '-4,0000',
      netValue: '14,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-4,0000'
    },
    {
      Symbol: 'ARX',
      side: 'L',
      volume: '200,000',
      avgPrice: '2,0000',
      netValue: '2,22,800',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '2,22,800'
    },
    {
      Symbol: 'ACO.X',
      side: 'L',
      volume: '300,990',
      avgPrice: '12,9988',
      netValue: '1,92,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,92,000'
    },
    {
      Symbol: 'ACQ',
      side: 'S',
      volume: '-20,800',
      avgPrice: '-23,5550',
      netValue: '1,20,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,20,000'
    },
    {
      Symbol: 'BMO',
      side: 'L',
      volume: '30,000',
      avgPrice: '12,8800',
      netValue: '2,89,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '2,89,900'
    },
    {
      Symbol: 'BNS',
      side: 'S',
      volume: '-25,500',
      avgPrice: '-3,9000',
      netValue: '1,79,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,79,000'
    },
    {
      Symbol: 'ABX',
      side: 'L',
      volume: '300,800',
      avgPrice: '2,0000',
      netValue: '3,88,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,88,000'
    },
  ];

  columnDefsTrades = [
    {
      headerName: 'Symbol', field: 'symbol', filter: true, suppressMovable: true,
    },
    {
      headerName: 'Currency', field: 'currency', filter: true, suppressMovable: true, width: 100,
    },
    {
      headerName: 'Account ID', field: 'accountID', filter: true, suppressMovable: true, width: 120,
    },
    {
      headerName: 'Trader', field: 'trader', filter: true, suppressMovable: true, width: 100,
    },
    {
      headerName: 'Adjusted Price', field: 'adjustedPrice', filter: true, resizable: true, suppressMovable: true,
    },
    {
      headerName: 'Adjusted Volume', field: 'adjustedVolume', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Entry Date', field: 'entryDate', filter: true, resizable: true, suppressMovable: true,
      cellRenderer: (params) => {
        let className = params.getValue().indexOf('-') < 0 ? 'green-cell' : 'red-cell';
        let date = params.getValue().split('T')[0];
        let time = params.getValue().split('T')[1];
        return '<div>' + date + '</div><div>' + time + '</div>';
      }
    }
  ];

  rowDataTrades = [
    {
      symbol: 'ALA',
      currency: 'CAD',
      accountID: 'T',
      trader: 'SinghV',
      adjustedPrice: '18.03',
      adjustedVolume: '600',
      entryDate: 'April 9, 2019 T1.45 PM'
    }
  ];

  pnlTiles = [
    {
      title: 'Acc Daily P&L',
      value: '$0.00'
    },
    {
      title: 'Acc MTD P&L',
      value: '$-125,747.58'
    },
    {
      title: 'Total MTD P&L',
      value: '$12,442.40'
    },
    {
      title: 'Total YTD P&L',
      value: '$-642,594.43'
    },
  ];
  selectedInvDetail = {
    symbol: 'ALA',
    currency: 'CAD',
    volume: 600,
    price: 18.0322
  };

  constructor() {
    this.frameworkComponents = {customTooltip: CustomTooltipComponent};
  }

  getArrowClass(value) {
    return value && value.indexOf('-') > -1 ? 'red' : 'green';
  }

  openManualTradeModal() {
    this.manualTradeModal.show();
  }

  closeManualTradeModal() {
    this.manualTradeModal.hide();
  }

  openAllManualTradeModal() {
    this.allManualTradeModal.show();
  }

  closeAllManualTradeModal() {
    this.allManualTradeModal.hide();
  }

  ngOnInit() {
  }

}
