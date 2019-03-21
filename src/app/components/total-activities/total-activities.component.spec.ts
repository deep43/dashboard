import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalActivitiesComponent } from './top-buy-performance.component';

describe('TopBuyPerformanceComponent', () => {
  let component: TotalActivitiesComponent;
  let fixture: ComponentFixture<TotalActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
