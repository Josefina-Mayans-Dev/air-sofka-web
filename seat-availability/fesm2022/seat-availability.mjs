import * as i0 from '@angular/core';
import { Injectable, inject, output, Component, Input } from '@angular/core';
import { interval, BehaviorSubject, Subscription, tap, map, catchError, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import { Router } from '@angular/router';
import { GetFlightsSelectedUseCase } from 'flight';
import { DefaultLayoutComponent } from 'shared';

class SeatMapService {
    http;
    /* private readonly API_URL = '/api/flights'; */
    API_URL = 'assets/seat-map.json';
    REFRESH_INTERVAL = 10000; // 10 seconds
    constructor(http) {
        this.http = http;
    }
    getSeatMap(flightId) {
        /*  return this.http.get<ISeat[]>(`${this.API_URL}/${flightId}/seats`); */
        return this.http.get(`${this.API_URL}`);
    }
    // Optional: Polling method if you want periodic updates
    getSeatMapWithPolling(flightId) {
        return interval(this.REFRESH_INTERVAL).pipe(switchMap(() => this.getSeatMap(flightId)));
    }
    selectSeat(flightId, seatId) {
        return this.http.post(
        /* `${this.API_URL}/${flightId}/seats/${seatId}/select`,
        {} */
        `${this.API_URL}`, {});
    }
    unselectSeat(flightId, seatId) {
        return this.http.post(
        /*  `${this.API_URL}/${flightId}/seats/${seatId}/unselect`,
         {} */
        `${this.API_URL}`, {});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class StateFactory {
    state(subject$) {
        return {
            $: () => subject$.asObservable(),
            snapshot: () => this.immutabilize(subject$.getValue()),
            set: (value) => subject$.next(this.immutabilize(value))
        };
    }
    immutabilize(value) {
        return JSON.parse(JSON.stringify(value));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class SeatMapState {
    _factory = inject(StateFactory);
    //#region Subjects
    seatMap$ = new BehaviorSubject({
        flightId: '',
        seats: [],
        selectedSeats: []
    });
    //definir error para validacion
    //#endregion
    store() {
        return {
            seatMap: this._factory.state(this.seatMap$)
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class SeatsState {
    _factory = inject(StateFactory);
    //#region Subjects
    seats$ = new BehaviorSubject([]);
    selectedSeats$ = new BehaviorSubject([]);
    selectedSeatsId$ = new BehaviorSubject([]);
    //#endregion
    store() {
        return {
            seats: this._factory.state(this.seats$),
            selectedSeats: this._factory.state(this.selectedSeats$),
            selectedSeatsId: this._factory.state(this.selectedSeatsId$)
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatsState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatsState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatsState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class State {
    _seatMap = inject(SeatMapState);
    _seats = inject(SeatsState);
    get seatMap() {
        return this._seatMap.store();
    }
    get seats() {
        return this._seats.store();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class GetSeatsUsecase {
    _service = inject(SeatMapService);
    _state = inject(State);
    subscriptions;
    errorSubject = new BehaviorSubject(null);
    //#region Observables
    seats$() {
        return this._state.seats.seats.$();
    }
    selectedSeats$() {
        return this._state.seats.selectedSeats.$();
    }
    error$() {
        return this.errorSubject.asObservable();
    }
    //#endregion
    //#region Public Methods
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
        this.errorSubject.complete();
    }
    execute(flightId) {
        this.errorSubject.next(null);
        this.subscriptions.add(this._service.getSeatMap(flightId)
            .pipe(tap({
            next: (seats) => {
                this._state.seats.seats.set(seats);
            },
            error: (error) => {
                this.errorSubject.next(error.message || 'Failed to fetch seats');
            }
        }))
            .subscribe());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetSeatsUsecase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetSeatsUsecase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetSeatsUsecase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

var SeatClass;
(function (SeatClass) {
    SeatClass["FIRST"] = "FIRST";
    SeatClass["BUSINESS"] = "BUSINESS";
    SeatClass["ECONOMY"] = "ECONOMY";
})(SeatClass || (SeatClass = {}));
var SeatStatus;
(function (SeatStatus) {
    SeatStatus["OCCUPIED"] = "OCCUPIED";
    SeatStatus["AVAILABLE"] = "AVAILABLE";
    SeatStatus["SELECTED"] = "SELECTED";
})(SeatStatus || (SeatStatus = {}));

class SeatService {
    http;
    apiUrl = "http://localhost:8080/seats";
    constructor(http) {
        this.http = http;
    }
    getFlightSeats(flightId) {
        return this.http.get(`${this.apiUrl}/${flightId}`).pipe(map(seats => this.transformSeatsToRows(seats)), catchError(this.handleError));
    }
    bookSeats(flightId, seatIds) {
        const request = {
            flightId,
            seatIds
        };
        return this.http.put(`${this.apiUrl}/book`, request).pipe(catchError(this.handleError));
    }
    transformSeatsToRows(seats) {
        // Group seats by row
        const groupedSeats = seats.reduce((acc, seat) => {
            if (!acc[seat.row]) {
                acc[seat.row] = [];
            }
            acc[seat.row].push(seat);
            return acc;
        }, {});
        // Convert to array and sort seats within each row by column
        return Object.entries(groupedSeats)
            .map(([rowNum, seats]) => ({
            row: parseInt(rowNum),
            seats: seats.sort((a, b) => a.column.localeCompare(b.column))
        }))
            .sort((a, b) => a.row - b.row);
    }
    handleError(error) {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class SeatMapComponent {
    seatService;
    flightId;
    seatMap = [];
    selectedSeats = [];
    selectedSeatsId = [];
    loading = false;
    error = null;
    SeatStatus = SeatStatus;
    onChoseSeat = output();
    constructor(seatService) {
        this.seatService = seatService;
    }
    ngOnInit() {
        this.loadSeats();
    }
    loadSeats() {
        this.loading = true;
        this.error = null;
        this.seatService.getFlightSeats(this.flightId).subscribe({
            next: (seatMap) => {
                this.seatMap = seatMap;
                this.loading = false;
            },
            error: (error) => {
                this.error = 'Failed to load seats. Please try again.';
                this.loading = false;
                console.error('Error loading seats:', error);
            }
        });
    }
    toggleSeatSelection(seat) {
        if (seat.status === SeatStatus.OCCUPIED)
            return;
        const index = this.selectedSeats.indexOf(seat.number);
        if (index === -1) {
            this.selectedSeats.push(seat.number);
            this.selectedSeatsId.push(seat.id);
            seat.status = SeatStatus.SELECTED;
        }
        else {
            this.selectedSeats.splice(index, 1);
            this.selectedSeatsId.splice(index, 1);
            seat.status = SeatStatus.AVAILABLE;
        }
    }
    getSeatClasses(seat) {
        return {
            'seat': true,
            'seat--occupied': seat.status === SeatStatus.OCCUPIED,
            'seat--selected': seat.status === SeatStatus.SELECTED,
            'seat--first': seat.type === SeatClass.FIRST,
            'seat--business': seat.type === SeatClass.BUSINESS,
            'seat--economy': seat.type === SeatClass.ECONOMY
        };
    }
    getTotalPrice() {
        return this.seatMap
            .flatMap(row => row.seats)
            .filter(seat => this.selectedSeats.includes(seat.number))
            .reduce((total, seat) => total + seat.price, 0);
    }
    bookSeats() {
        if (!this.selectedSeats.length)
            return;
        this.loading = true;
        this.error = null;
        this.onChoseSeat.emit(this.selectedSeatsId);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapComponent, deps: [{ token: SeatService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: SeatMapComponent, isStandalone: true, selector: "lib-seat-map", inputs: { flightId: "flightId" }, outputs: { onChoseSeat: "onChoseSeat" }, ngImport: i0, template: "<div class=\"seat-map-container\">\n    <div class=\"seat-map-header\">\n      <h2>Select Seats</h2>\n      <div class=\"aircraft-info\">\n        <i class=\"fas fa-plane\"></i>\n        <span>Boeing 737/3</span>\n      </div>\n    </div>\n  \n    <div class=\"seat-map-scroll\">\n      <div class=\"seat-map-grid\">\n        @for (row of seatMap; track row.row) {\n        <div class=\"seat-row\" >\n          <!-- Left side seats -->\n          <div class=\"seat-group\">\n            @for (seat of row.seats.slice(0, 3); track seat.id) {\n            <button\n              [class]=\"getSeatClasses(seat)\"\n              [disabled]=\"seat.status === SeatStatus.OCCUPIED\"\n              (click)=\"toggleSeatSelection(seat)\"\n            >\n              {{ seat.number }}\n            </button>\n          }\n          </div>\n          \n          <!-- Aisle -->\n          <div class=\"aisle\"></div>\n          \n          <!-- Right side seats -->\n          <div class=\"seat-group\">\n            @for (seat of row.seats.slice(3); track seat.id) {\n            <button\n              [class]=\"getSeatClasses(seat)\"\n              [disabled]=\"seat.status === SeatStatus.OCCUPIED\"\n              (click)=\"toggleSeatSelection(seat)\"\n            >\n              {{ seat.number }}\n            </button>\n          }\n          </div>\n        </div>\n      }\n      </div>\n    </div>\n  \n    <div class=\"booking-info\">\n      <div class=\"selection-info\">\n        <p>Selected: {{ selectedSeats.length ? selectedSeats.join(', ') : 'None' }}</p>\n        <p>Total: ${{ getTotalPrice().toFixed(2) }} USD</p>\n      </div>\n      <button\n        class=\"book-button\"\n        [disabled]=\"selectedSeats.length === 0\"\n        (click)=\"bookSeats()\"\n      >\n        Book Selected Seats\n      </button>\n    </div>\n  \n    <div class=\"seat-legend\">\n      <div class=\"legend-item\">\n        <div class=\"legend-box\"></div>\n        <span>Available</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--occupied\"></div>\n        <span>Occupied</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--first\"></div>\n        <span>First Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--business\"></div>\n        <span>Business Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--economy\"></div>\n        <span>Economy Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--selected\"></div>\n        <span>Selected</span>\n      </div>\n    </div>\n  </div>\n  ", styles: [".seat-map-container{max-width:800px;margin:0 auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a}.seat-map-header{text-align:center;margin-bottom:20px}.seat-map-header h2{font-size:24px;margin-bottom:8px}.aircraft-info{display:flex;align-items:center;justify-content:center;gap:8px}.seat-map-scroll{max-height:600px;overflow-y:auto;margin-bottom:20px}.seat-map-grid{display:flex;flex-direction:column;gap:8px;padding:16px}.seat-row{display:flex;justify-content:center;gap:24px}.seat-group{display:flex;gap:4px}.seat{width:32px;height:32px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;transition:all .2s}.seat:hover:not(:disabled){background:#e6e6e6}.seat--occupied{background:#ccc;cursor:not-allowed}.seat--selected{background:#98bcf5;color:#fff;border-color:#12245f;border-width:3px}.seat--xl{background:#fbcfe8}.seat--xl:hover:not(:disabled){background:#f9a8d4}.seat:disabled{cursor:not-allowed}.seat--first{background-color:gold}.seat--first:hover:not(:disabled){background-color:#ffed4a}.seat--business{background-color:#89f189}.seat--business:hover:not(:disabled){background-color:#cbd5e0}.seat--economy{background-color:#fff}.seat--economy:hover:not(:disabled){background-color:#f7fafc}.booking-info{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #e5e7eb}.book-button{padding:8px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer}.book-button:disabled{background:#9ca3af;cursor:not-allowed}.book-button:hover:not(:disabled){background:#2563eb}.seat-legend{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:20px}.legend-item{display:flex;align-items:center;gap:8px}.legend-box{width:16px;height:16px;border:1px solid #ccc;border-radius:4px}.legend-box--occupied{background:#ccc}.legend-box--first{background:gold}.legend-box--business{background:#89f189}.legend-box--economy{background:#fbcfe8}.legend-box--selected{background:#98bcf5}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-seat-map', template: "<div class=\"seat-map-container\">\n    <div class=\"seat-map-header\">\n      <h2>Select Seats</h2>\n      <div class=\"aircraft-info\">\n        <i class=\"fas fa-plane\"></i>\n        <span>Boeing 737/3</span>\n      </div>\n    </div>\n  \n    <div class=\"seat-map-scroll\">\n      <div class=\"seat-map-grid\">\n        @for (row of seatMap; track row.row) {\n        <div class=\"seat-row\" >\n          <!-- Left side seats -->\n          <div class=\"seat-group\">\n            @for (seat of row.seats.slice(0, 3); track seat.id) {\n            <button\n              [class]=\"getSeatClasses(seat)\"\n              [disabled]=\"seat.status === SeatStatus.OCCUPIED\"\n              (click)=\"toggleSeatSelection(seat)\"\n            >\n              {{ seat.number }}\n            </button>\n          }\n          </div>\n          \n          <!-- Aisle -->\n          <div class=\"aisle\"></div>\n          \n          <!-- Right side seats -->\n          <div class=\"seat-group\">\n            @for (seat of row.seats.slice(3); track seat.id) {\n            <button\n              [class]=\"getSeatClasses(seat)\"\n              [disabled]=\"seat.status === SeatStatus.OCCUPIED\"\n              (click)=\"toggleSeatSelection(seat)\"\n            >\n              {{ seat.number }}\n            </button>\n          }\n          </div>\n        </div>\n      }\n      </div>\n    </div>\n  \n    <div class=\"booking-info\">\n      <div class=\"selection-info\">\n        <p>Selected: {{ selectedSeats.length ? selectedSeats.join(', ') : 'None' }}</p>\n        <p>Total: ${{ getTotalPrice().toFixed(2) }} USD</p>\n      </div>\n      <button\n        class=\"book-button\"\n        [disabled]=\"selectedSeats.length === 0\"\n        (click)=\"bookSeats()\"\n      >\n        Book Selected Seats\n      </button>\n    </div>\n  \n    <div class=\"seat-legend\">\n      <div class=\"legend-item\">\n        <div class=\"legend-box\"></div>\n        <span>Available</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--occupied\"></div>\n        <span>Occupied</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--first\"></div>\n        <span>First Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--business\"></div>\n        <span>Business Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--economy\"></div>\n        <span>Economy Class Seat</span>\n      </div>\n      <div class=\"legend-item\">\n        <div class=\"legend-box legend-box--selected\"></div>\n        <span>Selected</span>\n      </div>\n    </div>\n  </div>\n  ", styles: [".seat-map-container{max-width:800px;margin:0 auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a}.seat-map-header{text-align:center;margin-bottom:20px}.seat-map-header h2{font-size:24px;margin-bottom:8px}.aircraft-info{display:flex;align-items:center;justify-content:center;gap:8px}.seat-map-scroll{max-height:600px;overflow-y:auto;margin-bottom:20px}.seat-map-grid{display:flex;flex-direction:column;gap:8px;padding:16px}.seat-row{display:flex;justify-content:center;gap:24px}.seat-group{display:flex;gap:4px}.seat{width:32px;height:32px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;transition:all .2s}.seat:hover:not(:disabled){background:#e6e6e6}.seat--occupied{background:#ccc;cursor:not-allowed}.seat--selected{background:#98bcf5;color:#fff;border-color:#12245f;border-width:3px}.seat--xl{background:#fbcfe8}.seat--xl:hover:not(:disabled){background:#f9a8d4}.seat:disabled{cursor:not-allowed}.seat--first{background-color:gold}.seat--first:hover:not(:disabled){background-color:#ffed4a}.seat--business{background-color:#89f189}.seat--business:hover:not(:disabled){background-color:#cbd5e0}.seat--economy{background-color:#fff}.seat--economy:hover:not(:disabled){background-color:#f7fafc}.booking-info{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid #e5e7eb}.book-button{padding:8px 16px;background:#3b82f6;color:#fff;border:none;border-radius:4px;cursor:pointer}.book-button:disabled{background:#9ca3af;cursor:not-allowed}.book-button:hover:not(:disabled){background:#2563eb}.seat-legend{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:20px}.legend-item{display:flex;align-items:center;gap:8px}.legend-box{width:16px;height:16px;border:1px solid #ccc;border-radius:4px}.legend-box--occupied{background:#ccc}.legend-box--first{background:gold}.legend-box--business{background:#89f189}.legend-box--economy{background:#fbcfe8}.legend-box--selected{background:#98bcf5}\n"] }]
        }], ctorParameters: () => [{ type: SeatService }], propDecorators: { flightId: [{
                type: Input
            }] } });

class SelectSeatUseCase {
    _state = inject(State);
    _router = inject(Router);
    subscriptions;
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    selectedSeatsId$() {
        return this._state.seats.selectedSeatsId.$();
    }
    execute(ids) {
        this._state.seats.selectedSeatsId.set(ids);
        this._router.navigate(['/pay']);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SelectSeatUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SelectSeatUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SelectSeatUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class SeatMapContainer {
    _getSeatsUsecase = inject(GetSeatsUsecase);
    _selectedSeatsUsecase = inject(SelectSeatUseCase);
    seat$;
    seats$ = this._getSeatsUsecase.seats$();
    selectedSeats$ = this._getSeatsUsecase.selectedSeats$();
    selectedSeatsId$ = this._selectedSeatsUsecase.selectedSeatsId$();
    error$ = this._getSeatsUsecase.error$();
    _getFlightSelected = inject(GetFlightsSelectedUseCase);
    flight$;
    flightId = '';
    ngOnInit() {
        this._getFlightSelected.initSubscription();
        this.flight$ = this._getFlightSelected.flight$();
        this.flight$.subscribe((flight) => {
            this.flightId = flight.origin.id;
        });
    }
    ngOnDestroy() {
        this._getFlightSelected.destroySubscription();
    }
    loadSeatMap() {
    }
    handleSeatSelection(seatsId) {
        this._selectedSeatsUsecase.execute(seatsId);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapContainer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: SeatMapContainer, isStandalone: true, selector: "app-seat-map-container", ngImport: i0, template: `
  <lib-seat-map [flightId]="flightId"  (onChoseSeat)="handleSeatSelection($event)"></lib-seat-map>
  `, isInline: true, dependencies: [{ kind: "component", type: SeatMapComponent, selector: "lib-seat-map", inputs: ["flightId"], outputs: ["onChoseSeat"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SeatMapContainer, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-seat-map-container',
                    imports: [SeatMapComponent],
                    template: `
  <lib-seat-map [flightId]="flightId"  (onChoseSeat)="handleSeatSelection($event)"></lib-seat-map>
  `
                }]
        }] });

const seatRoutes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: '', component: SeatMapContainer }
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

/*
 * Public API Surface of seat-availability
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GetSeatsUsecase, SeatMapService, SelectSeatUseCase, seatRoutes };
//# sourceMappingURL=seat-availability.mjs.map
