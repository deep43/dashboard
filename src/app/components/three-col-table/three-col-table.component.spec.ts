import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColTableComponent } from './three-col-table.component';

describe('ThreeColTableComponent', () => {
  let component: ThreeColTableComponent;
  let fixture: ComponentFixture<ThreeColTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
