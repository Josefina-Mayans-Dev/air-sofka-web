import { TestBed } from '@angular/core/testing';

import { IRouteFlight } from '../../interfaces';
import { RouteFlightComponent } from './route-flight.component';

describe('RouteFlightComponent', () => {

  let routeData: IRouteFlight;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteFlightComponent]
    })
    .compileComponents();

    routeData = {
      departureTime: 'departureTime',
      departureAirportCode: 'departureAirportCode',
      arrivalTime: 'arrivalTime',
      arrivalAirportCode: 'arrivalAirportCode',
      stopAirportCode: 'stopAirportCode',
      stopDuration: 'stopDuration',
      days: 'days',
    };

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RouteFlightComponent);
    const component = fixture.componentInstance;

    fixture.componentRef.setInput('routeData', routeData);
    fixture.detectChanges();
    expect(component).toBeTruthy();

  });

  it('should render points', () => {
    const fixture = TestBed.createComponent(RouteFlightComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('routeData', routeData);
    fixture.detectChanges();
    const from = compiled.querySelector('.flight__from__time');
    const to = compiled.querySelector('.flight__to__time');

    expect(compiled.querySelector('span')).toBeTruthy();
    expect(from).toBeTruthy();
    expect(to).toBeTruthy();
  });

});