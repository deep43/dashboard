import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePieChartComponent } from './one-pie-chart.component';

describe('OnePieChartComponent', () => {
  let component: OnePieChartComponent;
  let fixture: ComponentFixture<OnePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
