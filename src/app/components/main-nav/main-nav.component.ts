import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '225px'
      })),
      state('closed', style({
        width: '40px'
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
  ]
})
export class MainNavComponent {
  megaMenuOpened = false;
  showFullNavigation = false;
  showNavigationMenu = false;
  showLink = false;
  slideColor = 'blue';

  menuItems = [
    {id: '#', icon: 'feather icon-bar-chart', clicked: true, link: true, title: 'General Dashboard'},
    {id: '/#/accountsactivity', icon: 'feather icon-activity', clicked: true, link: true, title: 'Activity Manager'},
    {id: 'client', icon: 'feather icon-briefcase', clicked: true, submenuWithSearch: true, title: 'Search Client',
      links: [
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'EY'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'PWC'},
        {id: '#', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]},
    {id: '#', icon: 'feather icon-trending-up', clicked: true, submenuWithSearch: true, title: 'Search Symbol',
      links: [
        {id: '#', icon: '', clicked: true, searchable: false, title: 'AAPPL'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'YAHOO'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'MSN'},
        {id: '#', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]},
    {id: '#', icon: 'feather icon-box', clicked: true, submenuWithSearch: true, title: 'Search Sector',
      links: [
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Trading'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Banking'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Health care'},
        {id: '#', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]},
    {
      id: '#', icon: 'feather icon-server', clicked: true, submenuWithSearch: true, title: 'Search Preset',
      links: [
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Barrick gold'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'FxExchange'},
        {id: '#', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    }];
  menuItemsCopy = this.menuItems.map(x => Object.assign({}, x));
  notifications = [
    {message: 'Client ‘1832’ just executed a block trade on symbol: ‘XYZ’', id: 1},
    {message: 'John Smith from ABC Investments has had recent meetings about ‘ABC’', id: 2},
    {message: 'Bob Jones from Mackenzie might be interested in taking a position in ‘GHY’', id: 3},
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  toggleMegaMenu() {
    this.megaMenuOpened = !this.megaMenuOpened;
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
  }

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

  onChangeSubmenuWithSearch($event, item){
    let itemCopy = this.menuItemsCopy.filter(itemCopy=>{
      return itemCopy.title === item.title;
    })[0];
    item.links = itemCopy.links.filter(link =>{
      return link.title.toLowerCase().indexOf($event.target.value) >= 0;
    });
  }
}
