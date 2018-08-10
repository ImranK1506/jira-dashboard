import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRoodComponent } from './team-rood.component';

describe('TeamRoodComponent', () => {
  let component: TeamRoodComponent;
  let fixture: ComponentFixture<TeamRoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
