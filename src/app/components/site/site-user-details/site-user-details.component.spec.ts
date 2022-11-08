import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUserDetailsComponent } from './site-user-details.component';

describe('SiteUserDetailsComponent', () => {
  let component: SiteUserDetailsComponent;
  let fixture: ComponentFixture<SiteUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
