import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesVolumeComponent } from './shares-volume.component';

describe('SharesVolumeComponent', () => {
  let component: SharesVolumeComponent;
  let fixture: ComponentFixture<SharesVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
