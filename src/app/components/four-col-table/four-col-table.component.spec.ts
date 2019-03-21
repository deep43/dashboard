import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColTableComponent } from './three-col-table.component';

describe('ThreeColTableComponent', () => {
  let component: FourColTableComponent;
  let fixture: ComponentFixture<FourColTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
