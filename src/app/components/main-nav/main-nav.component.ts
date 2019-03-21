import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
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
    {id: 'client', icon: 'feather icon-briefcase', clicked: true, searchable: true, title: 'Search Client'},
    {id: '#', icon: 'feather icon-trending-up', clicked: true, searchable: true, title: 'Search Symbol'},
    {id: '#', icon: 'feather icon-box', clicked: true, searchable: true, title: 'Search Sector'},
    {
      id: '#', icon: 'feather icon-server', clicked: true, submenuWithSearch: true, title: 'Search Preset',
      links: [
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Barrick gold'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'Goldman Sachs'},
        {id: '#', icon: '', clicked: true, searchable: false, title: 'FxExchange'},
        {id: '#', icon: 'feather icon-plus', clicked: true, searchable: false, title: 'Add New'}
      ]
    }];
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
}
