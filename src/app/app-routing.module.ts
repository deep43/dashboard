import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchClientComponent} from './pages/search-client/search-client.component';
import {ReportCardComponent} from './pages/report-card/report-card.component';
import {AccountManagerComponent} from './pages/account-manager/account-manager.component';
import {PyramidDemoComponent} from './pages/pyramid-demo/pyramid-demo.component';
import {PMAComponent} from './pages/PMA/PMA.component';
import {AggregatorTwoComponent} from './pages/aggregator-two/aggregator-two.component';
import {AggregatorOneComponent} from './pages/aggregator-one/aggregator-one.component';

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
  },
  {
    path: 'pyramid',
    component: PyramidDemoComponent,
  },
  {
    path: 'pma',
    component: PMAComponent,
  },
  {
    path: 'aggregatorone',
    component: AggregatorOneComponent,
  },
  {
    path: 'aggregatortwo',
    component: AggregatorTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
