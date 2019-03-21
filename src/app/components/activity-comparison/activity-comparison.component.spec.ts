import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComparisonComponent } from './one-pie-chart.component';

describe('OnePieChartComponent', () => {
  let component: ActivityComparisonComponent;
  let fixture: ComponentFixture<ActivityComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
