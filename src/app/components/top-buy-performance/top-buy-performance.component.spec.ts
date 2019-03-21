import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBuyPerformanceComponent } from './top-buy-performance.component';

describe('TopBuyPerformanceComponent', () => {
  let component: TopBuyPerformanceComponent;
  let fixture: ComponentFixture<TopBuyPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBuyPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBuyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
