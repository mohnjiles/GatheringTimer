import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EorzeaTimeComponent } from './eorzea-time.component';

describe('EorzeaTimeComponent', () => {
  let component: EorzeaTimeComponent;
  let fixture: ComponentFixture<EorzeaTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EorzeaTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EorzeaTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
