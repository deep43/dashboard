import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNotionalComponent } from './shares-volume.component';

describe('SharesVolumeComponent', () => {
  let component: ActivityNotionalComponent;
  let fixture: ComponentFixture<ActivityNotionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityNotionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
