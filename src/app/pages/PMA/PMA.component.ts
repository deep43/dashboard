import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {AgGridNg2} from 'ag-grid-angular';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-PMA',
  templateUrl: './PMA.component.html',
  styleUrls: ['./PMA.component.scss']
})
export class PMAComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  model = {
    C: true,
    P: false,
    F: false,
    total: false
  };
  appliedThemeClassOnTable = 'ag-theme-balham-dark';

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    animateRows: true
  };
  gridApi;
  gridColumnApi;

  columnDefs = [
    {
      headerName: 'Trade Date', width: 220, field: 'tradeDate', filter: true, suppressMovable: true
    }, {
      headerName: 'Trade Reference', width: 220, field: 'tradeRef', filter: true, suppressMovable: true
    },
    {
      headerName: 'Client', width: 220, field: 'client', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        return '<a href="#/client"><span class="client-link">'
          + params.getValue() + '</span></a>';
      }
    },
    {
      headerName: 'Symbol', width: 220, field: 'symbol', filter: true, suppressMovable: true,
      cellRenderer: (params) => {
        return '<a href="#/client"><span class="client-link">'
          + params.getValue() + '</span></a>';
      }
    },
    {
      headerName: 'BuySell', width: 220, field: 'buySell', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Shares', width: 220, field: 'shares', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Price', width: 220, field: 'price', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Notional', width: 220, field: 'notional', filter: true, resizable: true, suppressMovable: true
    },
    {
      headerName: 'Commission', width: 220, field: 'commission', filter: true, resizable: true, suppressMovable: true
    }
  ];

  rowData = [
    {tradeDate: '01/01/2019', tradeRef: 'ADP34232', client: 'EY', symbol: 'EY', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/01/2019', tradeRef: 'ADP34232', client: 'EY', symbol: 'EY', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/01/2019', tradeRef: 'ADP34232', client: 'EY', symbol: 'EY', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/01/2019', tradeRef: 'ADP34232', client: 'Goldman Sachs', symbol: 'Goldman Sachs', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'CDP34232', client: 'Goldman Sachs', symbol: 'Goldman Sachs', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'CDP34732', client: 'Goldman Sachs', symbol: 'Goldman Sachs', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'CDP33732', client: 'Goldman Sachs', symbol: 'Goldman Sachs', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'CDP33732', client: 'Goldman Sachs', symbol: 'Goldman Sachs', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'CDP33732', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/02/2019', tradeRef: 'DDP33732', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'DDP44732', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'DDP44732', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'DDP44232', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'DDP44232', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'DDP44232', client: 'PWC', symbol: 'PWC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/03/2019', tradeRef: 'EDP44232', client: 'BSE', symbol: 'BSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'EDP44232', client: 'BSE', symbol: 'BSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'EDP44232', client: 'BSE', symbol: 'BSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'EDP44232', client: 'BSE', symbol: 'BSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'EDP55232', client: 'BSE', symbol: 'BSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'EDP55232', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/04/2019', tradeRef: 'RDP55232', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/05/2019', tradeRef: 'RDP52132', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/05/2019', tradeRef: 'RDP52132', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/05/2019', tradeRef: 'RDP32132', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/05/2019', tradeRef: 'RDP32132', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/05/2019', tradeRef: 'RDP32132', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP32144', client: 'NSE', symbol: 'NSE', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP32144', client: 'CMC', symbol: 'CMC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP33244', client: 'CMC', symbol: 'CMC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP33244', client: 'CMC', symbol: 'CMC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP33244', client: 'CMC', symbol: 'CMC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
    {tradeDate: '01/06/2019', tradeRef: 'WDP33244', client: 'CMC', symbol: 'CMC', buySell:'B',shares:'50,000',price:'$2.00',notional:'$200,000',commission:' $2,500' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
