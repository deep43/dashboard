import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMetricsComponent } from './individual-metrics.component';

describe('ActivityVolumeComponent', () => {
  let component: IndividualMetricsComponent;
  let fixture: ComponentFixture<IndividualMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
