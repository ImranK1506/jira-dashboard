import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBlauwComponent } from './team-blauw.component';

describe('TeamBlauwComponent', () => {
  let component: TeamBlauwComponent;
  let fixture: ComponentFixture<TeamBlauwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBlauwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBlauwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
