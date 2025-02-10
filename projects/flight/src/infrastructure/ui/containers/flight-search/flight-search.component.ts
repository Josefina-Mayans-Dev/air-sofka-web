import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FlightSearchFormComponent } from '../../components/flight-search-form/flight-search-form.component';
import { FlightSearchCriteria } from '../../interfaces/flight-search-criteria';
import { GetFlightsUseCase } from '../../../../application/get.flight.usecase';
import { IFlight } from '../../../../domain/model/flight';

@Component({
  selector: 'lib-flight-search',
  imports: [FlightSearchFormComponent],
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit, OnDestroy {

  private readonly _useCase = inject(GetFlightsUseCase);
  flights: IFlight[] = [];

  ngOnInit(): void {
    this._useCase.initSubscription();

    this._useCase.flights$().subscribe({
      next: (response) => (this.flights = response),
    });
  }

  ngOnDestroy(): void {
    this._useCase.destroySubscription();
  }

  searchFlight(filters: FlightSearchCriteria) {
    this._useCase.execute(filters);
  }
}
