import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './components/shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatSidenavModule, MatToolbarModule, MatBadgeModule, MatSlideToggleModule,
  MatFormFieldModule, MatInputModule, MatMenuModule, MatRadioModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import {FormsModule} from '@angular/forms';
import {ToggleFullScreenDirective} from './components/shared/fullscreen/toggle-fullscreen.directive';
import {SharesExchangeComponent} from './components/shares-exchange/shares-exchange.component';
import {SharesVolumeComponent} from './components/shares-volume/shares-volume.component';
import {UniqueClientsComponent} from './components/unique-clients/unique-clients.component';
import {CommisionsComponent} from './components/commisions/commisions.component';
import {AgGridModule} from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchClientComponent} from './pages/search-client/search-client.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientPerformanceComponent} from './components/client-performance/client-performance.component';
import {ActivityVolumeComponent} from './components/activity-volume/activity-volume.component';
import {TopBuyPerformanceComponent} from './components/top-buy-performance/top-buy-performance.component';
import {OnePieChartComponent} from './components/one-pie-chart/one-pie-chart.component';
import {ActivityNotionalComponent} from './components/activity-notional/activity-notional.component';
import { ReportCardComponent } from './pages/report-card/report-card.component';
import { ThreeColTableComponent } from './components/three-col-table/three-col-table.component';
import {FourColTableComponent} from './components/four-col-table/four-col-table.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import {GuardsCheckEnd, NavigationEnd} from '@angular/router';
import {AccountManagerComponent} from './pages/account-manager/account-manager.component';
import {WeeklyPerformanceComponent} from './components/weekly-performance/weekly-performance.component';
import {AccountActivityComponent} from './components/account-activity/account-activity.component';
import {NgxPrintModule} from 'ngx-print';
import {IndividualMetricsComponent} from './components/individual-metrics/individual-metrics.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ActivityComissionComponent} from './components/activity-comission/activity-comission.component';
import {ActivityComparisonComponent} from './components/activity-comparison/activity-comparison.component';
import {TotalActivitiesComponent} from './components/total-activities/total-activities.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {PyramidComponentComponent} from './components/pyramid-component/pyramid-component.component';
import {PyramidDemoComponent} from './pages/pyramid-demo/pyramid-demo.component';
import {PMAComponent} from './pages/PMA/PMA.component';
import {AggregatorTwoComponent} from './pages/aggregator-two/aggregator-two.component';
import {AggregatorOneComponent} from './pages/aggregator-one/aggregator-one.component';
import {FourGraphDemoComponent} from './pages/four-graph-demo/four-graph-demo.component';
import {CustomTooltipComponent} from './pages/PMA/custom-tooltip.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ToggleFullScreenDirective,
    AppComponent,
    MainNavComponent,
    SharesExchangeComponent,
    SharesVolumeComponent,
    UniqueClientsComponent,
    CommisionsComponent,
    HomePageComponent,
    SearchClientComponent,
    ClientPerformanceComponent,
    ActivityVolumeComponent,
    ActivityNotionalComponent,
    TopBuyPerformanceComponent,
    OnePieChartComponent,
    ReportCardComponent,
    ThreeColTableComponent,
    FourColTableComponent,
    AccountManagerComponent,
    WeeklyPerformanceComponent,
    AccountActivityComponent,
    IndividualMetricsComponent,
    ActivityComissionComponent,
    ActivityComparisonComponent,
    TotalActivitiesComponent,
    PyramidComponentComponent,
    PyramidDemoComponent,
    AggregatorTwoComponent,
    AggregatorOneComponent,
    CustomTooltipComponent,
    PMAComponent,
    FourGraphDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    SharedModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    AgGridModule.withComponents([]),
    NgxDaterangepickerMd.forRoot(),
    NgbModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    NgxPrintModule,
    NgProgressModule,
    NgProgressRouterModule.withConfig({
      startEvents: [GuardsCheckEnd],
      completeEvents: [NavigationEnd],
      delay: 1000,
      id: 'router-progressbar'
    }),
    ClickOutsideModule
  ],
  exports: [ModalModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomTooltipComponent
  ]
})
export class AppModule {
}
