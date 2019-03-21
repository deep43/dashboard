import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchClientComponent} from './pages/search-client/search-client.component';
import {ReportCardComponent} from './pages/report-card/report-card.component';
import {AccountManagerComponent} from './pages/account-manager/account-manager.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'client',
    component: SearchClientComponent,
  },
  {
    path: 'report',
    component: ReportCardComponent,
  },
  {
    path: 'accountsactivity',
    component: AccountManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
