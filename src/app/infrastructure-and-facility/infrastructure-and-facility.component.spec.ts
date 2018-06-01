import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureAndFacilityComponent } from './infrastructure-and-facility.component';

describe('InfrastructureAndFacilityComponent', () => {
  let component: InfrastructureAndFacilityComponent;
  let fixture: ComponentFixture<InfrastructureAndFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureAndFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructureAndFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
