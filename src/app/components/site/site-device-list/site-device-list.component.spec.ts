import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDeviceListComponent } from './site-device-list.component';

describe('SiteDeviceListComponent', () => {
  let component: SiteDeviceListComponent;
  let fixture: ComponentFixture<SiteDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
