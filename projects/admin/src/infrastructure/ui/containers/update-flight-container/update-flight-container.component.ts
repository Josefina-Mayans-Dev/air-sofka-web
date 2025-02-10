import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { GetPlanesUseCase } from '../../../../application/get.plane.usecase';
import { IPlane } from '../../../../domain/model/plane';
import { UpdateFlightUseCase } from '../../../../application/update.flight.usecase';
import { UpdateFlightComponent } from '../../forms/update-flight/update-flight.component';
import { FlightUpdateRequest } from '../../../../domain/model/flight.update.request';
import { IFlight } from 'flight';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFlightsService } from '../../../services/get-flight.service';

@Component({
  selector: 'lib-update-flight-container',
  imports: [UpdateFlightComponent],
  templateUrl: './update-flight-container.component.html',
})
export class UpdateFlightContainerComponent implements OnInit {
  flight = signal<IFlight | null>(null);

  private readonly _planesUseCase = inject(GetPlanesUseCase);
  private readonly _flightUseCase = inject(UpdateFlightUseCase);
  private readonly flightService = inject(GetFlightsService); // Inyecta el servicio
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  planes: IPlane[] = [];

  ngOnInit(): void {
    const flightId = this.route.snapshot.paramMap.get('id');

    if (flightId) {
      this.flightService.getById(flightId).subscribe({
        next: (response) => {
          this.flight.set(response);
        },
      });
    }

    this._planesUseCase.initSubscription();
    this._flightUseCase.initSubscription();
    this.getPlanes();

    this._planesUseCase.planes$().subscribe({
      next: (response) => {
        this.planes = response;
      },
    });
  }

  getPlanes(): void {
    this._planesUseCase.execute();
  }

  updateFlight(request: FlightUpdateRequest): void {
    this._flightUseCase.execute(request);
  }
}
