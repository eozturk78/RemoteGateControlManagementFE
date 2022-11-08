import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteManagerDetailsComponent } from './site-manager-details.component';

describe('SiteManagerDetailsComponent', () => {
  let component: SiteManagerDetailsComponent;
  let fixture: ComponentFixture<SiteManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteManagerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
