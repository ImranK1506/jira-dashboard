import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOranjeComponent } from './team-oranje.component';

describe('TeamOranjeComponent', () => {
  let component: TeamOranjeComponent;
  let fixture: ComponentFixture<TeamOranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
