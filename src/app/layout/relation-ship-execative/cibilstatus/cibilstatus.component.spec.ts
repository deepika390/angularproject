import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilstatusComponent } from './cibilstatus.component';

describe('CibilstatusComponent', () => {
  let component: CibilstatusComponent;
  let fixture: ComponentFixture<CibilstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibilstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
