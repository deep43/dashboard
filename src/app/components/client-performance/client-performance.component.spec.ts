import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPerformanceComponent } from './client-performance.component';

describe('ClientPerformanceComponent', () => {
  let component: ClientPerformanceComponent;
  let fixture: ComponentFixture<ClientPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
