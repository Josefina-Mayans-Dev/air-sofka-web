import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTypeSelectorComponent } from './trip-type-selector.component';

describe('TripTypeSelectorComponent', () => {
  let component: TripTypeSelectorComponent;
  let fixture: ComponentFixture<TripTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
