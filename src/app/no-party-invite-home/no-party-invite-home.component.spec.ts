import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPartyInviteHomeComponent } from './no-party-invite-home.component';

describe('NoPartyInviteHomeComponent', () => {
  let component: NoPartyInviteHomeComponent;
  let fixture: ComponentFixture<NoPartyInviteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPartyInviteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPartyInviteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
