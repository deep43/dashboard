import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityVolumeComponent } from './activity-volume.component';

describe('ActivityVolumeComponent', () => {
  let component: ActivityVolumeComponent;
  let fixture: ComponentFixture<ActivityVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
