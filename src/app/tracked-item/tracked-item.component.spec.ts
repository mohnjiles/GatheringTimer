import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedItemComponent } from './tracked-item.component';

describe('TrackedItemComponent', () => {
  let component: TrackedItemComponent;
  let fixture: ComponentFixture<TrackedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
