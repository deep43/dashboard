import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComissionComponent } from './individual-metrics.component';

describe('ActivityVolumeComponent', () => {
  let component: ActivityComissionComponent;
  let fixture: ComponentFixture<ActivityComissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
