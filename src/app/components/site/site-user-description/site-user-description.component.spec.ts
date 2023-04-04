import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteUserDescriptionComponent } from './site-user-description.component';


describe('SiteUserDescriptionComponent', () => {
  let component: SiteUserDescriptionComponent;
  let fixture: ComponentFixture<SiteUserDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUserDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
