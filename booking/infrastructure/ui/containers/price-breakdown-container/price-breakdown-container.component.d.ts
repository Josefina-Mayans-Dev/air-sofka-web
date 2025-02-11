import { OnDestroy, OnInit } from '@angular/core';
import { PriceDetail } from '../../components/price-breakdown-card/price-breakdown-card.component';
import { SelectSeatUseCase } from 'seat-availability';
import { Observable } from 'rxjs';
import { GetCostBreakdownUsecase } from '../../../../application/cost/get-cost-brackdown.usecase';
import { ICostBreakdown } from '../../../../domain/model/const-brackdown.model';
import * as i0 from "@angular/core";
export declare class PriceBreakdownContainerComponent implements OnInit, OnDestroy {
    readonly _selectedSeatsUsecase: SelectSeatUseCase;
    readonly _getCostBreakdown: GetCostBreakdownUsecase;
    listSeatsIds: Observable<string[]>;
    seatsIds: string[];
    priceDetails: PriceDetail[];
    totalPrice: number;
    currency: string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getSeatsIds(): void;
    getCostBreakdown(): void;
    updatePriceDetails(costBreakdown: ICostBreakdown): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PriceBreakdownContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PriceBreakdownContainerComponent, "lib-price-breakdown-container", never, {}, {}, never, never, true, never>;
}
