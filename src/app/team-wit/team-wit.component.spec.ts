import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWitComponent } from './team-wit.component';

describe('TeamWitComponent', () => {
  let component: TeamWitComponent;
  let fixture: ComponentFixture<TeamWitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
