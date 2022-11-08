import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepUserListComponent } from './rep-user-list.component';

describe('RepUserListComponent', () => {
  let component: RepUserListComponent;
  let fixture: ComponentFixture<RepUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
