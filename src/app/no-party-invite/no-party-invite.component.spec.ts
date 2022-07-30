import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPartyInviteComponent } from './no-party-invite.component';

describe('NoPartyInviteComponent', () => {
  let component: NoPartyInviteComponent;
  let fixture: ComponentFixture<NoPartyInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPartyInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPartyInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
