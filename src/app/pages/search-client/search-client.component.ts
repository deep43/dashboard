import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {BsModalService, ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;

  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };
  selected = {start: moment().subtract(29, 'days'), end: moment()};
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modal.show();
  }

}
