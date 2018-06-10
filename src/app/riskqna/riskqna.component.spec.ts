import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskqnaComponent } from './riskqna.component';

describe('RiskqnaComponent', () => {
  let component: RiskqnaComponent;
  let fixture: ComponentFixture<RiskqnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskqnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskqnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
