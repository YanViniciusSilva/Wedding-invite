import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteHomeComponent } from './invite-home.component';

describe('InviteHomeComponent', () => {
  let component: InviteHomeComponent;
  let fixture: ComponentFixture<InviteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
