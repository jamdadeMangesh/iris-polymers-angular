import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchFilmsComponent } from './mulch-films.component';

describe('MulchFilmsComponent', () => {
  let component: MulchFilmsComponent;
  let fixture: ComponentFixture<MulchFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulchFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulchFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
