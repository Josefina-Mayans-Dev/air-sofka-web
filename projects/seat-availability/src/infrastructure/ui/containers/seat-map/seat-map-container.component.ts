import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISeat } from '../../../../domain/model/seat.model';
import { GetSeatsUsecase } from '../../../../application/get-seat-map.usecase';
/* import { SelectSeatUseCase } from '../../../../application/seat-map/select-seat.usecase';
import { UnselectSeatUseCase } from '../../../../application/seat-map/unselect-seat.usecase'; */

import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';
import { SeatMapComponent} from '../../components/seat-map/seat-map.component';
import { SelectSeatUseCase } from '../../../../application/select-seat.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-map-container',
  imports: [SeatMapComponent],
  template: `
  <lib-seat-map [flightId]="'66bf2b9b-cb42-400e-bbfe-b39c03549ced'"  (onChoseSeat)="handleSeatSelection($event)"></lib-seat-map>
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



 /*  @Input() flightId!: string;
  seats: ISeat[] = [];
  selectedSeats: Set<string> = new Set();
  private subscriptions: Subscription[] = [];

  constructor(
    private getSeatMapUseCase: GetSeatMapUseCase,
    private selectSeatUseCase: SelectSeatUseCase,
    private unselectSeatUseCase: UnselectSeatUseCase,
    private seatMapState: SeatMapState,
    private seatMapService: SeatMapService
  ) {} */

  ngOnInit(): void {
   /*  this.loadSeatMap();
    this.setupPolling();
    this.subscribeToState(); */
    this._getSeatsUsecase.initSubscriptions();
    this.loadSeatMap();
  }

  ngOnDestroy(): void {
    this._getSeatsUsecase.destroySubscriptions();
  }

  private loadSeatMap(): void {
    const flightId = '123'; // Get this from route params or input
    this._getSeatsUsecase.execute(flightId);
  }

  handleSeatSelection(seatsId: string[]): void {
    console.log('seat selected', seatsId);
    this._selectedSeatsUsecase.execute(seatsId);
  }

  /* onSeatSelected(seatId: string): void {
    if (this.selectedSeats.has(seatId)) {
      this.unselectSeatUseCase.execute(this.flightId, seatId).subscribe();
    } else {
      this.selectSeatUseCase.execute(this.flightId, seatId).subscribe();
    }
  }

  private loadSeatMap(): void {
    const subscription = this.getSeatMapUseCase
      .execute(this.flightId)
      .subscribe(seats => {
        this.seatMapState.setSeats(seats);
      });
    this.subscriptions.push(subscription);
  }

  private setupPolling(): void {
    const pollingSubscription = this.seatMapService
      .getSeatMapWithPolling(this.flightId)
      .subscribe(seats => {
        this.seatMapState.setSeats(seats);
      });
    this.subscriptions.push(pollingSubscription);
  }

  private subscribeToState(): void {
    const seatsSubscription = this.seatMapState
      .getSeats()
      .subscribe(seats => {
        this.seats = seats;
      });
    
    const selectedSeatsSubscription = this.seatMapState
      .getSelectedSeats()
      .subscribe(selectedSeats => {
        this.selectedSeats = selectedSeats;
      });

    this.subscriptions.push(seatsSubscription, selectedSeatsSubscription);
  } */
}