import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilStatusComponent } from './cibil-status.component';

describe('CibilStatusComponent', () => {
  let component: CibilStatusComponent;
  let fixture: ComponentFixture<CibilStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibilStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
