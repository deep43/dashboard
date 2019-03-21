import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionsComponent } from './commisions.component';

describe('CommisionsComponent', () => {
  let component: CommisionsComponent;
  let fixture: ComponentFixture<CommisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
