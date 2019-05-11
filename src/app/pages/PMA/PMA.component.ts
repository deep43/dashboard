import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {AgGridNg2} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import {CustomTooltipComponent} from './custom-tooltip.component';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {object} from '@amcharts/amcharts4/core';

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

  buttonModel: any = false;

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
  gridOptions = {
    getRowNodeId: function(data) { return data.symbol; }
  }
  gridApi;
  gridColumnApi;

  columnDefs = [
    {
      headerName: 'Symbol', field: 'symbol', filter: true, suppressMovable: true,
      sort: 'asc',
      cellRenderer: (params) => {

        const eDiv = document.createElement('div');
        eDiv.innerHTML = '<span class="symbol-col">'
          + params.getValue() + '</span>';
        const that = this;
        const eButton = eDiv.querySelectorAll('.symbol-col')[0];
        eButton && eButton.addEventListener('dblclick', function () {
          that.selectedInvDetail = params.data;
          that.selectedInvDetail['animateClassName'] = '';
          that.selectedInvDetail['className'] = 'disabled';
          that.manualTradeModal.show();
        });

        return eDiv;
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
      /*cellRenderer: (params) => {
        let value = params.getValue().indexOf('-') < 0 ? params.getValue() :
          '(' + params.getValue().replace('-', '') + ')';
        return '<div class="">'
          + value + '</div>';
      }*/
    },
    {
      headerName: 'Avg. Price', field: 'avgPrice', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        let value =  params.getValue() >= 0 ? params.getValue() : '(' + (params.getValue() * -1) + ')';
        return '<div class="">' + value + '</div>';
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
    },
    {
      headerName: 'Currency', field: 'currency', filter: true, resizable: true, suppressMovable: true,
      cellClass: 'hidden', headerClass: 'hidden', width: 150,
      cellRenderer: (params) => {

        return '<div class="">'
          +  params.getValue() + '</div>';
      }
    }
  ];

  rowDataCopy = [
    {
      symbol: 'AAPPL',
      side: 'L',
      volume: 339100,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AAB',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AAV',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ABT',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ABX',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AC',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACB',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACB.WT',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACD',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACD.DB',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACI',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACO.X',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACO.Y',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACQ',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ACZ.UN',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AD',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ADN',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ADVZ',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ADVZ.U',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ADW.A',
      side: 'L',
      volume: 0,
      avgPrice: 30000,
      netValue: '708,719',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,0000',
      currency: 'CAD'
    },
    {
      symbol: 'BSE',
      side: 'S',
      volume: -29000,
      avgPrice: -69990,
      netValue: '-522,200',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-6,9990',
      currency: 'CAD'
    },
    {
      symbol: 'TTS',
      side: 'L',
      volume: 150000,
      avgPrice: 189000,
      netValue: '2,899,990',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '18,9000',
      currency: 'CAD'
    },
    {
      symbol: 'YAHOO',
      side: 'L',
      volume: 100000,
      avgPrice: 229900,
      netValue: '5,987,200',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-22,9900',
      currency: 'CAD'
    },
    {
      symbol: 'STC',
      side: 'S',
      volume: -100,
      avgPrice: -120000,
      netValue: '3,99,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-12,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ARE',
      side: 'S',
      volume: -20000,
      avgPrice: 320000,
      netValue: '59,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '32,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AEM', side: 'L', volume: 30000, avgPrice: 330000, netValue: '30,000', bid: '', ask: '', dailyPL: '0', mtdPL: '33,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AGU',
      side: 'S',
      volume: -20100,
      avgPrice: -529999,
      netValue: '2,11,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-52,9999',
      currency: 'CAD'
    },
    {
      symbol: 'AIM',
      side: 'S',
      volume: -15000,
      avgPrice: -80000,
      netValue: '1,88,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-8,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AC.A',
      side: 'L',
      volume: 20300,
      avgPrice: 120000,
      netValue: '2,98,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '12,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ATD.B',
      side: 'L',
      volume: 22500,
      avgPrice: 350000,
      netValue: '26,880',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-35,0000',
      currency: 'CAD'
    },
    {
      symbol: 'AGT',
      side: 'S',
      volume: -10200,
      avgPrice: -280000,
      netValue: '15,800',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '28,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ALA',
      side: 'S',
      volume: -40000,
      avgPrice: -40000,
      netValue: '14,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-4,0000',
      currency: 'CAD'
    },
    {
      symbol: 'ARX',
      side: 'L',
      volume: 200000,
      avgPrice: 20000,
      netValue: '2,22,800',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '2,22,800',
      currency: 'CAD'
    },
    {
      symbol: 'ACO.X',
      side: 'L',
      volume: 30090,
      avgPrice: 129988,
      netValue: '1,92,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,92,000',
      currency: 'CAD'
    },
    {
      symbol: 'ACQ',
      side: 'S',
      volume: -20800,
      avgPrice: -235550,
      netValue: '1,20,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,20,000',
      currency: 'CAD'
    },
    {
      symbol: 'BMO',
      side: 'L',
      volume: 30000,
      avgPrice: 128800,
      netValue: '2,89,900',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '2,89,900',
      currency: 'CAD'
    },
    {
      symbol: 'BNS',
      side: 'S',
      volume: -25500,
      avgPrice: -39000,
      netValue: '1,79,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '-1,79,000',
      currency: 'CAD'
    },
    {
      symbol: 'ABX',
      side: 'L',
      volume: 300800,
      avgPrice: 20000,
      netValue: '3,88,000',
      bid: '',
      ask: '',
      dailyPL: '0',
      mtdPL: '3,88,000',
      currency: 'CAD'
    },
  ];

  rowData = this.rowDataCopy.filter(data=>{
    return data.volume !== 0;
  });

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
      headerName: 'Adjusted Volume', field: 'adjustedVolume', filter: true, resizable: true, suppressMovable: true,
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

  pnlData = {
    unRealizedPnL: 140000,
    totalRealizedPnL: 230000
  };

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
    avgPrice: 18.03
  };
  selectedInvDetailCopy = {
    symbol: 'ALA',
    currency: 'CAD',
    volume: 600,
    avgPrice: 18.03
  };

  showZeroText = "Show Zero Position";
  hideZeroText = "Hide Zero Position";
  showHideZeroText = this.showZeroText;
  showZeroPosition = false;

  constructor() {
    this.frameworkComponents = {customTooltip: CustomTooltipComponent};
  }

  getArrowClass(value) {
    return value && value.indexOf('-') > -1 ? 'red' : 'green';
  }

  openManualTradeModal() {
    this.selectedInvDetail = {...this.selectedInvDetailCopy};
    this.manualTradeModal.show();
  }

  closeManualTradeModal() {
    this.manualTradeModal.hide();
  }

  saveManualTradeModal() {
    this.selectedInvDetail['animateClassName'] = 'row-animate';
    this.rowData = this.rowData.map((row)=>{
      if(row.symbol === this.selectedInvDetail.symbol){
        row['animateClassName'] = 'row-animate';
      }

      return row;
    });
    this.manualTradeModal.hide();
  }

  openAllManualTradeModal() {
    this.allManualTradeModal.show();
  }

  closeAllManualTradeModal() {
    this.allManualTradeModal.hide();
  }

  showHideZeroVolume(){
    this.showZeroPosition = !this.showZeroPosition;
    this.showHideZeroText = this.showZeroPosition ? this.hideZeroText : this.showZeroText;
    this.rowData = this.rowDataCopy.filter(row=>{
      if(!this.showZeroPosition){
        return row.volume;
      }

      return row;
    });

    /*$('.toast')['toast']('show', {
        'show': true,
        'autohide': false,
        'delay': '2000'
      },
    );*/
  }

  drawTable(){
    if(this.buttonModel === 'C' || this.buttonModel === 'Total'){
      this.rowData = this.rowDataCopy.filter(data=>{
        return data.volume !== 0;
      });
    }else{
      this.rowData = [];
    }
  }

  ngOnInit() {
  }

}
