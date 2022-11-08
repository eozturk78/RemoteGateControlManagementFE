import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlDeviceListComponent } from './mdl-device-list.component';

describe('MdlDeviceListComponent', () => {
  let component: MdlDeviceListComponent;
  let fixture: ComponentFixture<MdlDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdlDeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
