import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlSuccessComponent } from './mdl-success.component';

describe('MdlSuccessComponent', () => {
  let component: MdlSuccessComponent;
  let fixture: ComponentFixture<MdlSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdlSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
