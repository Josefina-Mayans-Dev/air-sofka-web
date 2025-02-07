import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetFlightsUseCase } from '../../../../application/get.flight.usecase';
import { IFlight } from '../../../../domain/model/flight';
import { FlightsComponent } from '../../components/flights/flights.component';

@Component({
  selector: 'lib-flights-container',
  imports: [FlightsComponent],
  templateUrl: './flights-container.component.html',
})
export class FlightsContainerComponent implements OnInit, OnDestroy {
  private readonly _useCase = inject(GetFlightsUseCase);
  flights: IFlight[] = [];

  ngOnInit(): void {
    this._useCase.initSubscription();
    this.getFlights();

    this._useCase.flights$().subscribe({
      next: (response) => (this.flights = response),
    });
  }

  ngOnDestroy(): void {
    this._useCase.destroySubscription();
  }

  getFlights() {
    this._useCase.execute();
  }
}
