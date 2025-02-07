import { Component, inject, OnInit } from '@angular/core';
import { CreateFlightComponent } from '../../forms/create-flight/create-flight.component';
import { GetPlanesUseCase } from '../../../../application/get.plane.usecase';
import { IPlane } from '../../../../domain/model/plane';
import { FlightRequest } from '../../../../domain/model/flight.request';
import { CreateFlightUseCase } from '../../../../application/create.flight.usecase';

@Component({
  selector: 'lib-create-flight-container',
  imports: [CreateFlightComponent],
  templateUrl: './create-flight-container.component.html',
})
export class CreateFlightContainerComponent implements OnInit {
  private readonly _planesUseCase = inject(GetPlanesUseCase);
  private readonly _flightUseCase = inject(CreateFlightUseCase);
  planes: IPlane[] = [];

  ngOnInit(): void {
    this._planesUseCase.initSubscription();
    this._flightUseCase.initSubscription();
    this.getPlanes();

    this._planesUseCase.planes$().subscribe({
      next: (response) => {
        this.planes = response;
        console.log(response);
      },
    });
  }

  getPlanes(): void {
    this._planesUseCase.execute();
  }

  createFlight(request: FlightRequest): void {
    this._flightUseCase.execute(request);
  }
}
