import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISeat } from '../../../../domain/model/seat.model';
import { GetSeatsUsecase } from '../../../../application/get-seat-map.usecase';
/* import { SelectSeatUseCase } from '../../../../application/seat-map/select-seat.usecase';
import { UnselectSeatUseCase } from '../../../../application/seat-map/unselect-seat.usecase'; */

import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';
import { SeatMapComponent } from '../../components/seat-map/seat-map.component';
import { SelectSeatUseCase } from '../../../../application/select-seat.usecase';
import { Router } from '@angular/router';
import { GetFlightsSelectedUseCase, IFlightSelected } from 'flight';

@Component({
  selector: 'app-seat-map-container',
  imports: [SeatMapComponent],
  template: `
  <lib-seat-map [flightId]="flightId"  (onChoseSeat)="handleSeatSelection($event)"></lib-seat-map>
  `
})

export class SeatMapContainer implements OnInit, OnDestroy {
  private readonly _getSeatsUsecase = inject(GetSeatsUsecase);
  private readonly _selectedSeatsUsecase = inject(SelectSeatUseCase);
  public seat$: Observable<ISeat>;
  readonly seats$ = this._getSeatsUsecase.seats$();
  readonly selectedSeats$ = this._getSeatsUsecase.selectedSeats$();
  readonly selectedSeatsId$ = this._selectedSeatsUsecase.selectedSeatsId$();
  readonly error$ = this._getSeatsUsecase.error$();

  readonly _getFlightSelected = inject(GetFlightsSelectedUseCase);
  public flight$: Observable<IFlightSelected>;
  flightId: string = '';

  ngOnInit(): void {
    this._getFlightSelected.initSubscription();
    this.flight$ = this._getFlightSelected.flight$();
    this.flight$.subscribe((flight) => {
      this.flightId = flight.origin.id;
    });
  }


  ngOnDestroy(): void {
    this._getFlightSelected.destroySubscription();
  }


  private loadSeatMap(): void {
    
  }

  handleSeatSelection(seatsId: string[]): void {
    this._selectedSeatsUsecase.execute(seatsId);
  }



}