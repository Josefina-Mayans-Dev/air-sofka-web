import { inject, Injectable } from '@angular/core';
import { UpdateFlightService } from '../infrastructure/services/update-flight.service';
import { State } from '../domain/state';
import { delay, finalize, Observable, Subscription, tap } from 'rxjs';
import { FlightUpdateRequest } from '../domain/model/flight.update.request';
import { Router } from '@angular/router';
import { IFlight } from '../domain/model/flight';
import { LoadingService } from 'shared';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class UpdateFlightUseCase {
    private readonly _service = inject(UpdateFlightService);
    private readonly _state = inject(State);
    private readonly _router = inject(Router);
    private readonly _loading = inject(LoadingService);
    private subscriptions!: Subscription;
    private _alert = inject(ToastrService);


    flights$(): Observable<IFlight[]> {
        return this._state.flights.$();
    }

    initSubscription(): void {
        this.subscriptions = new Subscription();
    }

    destroySubscription(): void {
        this.subscriptions.unsubscribe();
    }

    execute(request: FlightUpdateRequest): void {
        this._loading.setLoading(true);
        this.subscriptions.add(
            this._service
                .update(request)
                .pipe(
                    delay(2000),
                    finalize(() => this._loading.setLoading(false)),
                    tap((updatedFlight: IFlight) => {
                        const currentFlights = this._state.flights.snapshot();

                        // Buscar si el vuelo ya existe, si sí, reemplazarlo
                        const updatedFlights = currentFlights.map((flight) =>
                            flight.id === updatedFlight.id ? updatedFlight : flight
                        );

                        // Si no existe, agregarlo al final del array
                        const isNewFlight = !currentFlights.some(flight => flight.id === updatedFlight.id);
                        if (isNewFlight) {
                            updatedFlights.push(updatedFlight);
                        }

                        // Actualizar el estado con los vuelos modificados
                        this._state.flights.set(updatedFlights);
                    })
                )
                .subscribe({
                    next: () => {
                        this._alert.success('Flight updated successfully');
                        this._router.navigate(['/admin']);
                    },
                    error: error => {
                        this._alert.error('Usuario o contraseña incorrectos');
                    }
                })
        );
    }
}
