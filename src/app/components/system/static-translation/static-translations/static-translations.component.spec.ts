import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTranslationsComponent } from './static-translations.component';

describe('StaticTranslationsComponent', () => {
  let component: StaticTranslationsComponent;
  let fixture: ComponentFixture<StaticTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticTranslationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
