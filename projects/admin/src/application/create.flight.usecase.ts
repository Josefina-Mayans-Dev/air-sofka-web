import { inject, Injectable } from '@angular/core';
import { CreateFlightService } from '../infrastructure/services/create-flight.service';
import { State } from '../domain/state';
import { Subscription } from 'rxjs';
import { FlightRequest } from '../domain/model/flight.request';

@Injectable({
  providedIn: 'root',
})
export class CreateFlightUseCase {
  private readonly _service = inject(CreateFlightService);
  private readonly _state = inject(State);
  private subscriptions!: Subscription;

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: FlightRequest): void {
    this.subscriptions.add(this._service.create(request).subscribe());
  }
}
