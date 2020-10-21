import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandisbustmentstatusComponent } from './loandisbustmentstatus.component';

describe('LoandisbustmentstatusComponent', () => {
  let component: LoandisbustmentstatusComponent;
  let fixture: ComponentFixture<LoandisbustmentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoandisbustmentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandisbustmentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
