import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSpinnerComponent } from './size-spinner.component';

describe('SizeSpinnerComponent', () => {
  let component: SizeSpinnerComponent;
  let fixture: ComponentFixture<SizeSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
