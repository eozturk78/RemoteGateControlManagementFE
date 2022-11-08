import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAccountsComponent } from './message-accounts.component';

describe('MessageAccountsComponent', () => {
  let component: MessageAccountsComponent;
  let fixture: ComponentFixture<MessageAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
