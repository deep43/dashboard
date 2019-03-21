import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesExchangeComponent } from './shares-exchange.component';

describe('SharesExchangeComponent', () => {
  let component: SharesExchangeComponent;
  let fixture: ComponentFixture<SharesExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
