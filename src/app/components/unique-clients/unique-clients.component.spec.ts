import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueClientsComponent } from './unique-clients.component';

describe('UniqueClientsComponent', () => {
  let component: UniqueClientsComponent;
  let fixture: ComponentFixture<UniqueClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
