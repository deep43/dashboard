import {Component, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
// import { ListKeyManager } from '@angular/cdk/a11y';
import {UP_ARROW, DOWN_ARROW, ENTER} from '@angular/cdk/keycodes';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';


const clients = [
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'EY'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'PWC'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Forbes'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'STC'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Chattered Bank'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Royal Bank of Canada'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Toronto & Montreal'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Bank of Nova Scotia'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Toronto-Dominion Bank'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Bank of Montreal'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Imperial Oil'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Magna International'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Suncor Energy'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'BCE Inc.'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Canadian National Railway'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Potash Corporation '},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'The Woodbridge Company'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Husky Energy'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Great-West Lifeco'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Canadian Natural Resources'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'First Quantum Minerals'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Goldcorp Inc.'},
];
const symbols = [
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AAPPL'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'BSE'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'TTS'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'YAHOO'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'STC'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ARE'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AEM'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AGU'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AIM'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AC.A'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ATD.B'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AGT'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ALA'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ARX'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ACO.X'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ACQ'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'BMO'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'BNS'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ABX'},

];
const sectors = [
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Waste & disposal services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Industrials'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Industrials'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Telecommunications'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Health care'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Financials'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer goods'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Industrials'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Utilities'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Industrials'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Consumer services'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Utilities'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Technology'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Trading'},
];
const presets = [
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Barrick gold'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'FxExchange'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Forbes'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'STC'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Aecon Group'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Agnico Eagle Mines'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Agrium'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Aimia'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Air Canada'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Alimentation Couche Tard'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Alliance Grain Traders'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AltaGas'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ARC Resources'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'ATCO'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'AutoCanada'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Bank of Montreal'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Bank of Nova Scotia'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'Baytex Energy'},
  {id: '/client', icon: '', clicked: true, searchable: false, title: 'BCE Inc'},

];

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'block',
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
    trigger('openCloseLink', [
      state('link-opened', style({
        display: 'inline-block'
      })),
      state('link-closed', style({
        display: 'none'
      })),
      transition('link-opened => link-closed', [
        animate('0.3s')
      ]),
      transition('link-closed => link-opened', [
        animate('0.3s')
      ]),
    ]),
    trigger('openCloseMegaMenu', [
      state('open', style({
        visibility: 'visible'
      })),
      state('close', style({
        visibility: 'none'
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class MainNavComponent {
  // keyboardEventsManager: ListKeyManager;
  megaMenuOpened = false;
  searchOpened = false;
  showFullNavigation = false;
  showNavigationMenu = false;
  showLink = false;
  slideColor = 'blue';

  menuItems = [
    {id: '/', icon: 'feather icon-bar-chart', clicked: true, link: true, title: 'General Dashboard'},
    {id: '/accountsactivity', icon: 'feather icon-activity', clicked: true, link: true, title: 'Activity Manager'},
    {id: '/pyramid', icon: 'feather icon-map', clicked: true, link: true, title: 'Pyramid Demo'},
    {id: '/pma', icon: 'feather icon-grid', clicked: true, link: true, title: 'PMA'},
    {id: '/aggregatorone', icon: 'feather icon-map', clicked: true, link: true, title: 'Aggregator One'},
    /*{
      id: '/client', icon: 'feather icon-briefcase', clicked: true, submenuWithSearch: true, title: 'Search Client',
      links: [
        {id: '/client', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '/client', icon: '', clicked: true, searchable: false, title: 'EY'},
        {id: '/client', icon: '', clicked: true, searchable: false, title: 'PWC'},
        {id: '/client', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    },
    {
      id: '/symbol', icon: 'feather icon-trending-up', clicked: true, submenuWithSearch: true, title: 'Search Symbol',
      links: [
        {id: '/symbol', icon: '', clicked: true, searchable: false, title: 'AAPPL'},
        {id: '/symbol', icon: '', clicked: true, searchable: false, title: 'YAHOO'},
        {id: '/symbol', icon: '', clicked: true, searchable: false, title: 'MSN'},
        {id: '/symbol', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    },
    {
      id: '/sector', icon: 'feather icon-box', clicked: true, submenuWithSearch: true, title: 'Search Sector',
      links: [
        {id: '/sector', icon: '', clicked: true, searchable: false, title: 'Trading'},
        {id: '/sector', icon: '', clicked: true, searchable: false, title: 'Banking'},
        {id: '/sector', icon: '', clicked: true, searchable: false, title: 'Health care'},
        {id: '/sector', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    },
    {
      id: '/preset', icon: 'feather icon-server', clicked: true, submenuWithSearch: true, title: 'Search Preset',
      links: [
        {id: '/preset', icon: '', clicked: true, searchable: false, title: 'Barrick gold'},
        {id: '/preset', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '/preset', icon: '', clicked: true, searchable: false, title: 'FxExchange'},
        {id: '/preset', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    }*/
  ];
  menuItemsCopy = this.menuItems.map(x => Object.assign({}, x));

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  searchClient = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => clients.filter(v => {
        return term.toLowerCase() && v.title.toLowerCase().indexOf(term.toLowerCase()) > -1
      }))
    );

  formatter = (x: { title: string }) => x.title;

  searchSymbol = ((text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => symbols.filter(
        v => term.toLowerCase() && v.title.toLowerCase().indexOf(term.toLowerCase()) > -1))
    ));
  searchSector = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => sectors.filter(
        v => term.toLowerCase() && v.title.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );
  searchPreset = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => presets.filter(
        v => term.toLowerCase() && v.title.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );

  searchItems = [
    {
      id: 'client', icon: 'feather icon-briefcase', clicked: true, submenuWithSearch: true, title: 'Search Client',
      model: '',
      links: [
        /*{id: '/client', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '/client', icon: '', clicked: true, searchable: false, title: 'EY'},
        {id: '/client', icon: '', clicked: true, searchable: false, title: 'PWC'},
        {id: '/client', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}*/
      ],
      searchFn: this.searchClient
    },
    {
      id: '', icon: 'feather icon-trending-up', clicked: true, submenuWithSearch: true, title: 'Search Symbol',
      model: '',
      links: [
        /*{id: '/', icon: '', clicked: true, searchable: false, title: 'AAPPL'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'YAHOO'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'MSN'},
        {id: '/', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}*/
      ],
      searchFn: this.searchSymbol
    },
    {
      id: '', icon: 'feather icon-box', clicked: true, submenuWithSearch: true, title: 'Search Sector',
      model: '',
      links: [
        /*{id: '/', icon: '', clicked: true, searchable: false, title: 'Trading'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'Banking'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'Health care'},
        {id: '/', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}*/
      ],
      searchFn: this.searchSector
    },
    {
      id: '', icon: 'feather icon-server', clicked: true, submenuWithSearch: true, title: 'Search Preset',
      model: '',
      links: [
        /*{id: '/', icon: '', clicked: true, searchable: false, title: 'Barrick gold'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '/', icon: '', clicked: true, searchable: false, title: 'FxExchange'},
        {id: '/', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}*/
      ],
      searchFn: this.searchPreset
    }];
  searchItemsCopy = this.searchItems.map(x => Object.assign({}, x));

  notifications = [
    {
      message: '<a class="notification-link" [routerLink]="/client" href="/#/client">Client ‘1832’</a> just executed a block trade on symbol: ‘XYZ’',
      id: 1
    },
    {message: 'John Smith from ABC Investments has had recent meetings about ‘ABC’', id: 2},
    {message: 'Bob Jones from Mackenzie might be interested in taking a position in ‘GHY’', id: 3},
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  public model: any;

  ngOnInit() {
    //this.searchClient(new Subject<string>());
  }

  toggleMegaMenu() {
    this.megaMenuOpened = !this.megaMenuOpened;
  }

  clickedOutSearch() {
    if (this.searchOpened) {
      this.searchOpened = false;
      this.clearSearchBoxes();
    }
  }

  clearSearchBoxes() {
    this.searchItems = this.searchItems.map((item) => {
      item.model = '';
      return item;
    });
  }

  clickedOutMegaMenu() {
    if (this.megaMenuOpened) {
      this.megaMenuOpened = false;
    }
  }

  onEscKeyUp(event) {
    if (event.key === 'Escape') {
      if (this.searchOpened) {
        this.searchOpened = false;
      }

      if (this.megaMenuOpened) {
        this.megaMenuOpened = false;
      }
    }
  }

  toggleSearchMenu() {
    this.searchOpened = !this.searchOpened;
    this.clearSearchBoxes();
  }

  toggleMenuItem(menuItem) {
    /* if (!menuItem.clicked) {

    } */

    this.showLink = !menuItem.clicked;
    this.menuItems = this.menuItems.map((item) => {
      item.clicked = false;

      return item;
    });
    menuItem.clicked = !menuItem.clicked;
  }

  toggle(event) {
    this.showFullNavigation = event.checked;
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(x => {
      this.searchOpened = false;
      console.log(this.router.url);
    })
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggered when a key is pressed while the input is focused
   */

  /*handleKeyUp(event: KeyboardEvent) {
    event.stopImmediatePropagation();
    if (this.keyboardEventsManager) {
      if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
        // passing the event to key manager so we get a change fired
        this.keyboardEventsManager.onKeydown(event);
        return false;
      } else if (event.keyCode === ENTER) {
        // when we hit enter, the keyboardManager should call the selectItem method of the `ListItemComponent`
        this.keyboardEventsManager.activeItem.selectItem();
        return false;
      }
    }
  }*/

  goToPage(link) {
    this.router.navigateByUrl(`/${link}`);
  }

  mouseEnter(menuItem) {
    if (this.showFullNavigation) {
      return;
    }
    this.showLink = !menuItem.clicked;
    this.menuItems = this.menuItems.map((item) => {
      item.clicked = false;

      return item;
    });
    menuItem.clicked = !menuItem.clicked;
    this.showNavigationMenu = true;
  }

  mouseLeave(menuItem) {
    if (this.showFullNavigation) {
      return;
    }
    this.showNavigationMenu = false;
    this.menuItems = this.menuItems.map((item) => {
      item.clicked = true;

      return item;
    });
  }

  deleteNotification($event, notification) {
    this.notifications = this.notifications.filter((item) => {
      return item.id !== notification.id;
    });
    if (this.notifications.length) {
      $event.preventDefault();
      $event.stopPropagation();
    }
  }

  clearAllNotifications() {
    this.notifications = [];
  }

  onClickMenuItem(event, item) {
    if (!item.link) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onFocusSearchInput(event, item) {
    item.active = !item.active;
  }

  onChangeSubmenuWithSearch($event, item) {
    let itemCopy = this.menuItemsCopy.filter(itemCopy => {
      return itemCopy.title === item.title;
    })[0];
    item['links'] = itemCopy['links'].filter(link => {
      return link.title.toLowerCase().indexOf($event.target.value.toLowerCase()) >= 0;
    });
  }

  onChangeSearchInput($event, item) {
    let itemCopy = this.searchItemsCopy.filter(itemCopy => {
      return itemCopy.title === item.title;
    })[0];
    item.links = itemCopy.links.filter(link => {
      return link.title.toLowerCase().indexOf($event.target.value.toLowerCase()) >= 0;
    });
  }

  itemSelected(event) {
    this.router.navigateByUrl(event.item.id);
  }
}
