import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteManagerListComponent } from './site-manager-list.component';

describe('SiteManagerListComponent', () => {
  let component: SiteManagerListComponent;
  let fixture: ComponentFixture<SiteManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteManagerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
