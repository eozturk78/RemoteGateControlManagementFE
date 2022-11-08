import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDeviceDetailsComponent } from './site-device-details.component';

describe('SiteDeviceDetailsComponent', () => {
  let component: SiteDeviceDetailsComponent;
  let fixture: ComponentFixture<SiteDeviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDeviceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
