import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFlightComponent } from './route-flight.component';

describe('RouteFlightComponent', () => {
  let component: RouteFlightComponent;
  let fixture: ComponentFixture<RouteFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
