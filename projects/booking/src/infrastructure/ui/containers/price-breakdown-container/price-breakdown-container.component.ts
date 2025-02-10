import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  PriceBreakdownCardComponent,
  PriceDetail,
} from '../../components/price-breakdown-card/price-breakdown-card.component';
import { GetSeatsUsecase, SelectSeatUseCase } from 'seat-availability';
import { map, Observable, switchMap, tap } from 'rxjs';
import { GetCostBreakdownUsecase } from '../../../../application/cost/get-cost-brackdown.usecase';
import { ICostBreakdown } from '../../../../domain/model/const-brackdown.model';

@Component({
  selector: 'lib-price-breakdown-container',
  imports: [PriceBreakdownCardComponent],
  templateUrl: './price-breakdown-container.component.html',
})
export class PriceBreakdownContainerComponent implements OnInit, OnDestroy {
  readonly _selectedSeatsUsecase = inject(SelectSeatUseCase);
  readonly _getCostBreakdown = inject(GetCostBreakdownUsecase);
  listSeatsIds: Observable<string[]>;

  seatsIds: string[] = [];

  priceDetails: PriceDetail[] = [
  ];
  totalPrice: number = 0;
  currency: string = 'USD';

  ngOnInit(): void {
    this._selectedSeatsUsecase.initSubscriptions();
    this._getCostBreakdown.initSubscriptions();
    this.getSeatsIds();
  }

  ngOnDestroy(): void {
    this._getCostBreakdown.destroySubscriptions();
    this._selectedSeatsUsecase.destroySubscriptions();
  }

  getSeatsIds() {
    this._selectedSeatsUsecase
      .selectedSeatsId$()
      .pipe(
        tap((ids) =>  this.seatsIds = ids),
        tap(() => {console.log('ids-local', this.seatsIds)
          this.getCostBreakdown();
        })
      )
      .subscribe();
  }

  getCostBreakdown() {
    this._getCostBreakdown.execute({
      passengers: this.seatsIds.map((id) => {
        return { seatId: id };
      }),
      userId: null,
    });
    this._getCostBreakdown.constBreadown$().pipe(
      tap((costBreakdown) => {
        if (costBreakdown) {
          this.updatePriceDetails(costBreakdown); 
        } else {
          console.error('No cost breakdown found in state');
        }
      })
    ).subscribe()
  }
  updatePriceDetails(costBreakdown: ICostBreakdown) {
    this.priceDetails = [
      { label: 'Ticket Price', amount: costBreakdown.ticketPrice },
      { label: 'Airport Tax', amount: costBreakdown.airportTax },
      { label: 'Booking Fee', amount: costBreakdown.bookingFee },
      { label: 'Fuel Insurance', amount: costBreakdown.fuelInsurance },
      { label: 'Additional Charges', amount: costBreakdown.additionalCharges },
      { label: 'Discount', amount: costBreakdown.discount },
    ];
    this.totalPrice = costBreakdown.totalAmount;
  }
}
