import { RouteFlightComponent, DetailFlightComponent, LoadingService, BookingHeaderService, BookingLayoutComponent, DefaultLayoutComponent } from 'shared';
import * as i0 from '@angular/core';
import { input, output, Component, Injectable, inject, EventEmitter, Output, HostListener, Input } from '@angular/core';
import { BehaviorSubject, Subscription, finalize, tap, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class DataCardComponent {
    data = input();
    cardClicked = output();
    onCardClick(item) {
        this.cardClicked.emit(item);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DataCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: DataCardComponent, isStandalone: true, selector: "lib-data-card", inputs: { data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { cardClicked: "cardClicked" }, ngImport: i0, template: "@for (item of data(); track $index) {\n<div class=\"card grid\">\n    <div class=\"card__left col-8\">\n        <div class=\"card__left__content grid\">\n            <div class=\"card__left__flight col-6\">\n                <lib-route-flight [routeData]=\"item.route\"></lib-route-flight>\n            </div>\n            <div class=\"card__left__detail col6\">\n                <lib-detail-flight [detailsData]=\"item.detail\"></lib-detail-flight>\n            </div>\n        </div>\n    </div>\n    <div class=\"card__right col-4\" (click)=\"onCardClick(item)\">\n        <button class=\"card__right__button\">\n            <div class=\"card__right__button__content\">\n                <span class=\"card__right__button__from\">from</span>\n                <span class=\"card__right__button__price\">{{item.price}}\n                    <span class=\"card__right__button__currency\">USD</span>\n                </span>\n            </div>\n\n            <svg width=\"22\" height=\"22\">\n                <use xlink:href=\"assets/svgs/down.svg#down\"></use>\n            </svg>\n        </button>\n    </div>\n</div>\n}", styles: [".card{border:1px solid #cccccc;border-radius:10px;overflow:hidden;margin-top:30px;background:#fff;min-width:930px}.card__left{padding:20px 10px}.card__left__content{height:100%;margin:0 10px;align-items:center}.card__left__flight{padding:0 30px 10px 0;border-right:1px solid #cccccc;margin:0 15px 0 8px;min-width:300px}.card__left__detail{min-width:250px}.card__right{border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid #cccccc}.card__right__button{display:flex;align-items:center;justify-content:space-between;background:none;line-height:3.6rem;font-weight:300;width:100%;height:100%;padding:24px 14px;border:none}.card__right__button__content{flex-grow:1;display:flex;flex-direction:column;align-items:start}.card__right__button__from,.card__right__button__price{line-height:normal;letter-spacing:normal}.card__right__button__from{font-weight:700;font-size:12px}.card__right__button__price{font-family:Lato;font-weight:700;font-size:28px;padding-inline:5px;white-space:nowrap}.card__right__button__currency{font:700 80% Lato}.card__right:hover{cursor:pointer;background-color:#007bff1a;color:#333;box-shadow:0 2px 5px #0000001a;transition:all .2s ease-in-out}\n"], dependencies: [{ kind: "component", type: RouteFlightComponent, selector: "lib-route-flight", inputs: ["routeData"] }, { kind: "component", type: DetailFlightComponent, selector: "lib-detail-flight", inputs: ["detailsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DataCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-data-card', imports: [RouteFlightComponent, DetailFlightComponent], template: "@for (item of data(); track $index) {\n<div class=\"card grid\">\n    <div class=\"card__left col-8\">\n        <div class=\"card__left__content grid\">\n            <div class=\"card__left__flight col-6\">\n                <lib-route-flight [routeData]=\"item.route\"></lib-route-flight>\n            </div>\n            <div class=\"card__left__detail col6\">\n                <lib-detail-flight [detailsData]=\"item.detail\"></lib-detail-flight>\n            </div>\n        </div>\n    </div>\n    <div class=\"card__right col-4\" (click)=\"onCardClick(item)\">\n        <button class=\"card__right__button\">\n            <div class=\"card__right__button__content\">\n                <span class=\"card__right__button__from\">from</span>\n                <span class=\"card__right__button__price\">{{item.price}}\n                    <span class=\"card__right__button__currency\">USD</span>\n                </span>\n            </div>\n\n            <svg width=\"22\" height=\"22\">\n                <use xlink:href=\"assets/svgs/down.svg#down\"></use>\n            </svg>\n        </button>\n    </div>\n</div>\n}", styles: [".card{border:1px solid #cccccc;border-radius:10px;overflow:hidden;margin-top:30px;background:#fff;min-width:930px}.card__left{padding:20px 10px}.card__left__content{height:100%;margin:0 10px;align-items:center}.card__left__flight{padding:0 30px 10px 0;border-right:1px solid #cccccc;margin:0 15px 0 8px;min-width:300px}.card__left__detail{min-width:250px}.card__right{border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid #cccccc}.card__right__button{display:flex;align-items:center;justify-content:space-between;background:none;line-height:3.6rem;font-weight:300;width:100%;height:100%;padding:24px 14px;border:none}.card__right__button__content{flex-grow:1;display:flex;flex-direction:column;align-items:start}.card__right__button__from,.card__right__button__price{line-height:normal;letter-spacing:normal}.card__right__button__from{font-weight:700;font-size:12px}.card__right__button__price{font-family:Lato;font-weight:700;font-size:28px;padding-inline:5px;white-space:nowrap}.card__right__button__currency{font:700 80% Lato}.card__right:hover{cursor:pointer;background-color:#007bff1a;color:#333;box-shadow:0 2px 5px #0000001a;transition:all .2s ease-in-out}\n"] }]
        }] });

class StateFactory {
    state(subject$) {
        return {
            $: () => subject$.asObservable(),
            snapshot: () => this.inmutabilize(subject$.getValue()),
            set: (value) => subject$.next(this.inmutabilize(value)),
        };
    }
    inmutabilize(value) {
        return JSON.parse(JSON.stringify(value));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: StateFactory, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FlightsState {
    _factory = inject(StateFactory);
    _flights$ = new BehaviorSubject([]);
    store() {
        return this._factory.state(this._flights$);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FlightsSelectedState {
    _factory = inject(StateFactory);
    _flightSelected$ = new BehaviorSubject(null);
    store() {
        return this._factory.state(this._flightSelected$);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsSelectedState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsSelectedState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsSelectedState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class State {
    _flights = inject(FlightsState);
    _flightsSelected = inject(FlightsSelectedState);
    get flights() {
        return this._flights.store();
    }
    get flightsSelected() {
        return this._flightsSelected.store();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: State, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class GetFlightsService {
    http = inject(HttpClient);
    baseUrl = 'http://localhost:8080/flights';
    get(filters) {
        return this.http.get(`http://localhost:8080/flights`);
    }
    getFilter(filters) {
        let params = new HttpParams();
        if (filters.origin) {
            params = params.set('origin', filters.origin);
        }
        if (filters.destination) {
            params = params.set('destination', filters.destination);
        }
        if (filters.departureDate) {
            params = params.set('departureDate', filters.departureDate);
        }
        if (filters.returnDate) {
            params = params.set('returnDate', filters.returnDate);
        }
        if (filters.tripType) {
            params = params.set('tripType', filters.tripType);
        }
        if (filters.adults) {
            params = params.set('adults', filters.adults.toString());
        }
        if (filters.payWithMiles !== undefined) {
            params = params.set('payWithMiles', filters.payWithMiles.toString());
        }
        if (filters.promoCode) {
            params = params.set('promoCode', filters.promoCode);
        }
        return this.http.get(this.baseUrl, { params: params });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class GetFlightsUseCase {
    _service = inject(GetFlightsService);
    _state = inject(State);
    _loading = inject(LoadingService);
    router = inject(Router);
    subscriptions;
    flights$() {
        return this._state.flights.$();
    }
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    execute(filters) {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .get(filters)
            .pipe(finalize(() => this._loading.setLoading(false)))
            .pipe(tap((flights) => {
            this._state.flights.set(flights);
            this._state.flightsSelected.set({ filters: filters });
            this.router.navigate(['/search']);
        }))
            .subscribe({}));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class FlightComponent {
    router = inject(Router);
    bookingHeaderService = inject(BookingHeaderService);
    _useCase = inject(GetFlightsUseCase);
    _state = inject(State);
    selectIda = true;
    flights$;
    subscription;
    list = [];
    returnList = [];
    constructor() {
        this.bookingHeaderService.sendBookingHeader({
            title: 'Flight',
            subtitle: 'Book your flight'
        });
        this.flights$ = this._useCase.flights$();
        this.subscription = this.flights$.subscribe(flights => {
            this.list = flights.map(flight => this.mapFlightToDataCard(flight));
            this.returnList = flights.map(flight => this.mapFlightToDataCard(this.invertFlight(flight)));
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    mapFlightToDataCard(flight) {
        const departureTime = new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const arrivalTime = new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const departureDate = new Date(flight.departure);
        const arrivalDate = new Date(flight.arrival);
        // Calcula la duración en minutos
        let durationMs = arrivalDate.getTime() - departureDate.getTime();
        let durationMinutes = Math.floor(durationMs / (60 * 1000));
        // Calcula las horas y minutos
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
        const duration = `${hours}h ${minutes}m`;
        const diffInDays = Math.floor((arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));
        const days = `+${diffInDays}`;
        return {
            route: {
                departureTime: departureTime,
                departureAirportCode: flight.origin,
                arrivalTime: arrivalTime,
                arrivalAirportCode: flight.destination,
                stopAirportCode: 'Direct',
                days: days
            },
            detail: {
                detail: [`Duracion: ${duration}`, `Operado por ITA Airways, Air Europa, Copa Airlines`],
                ref: 'See details'
            },
            price: flight.price,
            idPlane: flight.idPlane,
            id: flight.id
        };
    }
    invertFlight(flight) {
        return {
            id: flight.id,
            origin: flight.destination,
            destination: flight.origin,
            departure: flight.arrival,
            arrival: flight.departure,
            price: flight.price,
            idPlane: flight.idPlane
        };
    }
    onSelectedFlightIda(data) {
        this.selectIda = false;
        this._state.flightsSelected.$().pipe(take(1)).subscribe(currentState => {
            currentState.filters.adults;
            const updatedState = {
                ...currentState,
                origin: {
                    id: data.id,
                    origin: data.route.departureAirportCode,
                    destination: data.route.arrivalAirportCode,
                    departure: data.route.departureTime,
                    arrival: data.route.arrivalTime,
                    price: data.price,
                    idPlane: data.idPlane
                }
            };
            this._state.flightsSelected.set(updatedState);
        });
    }
    onSelectedFlightVuelta(data) {
        this._state.flightsSelected.$().pipe(take(1)).subscribe(currentState => {
            const updatedState = {
                ...currentState,
                destination: {
                    id: data.id,
                    origin: data.route.departureAirportCode,
                    destination: data.route.arrivalAirportCode,
                    departure: data.route.departureTime,
                    arrival: data.route.arrivalTime,
                    price: data.price,
                    idPlane: data.idPlane
                }
            };
            this._state.flightsSelected.set(updatedState);
            this.router.navigate(['/passenger']);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FlightComponent, isStandalone: true, selector: "lib-flight", ngImport: i0, template: "@if(selectIda){\n<h1>Vuelos Ida</h1>\n<lib-data-card [data]=\"list\" (cardClicked)=\"onSelectedFlightIda($event)\" />\n}\n\n@if(!selectIda){\n<h1>Vuelos Regreso</h1>\n<lib-data-card [data]=\"returnList\" (cardClicked)=\"onSelectedFlightVuelta($event)\" />\n}", dependencies: [{ kind: "component", type: DataCardComponent, selector: "lib-data-card", inputs: ["data"], outputs: ["cardClicked"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight', imports: [DataCardComponent, RouterOutlet], template: "@if(selectIda){\n<h1>Vuelos Ida</h1>\n<lib-data-card [data]=\"list\" (cardClicked)=\"onSelectedFlightIda($event)\" />\n}\n\n@if(!selectIda){\n<h1>Vuelos Regreso</h1>\n<lib-data-card [data]=\"returnList\" (cardClicked)=\"onSelectedFlightVuelta($event)\" />\n}" }]
        }], ctorParameters: () => [] });

class CarouselComponent {
    images = [
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        './assets/img/carousel1.png',
        '../../../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
        '../../assets/img/carousel1.png',
        '../assets/img/carousel2.png',
    ];
    currentIndex = 0;
    translateValue = 0;
    constructor() { }
    ngOnInit() {
    }
    prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
        this.translateValue = -this.currentIndex * 100;
    }
    nextSlide() {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
        this.translateValue = -this.currentIndex * 100;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: CarouselComponent, isStandalone: true, selector: "lib-carousel", ngImport: i0, template: "<div class=\"carousel-container\">\n    <div class=\"carousel-slide\" [style.transform]=\"'translateX(' + translateValue + '%)'\">\n        <img *ngFor=\"let image of images\" [src]=\"image\" alt=\"Imagen del carrusel\">\n        <img src=\"../../assets/img/carousel1.png\" alt=\"Imagen del carrusel4\">\n    </div>\n\n\n    <button class=\"carousel-button prev\" (click)=\"prevSlide()\">\u2039</button>\n    <button class=\"carousel-button next\" (click)=\"nextSlide()\">\u203A</button>\n</div>", styles: [".carousel-container{position:relative;width:100%;height:600px;overflow:hidden}.carousel-slide{display:flex;transition:transform .5s ease-in-out}.carousel-slide img{width:100%;height:auto;flex-shrink:0}.carousel-button{position:absolute;top:50%;transform:translateY(-50%);background-color:#00000080;color:#fff;border:none;padding:10px 20px;cursor:pointer;font-size:20px}.carousel-button.prev{left:10px}.carousel-button.next{right:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-carousel', imports: [CommonModule], template: "<div class=\"carousel-container\">\n    <div class=\"carousel-slide\" [style.transform]=\"'translateX(' + translateValue + '%)'\">\n        <img *ngFor=\"let image of images\" [src]=\"image\" alt=\"Imagen del carrusel\">\n        <img src=\"../../assets/img/carousel1.png\" alt=\"Imagen del carrusel4\">\n    </div>\n\n\n    <button class=\"carousel-button prev\" (click)=\"prevSlide()\">\u2039</button>\n    <button class=\"carousel-button next\" (click)=\"nextSlide()\">\u203A</button>\n</div>", styles: [".carousel-container{position:relative;width:100%;height:600px;overflow:hidden}.carousel-slide{display:flex;transition:transform .5s ease-in-out}.carousel-slide img{width:100%;height:auto;flex-shrink:0}.carousel-button{position:absolute;top:50%;transform:translateY(-50%);background-color:#00000080;color:#fff;border:none;padding:10px 20px;cursor:pointer;font-size:20px}.carousel-button.prev{left:10px}.carousel-button.next{right:10px}\n"] }]
        }], ctorParameters: () => [] });

class AutocompleteComponent {
    locationSelected = new EventEmitter();
    searchTerm = '';
    showDropdown = false;
    selectedLocation = null;
    locations = [
        { name: 'Baltra- Isla...', code: 'GPS', country: 'Ecuador' },
        { name: 'Quito', code: 'UIO', country: 'Ecuador' },
        { name: 'Manta', code: 'MEC', country: 'Ecuador' },
        { name: 'Guayaquil', code: 'GYE', country: 'Ecuador' }
    ];
    filteredLocations = [];
    ngOnInit() {
        this.filteredLocations = [...this.locations]; // Initialize with all locations
    }
    onSearchTermChange() {
        this.showDropdown = true; // Always show dropdown when typing
        this.filteredLocations = this.locations.filter(location => location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            location.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    selectLocation(location) {
        this.selectedLocation = location;
        this.searchTerm = location.name; // Update the input field
        this.showDropdown = false; // Hide the dropdown
        this.locationSelected.emit(location); // Emit the selected location
    }
    clearSelection() {
        this.selectedLocation = null;
        this.searchTerm = '';
        this.filteredLocations = [...this.locations];
        this.showDropdown = false;
    }
    onFocus() {
        this.showDropdown = true;
    }
    onBlur() {
        setTimeout(() => {
            this.showDropdown = false;
        }, 200);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: AutocompleteComponent, isStandalone: true, selector: "lib-autocomplete", outputs: { locationSelected: "locationSelected" }, ngImport: i0, template: "<div class=\"location-origin\">\n    <label for=\"origin\">Origen</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige origen\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: ["@charset \"UTF-8\";.location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-autocomplete', imports: [CommonModule, FormsModule], template: "<div class=\"location-origin\">\n    <label for=\"origin\">Origen</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige origen\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: ["@charset \"UTF-8\";.location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"] }]
        }], propDecorators: { locationSelected: [{
                type: Output
            }] } });

class DateRangePickerComponent {
    eRef;
    dateRangeSelected = new EventEmitter();
    currentMonth1;
    currentYear1;
    currentMonth2;
    currentYear2;
    calendar1 = [];
    calendar2 = [];
    startDate = null;
    endDate = null;
    showCalendar = false;
    constructor(eRef) {
        this.eRef = eRef;
        const today = new Date();
        this.currentMonth1 = today.getMonth();
        this.currentYear1 = today.getFullYear();
        this.currentMonth2 = today.getMonth() + 1;
        this.currentYear2 = today.getFullYear();
        if (this.currentMonth2 > 11) {
            this.currentMonth2 = 0;
            this.currentYear2 = this.currentYear1 + 1;
        }
        this.generateCalendar(1);
        this.generateCalendar(2);
    }
    ngOnInit() { }
    generateCalendar(calendarNumber) {
        let month = calendarNumber === 1 ? this.currentMonth1 : this.currentMonth2;
        let year = calendarNumber === 1 ? this.currentYear1 : this.currentYear2;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        let calendar = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.push({ day: 0, month: 0, year: 0 });
        }
        for (let day = 1; day <= daysInMonth; day++) {
            calendar.push({ day, month, year });
        }
        if (calendarNumber === 1) {
            this.calendar1 = calendar;
        }
        else {
            this.calendar2 = calendar;
        }
    }
    selectDate(date) {
        if (date.day === 0) {
            return;
        }
        if (!this.startDate) {
            this.startDate = date;
            this.endDate = null;
        }
        else if (!this.endDate) {
            if (this.isDateBefore(date, this.startDate)) {
                this.startDate = date;
            }
            else {
                this.endDate = date;
            }
            this.onSelectedRange();
        }
        else {
            this.startDate = date;
            this.endDate = null;
        }
    }
    isDateBefore(date1, date2) {
        if (date1.year !== date2.year) {
            return date1.year < date2.year;
        }
        if (date1.month !== date2.month) {
            return date1.month < date2.month;
        }
        return date1.day < date2.day;
    }
    isDateSelected(date) {
        if (!date || date.day === 0) {
            return false;
        }
        return ((this.startDate && this.isSameDate(date, this.startDate)) ||
            (this.endDate && this.isSameDate(date, this.endDate))) ?? false;
    }
    isDateInRange(date) {
        if (!this.startDate || !this.endDate || date.day === 0) {
            return false;
        }
        return this.isDateAfter(date, this.startDate) && this.isDateBefore(date, this.endDate);
    }
    isSameDate(date1, date2) {
        return (date1.day === date2.day && date1.month === date2.month && date1.year === date2.year);
    }
    isDateAfter(date1, date2) {
        if (date1.year !== date2.year) {
            return date1.year > date2.year;
        }
        if (date1.month !== date2.month) {
            return date1.month > date2.month;
        }
        return date1.day > date2.day;
    }
    goToPreviousMonth(calendarNumber) {
        if (calendarNumber === 1) {
            this.currentMonth1--;
            if (this.currentMonth1 < 0) {
                this.currentMonth1 = 11;
                this.currentYear1--;
            }
        }
        else {
            this.currentMonth2--;
            if (this.currentMonth2 < 0) {
                this.currentMonth2 = 11;
                this.currentYear2--;
            }
        }
        this.generateCalendar(calendarNumber);
    }
    goToNextMonth(calendarNumber) {
        if (calendarNumber === 1) {
            this.currentMonth1++;
            if (this.currentMonth1 > 11) {
                this.currentMonth1 = 0;
                this.currentYear1++;
            }
        }
        else {
            this.currentMonth2++;
            if (this.currentMonth2 > 11) {
                this.currentMonth2 = 0;
                this.currentYear2++;
            }
        }
        this.generateCalendar(calendarNumber);
    }
    monthName(month) {
        const monthNames = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        return monthNames[month];
    }
    onSelectedRange() {
        this.dateRangeSelected.emit({ start: this.startDate, end: this.endDate });
    }
    toggleCalendar(calendarType) {
        this.showCalendar = !this.showCalendar;
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showCalendar = false;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DateRangePickerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: DateRangePickerComponent, isStandalone: true, selector: "lib-date-range-picker", outputs: { dateRangeSelected: "dateRangeSelected" }, host: { listeners: { "document:click": "clickout($event)" } }, ngImport: i0, template: "<div class=\"date-range-picker\">\n    <div class=\"date-range-picker__date-fields\">\n        <div class=\"date-range-picker__date-field\">\n            <label for=\"departureDate\">Fecha de ida</label>\n            <button class=\"date-range-picker__date-value\" id=\"departureDate\" (click)=\"toggleCalendar('start')\">\n                {{ startDate ? (startDate.day + '/' + startDate.month + '/' + startDate.year) : 'DD/MM/YYYY' }}\n            </button>\n        </div>\n\n        <div class=\"date-range-picker__date-field\">\n            <label for=\"returnDate\">Fecha de vuelta</label>\n            <button class=\"date-range-picker__date-value\" id=\"returnDate\" (click)=\"toggleCalendar('end')\">\n                {{ endDate ? (endDate.day + '/' + endDate.month + '/' + endDate.year) : 'DD/MM/YYYY' }}\n            </button>\n        </div>\n    </div>\n\n    <div class=\"date-range-picker__calendars\" [class.show]=\"showCalendar\">\n\n        <div class=\"date-range-picker__calendar\">\n            <div class=\"date-range-picker__calendar-header\">\n                <button class=\"date-range-picker__calendar-button\" (click)=\"goToPreviousMonth(1)\">\n                    < </button>\n                        <div class=\"date-range-picker__calendar-month-year\">\n                            {{ monthName(currentMonth1) }} {{ currentYear1 }}\n                        </div>\n                        <button class=\"date-range-picker__calendar-button\" (click)=\"goToNextMonth(1)\">\n                            >\n                        </button>\n            </div>\n            <div class=\"date-range-picker__calendar-weekdays\">\n                <div>L</div>\n                <div>M</div>\n                <div>M</div>\n                <div>J</div>\n                <div>V</div>\n                <div>S</div>\n                <div>D</div>\n            </div>\n            <div class=\"date-range-picker__calendar-dates\">\n                <div *ngFor=\"let date of calendar1\" class=\"date-range-picker__calendar-date\"\n                    [class.selected]=\"isDateSelected(date)\" [class.in-range]=\"isDateInRange(date)\"\n                    (click)=\"selectDate(date)\">\n                    {{ date.day === 0 ? '' : date.day }}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"date-range-picker__calendar\">\n            <div class=\"date-range-picker__calendar-header\">\n                <button class=\"date-range-picker__calendar-button\" (click)=\"goToPreviousMonth(2)\">\n                    < </button>\n                        <div class=\"date-range-picker__calendar-month-year\">\n                            {{ monthName(currentMonth2) }} {{ currentYear2 }}\n                        </div>\n                        <button class=\"date-range-picker__calendar-button\" (click)=\"goToNextMonth(2)\">\n                            >\n                        </button>\n            </div>\n            <div class=\"date-range-picker__calendar-weekdays\">\n                <div>L</div>\n                <div>M</div>\n                <div>M</div>\n                <div>J</div>\n                <div>V</div>\n                <div>S</div>\n                <div>D</div>\n            </div>\n            <div class=\"date-range-picker__calendar-dates\">\n                <div *ngFor=\"let date of calendar2\" class=\"date-range-picker__calendar-date\"\n                    [class.selected]=\"isDateSelected(date)\" [class.in-range]=\"isDateInRange(date)\"\n                    (click)=\"selectDate(date)\">\n                    {{ date.day === 0 ? '' : date.day }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".date-range-picker{position:relative;border:1px solid #ccc;border-radius:5px;padding:10px}.date-range-picker__date-fields{display:flex;justify-content:space-between;align-items:center}.date-range-picker__date-field{text-align:center;width:50%;position:relative}.date-range-picker__date-field:not(:last-child):after{content:\"\";position:absolute;top:50%;right:0;transform:translateY(-50%);width:1px;height:50%;background-color:#ccc}.date-range-picker__date-field label{display:block;font-size:.8em;color:#666}.date-range-picker__date-value{background:none;border:none;font-size:1em;color:#007bff}.date-range-picker__date-value::placeholder{color:#aaa}.date-range-picker__calendars{position:absolute;top:100%;left:0;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 5px #0003;z-index:1000;display:none;flex-wrap:wrap}.date-range-picker__calendars.show{display:flex;gap:10px;padding:10px}.date-range-picker__calendar{width:auto;flex-grow:1}.date-range-picker__calendar-header{display:flex;justify-content:space-between;align-items:center;font-weight:700;padding:.5em 0}.date-range-picker__calendar-button{background-color:transparent;border:none;padding:.25em .5em;cursor:pointer;color:#007bff}.date-range-picker__calendar-month-year{text-align:center}.date-range-picker__calendar-weekdays{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;color:#555;font-size:.8em;padding-bottom:.5em;border-bottom:1px solid #eee}.date-range-picker__calendar-dates{display:grid;grid-template-columns:repeat(7,1fr);gap:.25em}.date-range-picker__calendar-date{text-align:center;padding:.5em;border-radius:5px;border:1px solid #eee;background-color:#f9f9f9;cursor:pointer;transition:all .2s ease-in-out;color:#777}.date-range-picker__calendar-date:hover{background-color:#f0f0f0}.date-range-picker__calendar-date.selected{background-color:#a36cda;color:#fff;border:1px solid #663399}.date-range-picker__calendar-date.in-range{background-color:#e9e2ef}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-date-range-picker', imports: [CommonModule], template: "<div class=\"date-range-picker\">\n    <div class=\"date-range-picker__date-fields\">\n        <div class=\"date-range-picker__date-field\">\n            <label for=\"departureDate\">Fecha de ida</label>\n            <button class=\"date-range-picker__date-value\" id=\"departureDate\" (click)=\"toggleCalendar('start')\">\n                {{ startDate ? (startDate.day + '/' + startDate.month + '/' + startDate.year) : 'DD/MM/YYYY' }}\n            </button>\n        </div>\n\n        <div class=\"date-range-picker__date-field\">\n            <label for=\"returnDate\">Fecha de vuelta</label>\n            <button class=\"date-range-picker__date-value\" id=\"returnDate\" (click)=\"toggleCalendar('end')\">\n                {{ endDate ? (endDate.day + '/' + endDate.month + '/' + endDate.year) : 'DD/MM/YYYY' }}\n            </button>\n        </div>\n    </div>\n\n    <div class=\"date-range-picker__calendars\" [class.show]=\"showCalendar\">\n\n        <div class=\"date-range-picker__calendar\">\n            <div class=\"date-range-picker__calendar-header\">\n                <button class=\"date-range-picker__calendar-button\" (click)=\"goToPreviousMonth(1)\">\n                    < </button>\n                        <div class=\"date-range-picker__calendar-month-year\">\n                            {{ monthName(currentMonth1) }} {{ currentYear1 }}\n                        </div>\n                        <button class=\"date-range-picker__calendar-button\" (click)=\"goToNextMonth(1)\">\n                            >\n                        </button>\n            </div>\n            <div class=\"date-range-picker__calendar-weekdays\">\n                <div>L</div>\n                <div>M</div>\n                <div>M</div>\n                <div>J</div>\n                <div>V</div>\n                <div>S</div>\n                <div>D</div>\n            </div>\n            <div class=\"date-range-picker__calendar-dates\">\n                <div *ngFor=\"let date of calendar1\" class=\"date-range-picker__calendar-date\"\n                    [class.selected]=\"isDateSelected(date)\" [class.in-range]=\"isDateInRange(date)\"\n                    (click)=\"selectDate(date)\">\n                    {{ date.day === 0 ? '' : date.day }}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"date-range-picker__calendar\">\n            <div class=\"date-range-picker__calendar-header\">\n                <button class=\"date-range-picker__calendar-button\" (click)=\"goToPreviousMonth(2)\">\n                    < </button>\n                        <div class=\"date-range-picker__calendar-month-year\">\n                            {{ monthName(currentMonth2) }} {{ currentYear2 }}\n                        </div>\n                        <button class=\"date-range-picker__calendar-button\" (click)=\"goToNextMonth(2)\">\n                            >\n                        </button>\n            </div>\n            <div class=\"date-range-picker__calendar-weekdays\">\n                <div>L</div>\n                <div>M</div>\n                <div>M</div>\n                <div>J</div>\n                <div>V</div>\n                <div>S</div>\n                <div>D</div>\n            </div>\n            <div class=\"date-range-picker__calendar-dates\">\n                <div *ngFor=\"let date of calendar2\" class=\"date-range-picker__calendar-date\"\n                    [class.selected]=\"isDateSelected(date)\" [class.in-range]=\"isDateInRange(date)\"\n                    (click)=\"selectDate(date)\">\n                    {{ date.day === 0 ? '' : date.day }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".date-range-picker{position:relative;border:1px solid #ccc;border-radius:5px;padding:10px}.date-range-picker__date-fields{display:flex;justify-content:space-between;align-items:center}.date-range-picker__date-field{text-align:center;width:50%;position:relative}.date-range-picker__date-field:not(:last-child):after{content:\"\";position:absolute;top:50%;right:0;transform:translateY(-50%);width:1px;height:50%;background-color:#ccc}.date-range-picker__date-field label{display:block;font-size:.8em;color:#666}.date-range-picker__date-value{background:none;border:none;font-size:1em;color:#007bff}.date-range-picker__date-value::placeholder{color:#aaa}.date-range-picker__calendars{position:absolute;top:100%;left:0;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 5px #0003;z-index:1000;display:none;flex-wrap:wrap}.date-range-picker__calendars.show{display:flex;gap:10px;padding:10px}.date-range-picker__calendar{width:auto;flex-grow:1}.date-range-picker__calendar-header{display:flex;justify-content:space-between;align-items:center;font-weight:700;padding:.5em 0}.date-range-picker__calendar-button{background-color:transparent;border:none;padding:.25em .5em;cursor:pointer;color:#007bff}.date-range-picker__calendar-month-year{text-align:center}.date-range-picker__calendar-weekdays{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;color:#555;font-size:.8em;padding-bottom:.5em;border-bottom:1px solid #eee}.date-range-picker__calendar-dates{display:grid;grid-template-columns:repeat(7,1fr);gap:.25em}.date-range-picker__calendar-date{text-align:center;padding:.5em;border-radius:5px;border:1px solid #eee;background-color:#f9f9f9;cursor:pointer;transition:all .2s ease-in-out;color:#777}.date-range-picker__calendar-date:hover{background-color:#f0f0f0}.date-range-picker__calendar-date.selected{background-color:#a36cda;color:#fff;border:1px solid #663399}.date-range-picker__calendar-date.in-range{background-color:#e9e2ef}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { dateRangeSelected: [{
                type: Output
            }], clickout: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class DestinationComponent {
    locationSelected = new EventEmitter();
    searchTerm = '';
    showDropdown = false;
    selectedLocation = null;
    locations = [
        { name: 'Madrid', code: 'MAD', country: 'España' },
        { name: 'Barcelona', code: 'BCN', country: 'España' },
        { name: 'Valencia', code: 'VLC', country: 'España' },
        { name: 'Sevilla', code: 'SVQ', country: 'España' },
        { name: 'Málaga', code: 'AGP', country: 'España' },
        { name: 'Bilbao', code: 'BIO', country: 'España' },
        { name: 'Alicante', code: 'ALC', country: 'España' },
        { name: 'Gran Canaria', code: 'LPA', country: 'España' },
        { name: 'Tenerife Norte', code: 'TFN', country: 'España' },
        { name: 'Tenerife Sur', code: 'TFS', country: 'España' },
        { name: 'Palma de Mallorca', code: 'PMI', country: 'España' },
        { name: 'Ibiza', code: 'IBZ', country: 'España' },
        { name: 'Santiago de Compostela', code: 'SCQ', country: 'España' },
        { name: 'La Coruña', code: 'LCG', country: 'España' },
        { name: 'Zaragoza', code: 'ZAZ', country: 'España' },
        { name: 'Santander', code: 'SDR', country: 'España' },
        { name: 'Asturias', code: 'OVD', country: 'España' },
        { name: 'Jerez de la Frontera', code: 'XRY', country: 'España' },
        { name: 'Menorca', code: 'MAH', country: 'España' },
        { name: 'Fuerteventura', code: 'FUE', country: 'España' },
        { name: 'París - Charles de Gaulle', code: 'CDG', country: 'Francia' },
        { name: 'París - Orly', code: 'ORY', country: 'Francia' },
        { name: 'Niza', code: 'NCE', country: 'Francia' },
        { name: 'Lyon', code: 'LYS', country: 'Francia' },
        { name: 'Marsella', code: 'MRS', country: 'Francia' },
        { name: 'Toulouse', code: 'TLS', country: 'Francia' },
        { name: 'Burdeos', code: 'BOD', country: 'Francia' },
        { name: 'Nantes', code: 'NTE', country: 'Francia' },
        { name: 'Estrasburgo', code: 'SXB', country: 'Francia' },
        { name: 'Lille', code: 'LIL', country: 'Francia' },
        { name: 'Londres', code: 'LHR', country: 'Reino Unido' },
        { name: 'Berlín', code: 'BER', country: 'Alemania' },
        { name: 'Roma - Fiumicino', code: 'FCO', country: 'Italia' },
        { name: 'Roma - Ciampino', code: 'CIA', country: 'Italia' },
        { name: 'Milán - Malpensa', code: 'MXP', country: 'Italia' },
        { name: 'Milán - Linate', code: 'LIN', country: 'Italia' },
        { name: 'Venecia - Marco Polo', code: 'VCE', country: 'Italia' },
        { name: 'Bolonia', code: 'BLQ', country: 'Italia' },
        { name: 'Florencia', code: 'FLR', country: 'Italia' },
        { name: 'Nápoles', code: 'NAP', country: 'Italia' },
        { name: 'Turín', code: 'TRN', country: 'Italia' },
        { name: 'Catania', code: 'CTA', country: 'Italia' },
        { name: 'Palermo', code: 'PMO', country: 'Italia' },
        { name: 'Bari', code: 'BRI', country: 'Italia' },
        { name: 'Verona', code: 'VRN', country: 'Italia' },
        { name: 'Génova', code: 'GOA', country: 'Italia' },
        { name: 'Pisa', code: 'PSA', country: 'Italia' },
        { name: 'Trieste', code: 'TRS', country: 'Italia' },
        { name: 'Cagliari', code: 'CAG', country: 'Italia' },
        { name: 'Lamezia Terme', code: 'SUF', country: 'Italia' },
        { name: 'Ancona', code: 'AOI', country: 'Italia' },
        { name: 'Perugia', code: 'PEG', country: 'Italia' },
        { name: 'Ámsterdam', code: 'AMS', country: 'Países Bajos' },
        { name: 'Lisboa', code: 'LIS', country: 'Portugal' },
        { name: 'Viena', code: 'VIE', country: 'Austria' },
        { name: 'Bruselas', code: 'BRU', country: 'Bélgica' },
        { name: 'Dublín', code: 'DUB', country: 'Irlanda' },
        { name: 'Praga', code: 'PRG', country: 'República Checa' },
        { name: 'Atenas', code: 'ATH', country: 'Grecia' },
        { name: 'Estocolmo', code: 'ARN', country: 'Suecia' },
        { name: 'Oslo', code: 'OSL', country: 'Noruega' },
        { name: 'Copenhague', code: 'CPH', country: 'Dinamarca' },
        { name: 'Helsinki', code: 'HEL', country: 'Finlandia' },
        { name: 'Budapest', code: 'BUD', country: 'Hungría' },
        { name: 'Varsovia', code: 'WAW', country: 'Polonia' },
        { name: 'Moscú', code: 'SVO', country: 'Rusia' },
        { name: 'Zúrich', code: 'ZRH', country: 'Suiza' },
    ];
    filteredLocations = [];
    ngOnInit() {
        this.filteredLocations = [...this.locations];
    }
    onSearchTermChange() {
        this.showDropdown = true;
        this.filteredLocations = this.locations.filter(location => location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            location.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    selectLocation(location) {
        this.selectedLocation = location;
        this.searchTerm = location.name;
        this.showDropdown = false;
        this.locationSelected.emit(location);
    }
    clearSelection() {
        this.selectedLocation = null;
        this.searchTerm = '';
        this.filteredLocations = [...this.locations];
        this.showDropdown = false;
    }
    onFocus() {
        this.showDropdown = true;
    }
    onBlur() {
        setTimeout(() => {
            this.showDropdown = false;
        }, 200);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DestinationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: DestinationComponent, isStandalone: true, selector: "lib-destination", outputs: { locationSelected: "locationSelected" }, ngImport: i0, template: "<div class=\"location-origin\">\n    <label for=\"origin\">Destination</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige Destination\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: [".location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: DestinationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-destination', imports: [CommonModule, FormsModule], template: "<div class=\"location-origin\">\n    <label for=\"origin\">Destination</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige Destination\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: [".location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"] }]
        }], propDecorators: { locationSelected: [{
                type: Output
            }] } });

class OriginComponent {
    locationSelected = new EventEmitter();
    searchTerm = '';
    showDropdown = false;
    selectedLocation = null;
    locations = [
        // Chile
        { name: 'Iquique', code: 'IQQ', country: 'Chile' },
        { name: 'Santiago', code: 'SCL', country: 'Chile' },
        { name: 'Concepción', code: 'CCP', country: 'Chile' },
        { name: 'Antofagasta', code: 'ANF', country: 'Chile' },
        { name: 'Puerto Montt', code: 'PMC', country: 'Chile' },
        // Colombia
        { name: 'Bogotá', code: 'BOG', country: 'Colombia' },
        { name: 'Medellín', code: 'MDE', country: 'Colombia' },
        { name: 'Cali', code: 'CLO', country: 'Colombia' },
        { name: 'Cartagena', code: 'CTG', country: 'Colombia' },
        { name: 'Barranquilla', code: 'BAQ', country: 'Colombia' },
        { name: 'Pereira', code: 'PEI', country: 'Colombia' },
        { name: 'Santa Marta', code: 'SMR', country: 'Colombia' },
        { name: 'Cúcuta', code: 'CUC', country: 'Colombia' },
        { name: 'Bucaramanga', code: 'BGA', country: 'Colombia' },
        { name: 'San Andrés', code: 'ADZ', country: 'Colombia' },
        { name: 'Villavicencio', code: 'VVC', country: 'Colombia' },
        { name: 'Armenia', code: 'AXM', country: 'Colombia' },
        { name: 'Manizales', code: 'MZL', country: 'Colombia' },
        { name: 'Neiva', code: 'NVA', country: 'Colombia' },
        { name: 'Popayán', code: 'PPN', country: 'Colombia' },
        { name: 'Riohacha', code: 'RCH', country: 'Colombia' },
        { name: 'Montería', code: 'MTR', country: 'Colombia' },
        { name: 'Valledupar', code: 'VUP', country: 'Colombia' },
        { name: 'Leticia', code: 'LET', country: 'Colombia' },
        { name: 'Ipiales', code: 'IPI', country: 'Colombia' },
        { name: 'Quibdó', code: 'UIB', country: 'Colombia' },
        { name: 'Tumaco', code: 'TCO', country: 'Colombia' },
        { name: 'Yopal', code: 'EYP', country: 'Colombia' },
        { name: 'Corozal', code: 'CZU', country: 'Colombia' },
        { name: 'Mitú', code: 'MVP', country: 'Colombia' },
        { name: 'Puerto Asís', code: 'PUU', country: 'Colombia' },
        { name: 'Florencia', code: 'FLA', country: 'Colombia' },
        // Ecuador
        { name: 'Quito', code: 'UIO', country: 'Ecuador' },
        { name: 'Guayaquil', code: 'GYE', country: 'Ecuador' },
        { name: 'Cuenca', code: 'CUE', country: 'Ecuador' },
        { name: 'Manta', code: 'MEC', country: 'Ecuador' },
        { name: 'Loja', code: 'LOH', country: 'Ecuador' },
        { name: 'Esmeraldas', code: 'ESM', country: 'Ecuador' },
        { name: 'Galápagos (Baltra)', code: 'GPS', country: 'Ecuador' },
        { name: 'Galápagos (San Cristóbal)', code: 'SCY', country: 'Ecuador' },
        { name: 'Tena', code: 'TNW', country: 'Ecuador' },
        { name: 'Latacunga', code: 'LTX', country: 'Ecuador' },
        { name: 'Santa Rosa', code: 'ETR', country: 'Ecuador' },
        // Perú
        { name: 'Lima', code: 'LIM', country: 'Perú' },
        { name: 'Cusco', code: 'CUZ', country: 'Perú' },
        { name: 'Arequipa', code: 'AQP', country: 'Perú' },
        { name: 'Iquitos', code: 'IQT', country: 'Perú' },
        { name: 'Trujillo', code: 'TRU', country: 'Perú' },
        // Brasil
        { name: 'Río de Janeiro', code: 'GIG', country: 'Brasil' },
        { name: 'São Paulo', code: 'GRU', country: 'Brasil' },
        { name: 'Brasilia', code: 'BSB', country: 'Brasil' },
        { name: 'Salvador', code: 'SSA', country: 'Brasil' },
        { name: 'Fortaleza', code: 'FOR', country: 'Brasil' },
        { name: 'Manaus', code: 'MAO', country: 'Brasil' },
        // Argentina
        { name: 'Buenos Aires', code: 'EZE', country: 'Argentina' },
        { name: 'Córdoba', code: 'COR', country: 'Argentina' },
        { name: 'Mendoza', code: 'MDZ', country: 'Argentina' },
        { name: 'Rosario', code: 'ROS', country: 'Argentina' },
        // Uruguay
        { name: 'Montevideo', code: 'MVD', country: 'Uruguay' },
        { name: 'Punta del Este', code: 'PDP', country: 'Uruguay' },
        { name: 'Colonia del Sacramento', code: 'CYR', country: 'Uruguay' },
        { name: 'Salto', code: 'STY', country: 'Uruguay' },
        { name: 'Rivera', code: 'RVY', country: 'Uruguay' },
        { name: 'Melo', code: 'MLZ', country: 'Uruguay' },
        { name: 'Paysandú', code: 'PDU', country: 'Uruguay' },
        // Paraguay
        { name: 'Asunción', code: 'ASU', country: 'Paraguay' },
        { name: 'Ciudad del Este', code: 'AGT', country: 'Paraguay' },
        // México
        { name: 'Ciudad de México', code: 'MEX', country: 'México' },
        { name: 'Cancún', code: 'CUN', country: 'México' },
        { name: 'Guadalajara', code: 'GDL', country: 'México' },
        { name: 'Monterrey', code: 'MTY', country: 'México' },
        { name: 'Tijuana', code: 'TIJ', country: 'México' },
        // Estados Unidos
        { name: 'Nueva York', code: 'JFK', country: 'Estados Unidos' },
        { name: 'Los Ángeles', code: 'LAX', country: 'Estados Unidos' },
        { name: 'Chicago', code: 'ORD', country: 'Estados Unidos' },
        { name: 'Miami', code: 'MIA', country: 'Estados Unidos' },
        { name: 'Dallas', code: 'DFW', country: 'Estados Unidos' },
        { name: 'San Francisco', code: 'SFO', country: 'Estados Unidos' },
        { name: 'Houston', code: 'IAH', country: 'Estados Unidos' },
        { name: 'Seattle', code: 'SEA', country: 'Estados Unidos' },
        // Otros países
        { name: 'San Salvador', code: 'SAL', country: 'El Salvador' },
        { name: 'Ciudad de Panamá', code: 'PTY', country: 'Panamá' },
        { name: 'San José', code: 'SJO', country: 'Costa Rica' },
        { name: 'Madrid', code: 'MAD', country: 'España' },
        { name: 'Londres', code: 'LHR', country: 'Reino Unido' },
        { name: 'Tokio', code: 'HND', country: 'Japón' },
    ];
    filteredLocations = [];
    ngOnInit() {
        this.filteredLocations = [...this.locations];
    }
    onSearchTermChange() {
        this.showDropdown = true;
        this.filteredLocations = this.locations.filter(location => location.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            location.code.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    selectLocation(location) {
        this.selectedLocation = location;
        this.searchTerm = location.name;
        this.showDropdown = false;
        this.locationSelected.emit(location);
    }
    clearSelection() {
        this.selectedLocation = null;
        this.searchTerm = '';
        this.filteredLocations = [...this.locations];
        this.showDropdown = false;
    }
    onFocus() {
        this.showDropdown = true;
    }
    onBlur() {
        setTimeout(() => {
            this.showDropdown = false;
        }, 200);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: OriginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: OriginComponent, isStandalone: true, selector: "lib-origin", outputs: { locationSelected: "locationSelected" }, ngImport: i0, template: "<div class=\"location-origin\">\n    <label for=\"origin\">Origen</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige origen\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: [".location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: OriginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-origin', imports: [CommonModule, FormsModule], template: "<div class=\"location-origin\">\n    <label for=\"origin\">Origen</label>\n    <input type=\"text\" id=\"origin\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchTermChange()\" (focus)=\"onFocus()\"\n        (blur)=\"onBlur()\" placeholder=\"Elige origen\" />\n\n    <div class=\"dropdown-list\" *ngIf=\"showDropdown\">\n        <ul>\n            <li class=\"section-header\"><i class=\"fas fa-globe\"></i> Pa\u00EDses</li>\n            <li *ngFor=\"let location of filteredLocations\" (click)=\"selectLocation(location)\">\n                {{ location.name }}, {{ location.country }} <span>{{ location.code }}</span>\n            </li>\n        </ul>\n        <a href=\"#\" class=\"footer-link\"><i class=\"fas fa-globe\"></i> Conoce nuestras rutas</a>\n    </div>\n</div>", styles: [".location-origin{position:relative;width:100%}label{display:block;font-size:14px;font-weight:700;margin-bottom:5px}input[type=text]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px}.dropdown-list{position:absolute;top:100%;left:0;width:100%;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 4px #0000001a;z-index:1000}.dropdown-list ul{list-style:none;padding:0;margin:0}.dropdown-list li{padding:10px;cursor:pointer;display:flex;justify-content:space-between}.dropdown-list li:hover{background-color:#f0f0f0}.dropdown-list .section-header{padding:10px;font-weight:700;color:#555}.dropdown-list .footer-link{display:block;padding:10px;text-align:center;color:#00f;text-decoration:none;border-top:1px solid #eee}.dropdown-list .footer-link:hover{background-color:#eee}\n"] }]
        }], propDecorators: { locationSelected: [{
                type: Output
            }] } });

class PassengersSectComponent {
    eRef;
    passengersChanged = new EventEmitter();
    adultCount = 1;
    childrenCount = 0;
    babiesCount = 0;
    showDropdown = false;
    constructor(eRef) {
        this.eRef = eRef;
    }
    get totalPassengers() {
        const total = this.adultCount + this.childrenCount + this.babiesCount;
        if (total === 1) {
            return '1 adulto';
        }
        else {
            return `${total} adultos`;
        }
    }
    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    increaseAdults() {
        this.adultCount++;
        this.emitChanges();
    }
    decreaseAdults() {
        if (this.adultCount > 1) {
            this.adultCount--;
            this.emitChanges();
        }
    }
    increaseChildren() {
        this.childrenCount++;
        this.emitChanges();
    }
    decreaseChildren() {
        if (this.childrenCount > 0) {
            this.childrenCount--;
            this.emitChanges();
        }
    }
    increaseBabies() {
        this.babiesCount++;
        this.emitChanges();
    }
    decreaseBabies() {
        if (this.babiesCount > 0) {
            this.babiesCount--;
            this.emitChanges();
        }
    }
    emitChanges() {
        this.passengersChanged.emit({ adults: this.adultCount, children: this.childrenCount, babies: this.babiesCount });
    }
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showDropdown = false;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengersSectComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: PassengersSectComponent, isStandalone: true, selector: "lib-passengers-sect", outputs: { passengersChanged: "passengersChanged" }, host: { listeners: { "document:click": "clickout($event)" } }, ngImport: i0, template: "<div class=\"passengers-sect\">\n    <label class=\"passengers-sect__label\">Pasajeros</label>\n    <span class=\"passengers-sect__value-container\" (click)=\"toggleDropdown()\">\n        {{ totalPassengers }}\n    </span>\n\n    <div class=\"passengers-sect__dropdown\" [class.show]=\"showDropdown\">\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Adultos <p>12 o m\u00E1s a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseAdults()\"\n                    [disabled]=\"adultCount <= 1\">-</button>\n                <span>{{ adultCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseAdults()\">+</button>\n            </div>\n        </div>\n\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Ni\u00F1os<p>2 a 11 a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseChildren()\">-</button>\n                <span>{{ childrenCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseChildren()\">+</button>\n            </div>\n        </div>\n\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Beb\u00E9s<p>0 a 2 a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseBabies()\">-</button>\n                <span>{{ babiesCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseBabies()\">+</button>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".passengers-sect{position:relative;font-family:sans-serif;border:1px solid #ccc;border-radius:5px;padding:10px}.passengers-sect__label{display:block;font-size:.8em;color:#666}.passengers-sect__value-container{background:none;border-radius:5px;padding:1px 12px;font-size:1em;color:#007bff;cursor:pointer;text-align:center;display:inline-block;width:100px}.passengers-sect__dropdown{position:absolute;top:100%;left:0;width:250px;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 5px #0000001a;z-index:1000;padding:15px;display:none}.passengers-sect__dropdown.show{display:block}.passengers-sect__group{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.passengers-sect__group:last-child{margin-bottom:0}.passengers-sect__group-label{flex:1;font-weight:700;text-align:left}.passengers-sect__group-label p{font-size:.8em;font-weight:400}.passengers-sect__group-controls{display:flex;align-items:center}.passengers-sect__group-controls button{background-color:#fff;border:1px solid #007bff;padding:5px 8px;border-radius:50%;cursor:pointer;margin:0 5px;width:25px;text-align:center;height:25px;color:#007bff}.passengers-sect__group-controls button:disabled{opacity:.5;cursor:not-allowed}.passengers-sect__group-controls button:disabled{border:1px solid #ccc;color:#ccc}.passengers-sect__group-controls span{width:20px;text-align:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengersSectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-passengers-sect', imports: [CommonModule], template: "<div class=\"passengers-sect\">\n    <label class=\"passengers-sect__label\">Pasajeros</label>\n    <span class=\"passengers-sect__value-container\" (click)=\"toggleDropdown()\">\n        {{ totalPassengers }}\n    </span>\n\n    <div class=\"passengers-sect__dropdown\" [class.show]=\"showDropdown\">\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Adultos <p>12 o m\u00E1s a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseAdults()\"\n                    [disabled]=\"adultCount <= 1\">-</button>\n                <span>{{ adultCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseAdults()\">+</button>\n            </div>\n        </div>\n\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Ni\u00F1os<p>2 a 11 a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseChildren()\">-</button>\n                <span>{{ childrenCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseChildren()\">+</button>\n            </div>\n        </div>\n\n        <div class=\"passengers-sect__group\">\n            <div class=\"passengers-sect__group-label\">Beb\u00E9s<p>0 a 2 a\u00F1os</p>\n            </div>\n            <div class=\"passengers-sect__group-controls\">\n                <button class=\"passengers-sect__group-button\" (click)=\"decreaseBabies()\">-</button>\n                <span>{{ babiesCount }}</span>\n                <button class=\"passengers-sect__group-button\" (click)=\"increaseBabies()\">+</button>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".passengers-sect{position:relative;font-family:sans-serif;border:1px solid #ccc;border-radius:5px;padding:10px}.passengers-sect__label{display:block;font-size:.8em;color:#666}.passengers-sect__value-container{background:none;border-radius:5px;padding:1px 12px;font-size:1em;color:#007bff;cursor:pointer;text-align:center;display:inline-block;width:100px}.passengers-sect__dropdown{position:absolute;top:100%;left:0;width:250px;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 5px #0000001a;z-index:1000;padding:15px;display:none}.passengers-sect__dropdown.show{display:block}.passengers-sect__group{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.passengers-sect__group:last-child{margin-bottom:0}.passengers-sect__group-label{flex:1;font-weight:700;text-align:left}.passengers-sect__group-label p{font-size:.8em;font-weight:400}.passengers-sect__group-controls{display:flex;align-items:center}.passengers-sect__group-controls button{background-color:#fff;border:1px solid #007bff;padding:5px 8px;border-radius:50%;cursor:pointer;margin:0 5px;width:25px;text-align:center;height:25px;color:#007bff}.passengers-sect__group-controls button:disabled{opacity:.5;cursor:not-allowed}.passengers-sect__group-controls button:disabled{border:1px solid #ccc;color:#ccc}.passengers-sect__group-controls span{width:20px;text-align:center}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { passengersChanged: [{
                type: Output
            }], clickout: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class SearchBtnComponent {
    searchClicked = new EventEmitter();
    onClick() {
        this.searchClicked.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SearchBtnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: SearchBtnComponent, isStandalone: true, selector: "lib-search-btn", outputs: { searchClicked: "searchClicked" }, ngImport: i0, template: "<button class=\"search-button\" (click)=\"onClick()\">\n    Buscar\n</button>", styles: [".search-button{background-color:#2d69e1;color:#fff;padding:20px;border:none;border-radius:14px;font-size:14px;cursor:pointer;transition:background-color .2s ease;width:150px}.search-button:hover{background-color:#0056b3}.search-button:focus{outline:none;box-shadow:0 0 5px #007bff80}.search-button:active{background-color:#004085}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: SearchBtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-search-btn', imports: [], template: "<button class=\"search-button\" (click)=\"onClick()\">\n    Buscar\n</button>", styles: [".search-button{background-color:#2d69e1;color:#fff;padding:20px;border:none;border-radius:14px;font-size:14px;cursor:pointer;transition:background-color .2s ease;width:150px}.search-button:hover{background-color:#0056b3}.search-button:focus{outline:none;box-shadow:0 0 5px #007bff80}.search-button:active{background-color:#004085}\n"] }]
        }], propDecorators: { searchClicked: [{
                type: Output
            }] } });

class TripTypeSelectorComponent {
    options = [];
    selectedOption;
    selectionChange = new EventEmitter();
    isOpen = false;
    ngOnInit() {
        if (!this.selectedOption && this.options.length > 0) {
            this.selectedOption = this.options[0];
        }
    }
    toggleOptions() {
        this.isOpen = !this.isOpen;
    }
    selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
        this.selectionChange.emit(option);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TripTypeSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: TripTypeSelectorComponent, isStandalone: true, selector: "lib-trip-type-selector", inputs: { options: "options", selectedOption: "selectedOption" }, outputs: { selectionChange: "selectionChange" }, ngImport: i0, template: "<div class=\"custom-select\">\n    <div class=\"select-input\" (click)=\"toggleOptions()\">\n        {{ selectedOption }}\n        <span class=\"arrow\" *ngIf=\"!isOpen\">\u25BC</span>\n        <span class=\"arrow\" *ngIf=\"isOpen\">\u25B2</span>\n    </div>\n\n    <ul class=\"options-list\" *ngIf=\"isOpen\">\n        <li *ngFor=\"let option of options\" (click)=\"selectOption(option)\">\n            {{ option }}\n        </li>\n    </ul>\n</div>", styles: [".custom-select{position:relative;width:200px}.select-input{border:1px solid #ccc;padding:8px;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.arrow{font-size:12px}.options-list{position:absolute;top:100%;left:0;width:100%;border:1px solid #ccc;list-style:none;padding:0;margin:0;background-color:#fff;z-index:1}.options-list li{padding:8px;cursor:pointer}.options-list li:hover{background-color:#e0f2ff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TripTypeSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-trip-type-selector', imports: [CommonModule, FormsModule], template: "<div class=\"custom-select\">\n    <div class=\"select-input\" (click)=\"toggleOptions()\">\n        {{ selectedOption }}\n        <span class=\"arrow\" *ngIf=\"!isOpen\">\u25BC</span>\n        <span class=\"arrow\" *ngIf=\"isOpen\">\u25B2</span>\n    </div>\n\n    <ul class=\"options-list\" *ngIf=\"isOpen\">\n        <li *ngFor=\"let option of options\" (click)=\"selectOption(option)\">\n            {{ option }}\n        </li>\n    </ul>\n</div>", styles: [".custom-select{position:relative;width:200px}.select-input{border:1px solid #ccc;padding:8px;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.arrow{font-size:12px}.options-list{position:absolute;top:100%;left:0;width:100%;border:1px solid #ccc;list-style:none;padding:0;margin:0;background-color:#fff;z-index:1}.options-list li{padding:8px;cursor:pointer}.options-list li:hover{background-color:#e0f2ff}\n"] }]
        }], propDecorators: { options: [{
                type: Input
            }], selectedOption: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });

class FlightSearchFormComponent {
    opciones = ['Round Trip', 'One Way', 'Multi-City'];
    opcionSeleccionada = 'Round Trip';
    filters = output();
    pagarConMillas = false;
    locationOptionOrigin;
    locationOptionDestination;
    selectedStartDate = null;
    selectedEndDate = null;
    selectedCountPassenger = 1;
    constructor() { }
    ngOnInit() { }
    onSelectionChange(nuevaOpcion) {
        this.opcionSeleccionada = nuevaOpcion;
    }
    onSelectionOrigin(value) {
        this.locationOptionOrigin = value;
    }
    onSelectionDestination(value) {
        this.locationOptionDestination = value;
    }
    onPagarConMillasChange(event) {
        this.pagarConMillas = event.target.checked;
    }
    onSelectedRange(dateRange) {
        this.selectedStartDate = dateRange.start ? new Date(dateRange.start.year, dateRange.start.month - 1, dateRange.start.day) : null;
        this.selectedEndDate = dateRange.end ? new Date(dateRange.end.year, dateRange.end.month - 1, dateRange.end.day) : null;
    }
    onSelectedPassenger(value) {
        this.selectedCountPassenger = value.adults;
    }
    onSearchFlight() {
        if (!this.locationOptionOrigin || !this.locationOptionDestination || !this.selectedStartDate) {
            return;
        }
        const criteria = {
            tripType: this.opcionSeleccionada,
            origin: this.locationOptionOrigin.name,
            destination: this.locationOptionDestination.name,
            departureDate: this.selectedStartDate.toISOString().split('T')[0],
            adults: this.selectedCountPassenger,
            payWithMiles: this.pagarConMillas,
            promoCode: null
        };
        if (this.opcionSeleccionada === "Round Trip" && this.selectedEndDate) {
            criteria.returnDate = this.selectedEndDate.toISOString().split('T')[0];
        }
        else {
            criteria.returnDate = undefined;
        }
        this.filters.emit(criteria);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightSearchFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FlightSearchFormComponent, isStandalone: true, selector: "lib-flight-search-form", outputs: { filters: "filters" }, ngImport: i0, template: "<div class=\"flight-search-container\">\n    <div class=\"flight-search-container__header\">\n        <div class=\"flight-search-container__tab\">\n            <h2 class=\"flight-search-container__title\" id=\"flightSearchHeading\">Vuelos</h2>\n        </div>\n        <div class=\"flight-search-container__underline\"></div>\n    </div>\n\n    <div class=\"flight-search-container__body\">\n\n        <div class=\"flight-search-container__row flight-search-container__first-row\">\n            <lib-trip-type-selector class=\"flight-search-container__trip-type-selector\" [options]=\"opciones\"\n                [selectedOption]=\"opcionSeleccionada\" (selectionChange)=\"onSelectionChange($event)\" />\n\n            <label class=\"flight-search-container__miles\">\n                <input type=\"checkbox\" (change)=\"onPagarConMillasChange($event)\" /> Pagar Con Millas\n            </label>\n\n            <div class=\"flight-search-container__promo-code promo-code\">\n                <input type=\"text\" placeholder=\"A\u00F1adir c\u00F3digo promoci\u00F3n\" class=\"promo-code__input\" />\n                <a href=\"#\" class=\"promo-code__currency-link\"> $ Moneda | USD </a>\n            </div>\n        </div>\n\n        <div class=\"flight-search-container__row flight-search-container__second-row\">\n            <lib-origin class=\"flight-search-container__origin\" (locationSelected)=\"onSelectionOrigin($event)\" />\n\n            <lib-destination class=\"flight-search-container__destination\"\n                (locationSelected)=\"onSelectionDestination($event)\" />\n\n            <lib-date-range-picker class=\"flight-search-container__date-range\"\n                (dateRangeSelected)=\"onSelectedRange($event)\" />\n\n            <lib-passengers-sect class=\"flight-search-container__passengers\"\n                (passengersChanged)=\"onSelectedPassenger($event)\" />\n\n            <lib-search-btn class=\"flight-search-container__button\" (click)=\"onSearchFlight()\" />\n        </div>\n    </div>\n</div>", styles: [".flight-search-container{background-color:#fff;border-radius:10px;box-shadow:0 0 15px #0000001a;margin:20px;border-bottom:1px solid #dee2e6}.flight-search-container__header{background-color:#f8f9fa;display:flex;flex-direction:column;border-bottom:1px solid #dee2e6}.flight-search-container__tab{background-color:transparent;border:none;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:flex-start}.flight-search-container__title{font-size:1.7rem;margin-left:20px;margin-bottom:0;color:#007bff}.flight-search-container__underline{height:4px;background-color:#007bff;width:9rem}.flight-search-container__body{padding:25px;background-color:#fff;display:flex;flex-direction:column;gap:15px}.flight-search-container__row{display:flex;align-items:center;box-sizing:border-box;gap:10px;width:100%}.flight-search-container__first-row{display:flex;justify-content:space-between;align-items:center;width:100%}.flight-search-container__trip-type-selector{width:auto;flex-grow:1;flex-shrink:0}.flight-search-container__miles{margin-right:25px}.flight-search-container__promo-code{width:auto;margin-left:auto;display:flex;align-items:center}.flight-search-container .promo-code__input{margin-right:100px;height:20px;padding:5px 10px;font-size:1rem;border:1px solid #ced4da;border-radius:2px}.flight-search-container__second-row{justify-content:flex-start;flex-wrap:wrap}.flight-search-container__date-range{width:600px}.flight-search-container__origin,.flight-search-container__destination{width:150px;margin-right:20px}\n"], dependencies: [{ kind: "component", type: DateRangePickerComponent, selector: "lib-date-range-picker", outputs: ["dateRangeSelected"] }, { kind: "component", type: DestinationComponent, selector: "lib-destination", outputs: ["locationSelected"] }, { kind: "component", type: OriginComponent, selector: "lib-origin", outputs: ["locationSelected"] }, { kind: "component", type: PassengersSectComponent, selector: "lib-passengers-sect", outputs: ["passengersChanged"] }, { kind: "component", type: SearchBtnComponent, selector: "lib-search-btn", outputs: ["searchClicked"] }, { kind: "component", type: TripTypeSelectorComponent, selector: "lib-trip-type-selector", inputs: ["options", "selectedOption"], outputs: ["selectionChange"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightSearchFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-search-form', imports: [AutocompleteComponent, DateRangePickerComponent, DestinationComponent, OriginComponent, PassengersSectComponent, SearchBtnComponent, TripTypeSelectorComponent, CommonModule, FormsModule], template: "<div class=\"flight-search-container\">\n    <div class=\"flight-search-container__header\">\n        <div class=\"flight-search-container__tab\">\n            <h2 class=\"flight-search-container__title\" id=\"flightSearchHeading\">Vuelos</h2>\n        </div>\n        <div class=\"flight-search-container__underline\"></div>\n    </div>\n\n    <div class=\"flight-search-container__body\">\n\n        <div class=\"flight-search-container__row flight-search-container__first-row\">\n            <lib-trip-type-selector class=\"flight-search-container__trip-type-selector\" [options]=\"opciones\"\n                [selectedOption]=\"opcionSeleccionada\" (selectionChange)=\"onSelectionChange($event)\" />\n\n            <label class=\"flight-search-container__miles\">\n                <input type=\"checkbox\" (change)=\"onPagarConMillasChange($event)\" /> Pagar Con Millas\n            </label>\n\n            <div class=\"flight-search-container__promo-code promo-code\">\n                <input type=\"text\" placeholder=\"A\u00F1adir c\u00F3digo promoci\u00F3n\" class=\"promo-code__input\" />\n                <a href=\"#\" class=\"promo-code__currency-link\"> $ Moneda | USD </a>\n            </div>\n        </div>\n\n        <div class=\"flight-search-container__row flight-search-container__second-row\">\n            <lib-origin class=\"flight-search-container__origin\" (locationSelected)=\"onSelectionOrigin($event)\" />\n\n            <lib-destination class=\"flight-search-container__destination\"\n                (locationSelected)=\"onSelectionDestination($event)\" />\n\n            <lib-date-range-picker class=\"flight-search-container__date-range\"\n                (dateRangeSelected)=\"onSelectedRange($event)\" />\n\n            <lib-passengers-sect class=\"flight-search-container__passengers\"\n                (passengersChanged)=\"onSelectedPassenger($event)\" />\n\n            <lib-search-btn class=\"flight-search-container__button\" (click)=\"onSearchFlight()\" />\n        </div>\n    </div>\n</div>", styles: [".flight-search-container{background-color:#fff;border-radius:10px;box-shadow:0 0 15px #0000001a;margin:20px;border-bottom:1px solid #dee2e6}.flight-search-container__header{background-color:#f8f9fa;display:flex;flex-direction:column;border-bottom:1px solid #dee2e6}.flight-search-container__tab{background-color:transparent;border:none;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:flex-start}.flight-search-container__title{font-size:1.7rem;margin-left:20px;margin-bottom:0;color:#007bff}.flight-search-container__underline{height:4px;background-color:#007bff;width:9rem}.flight-search-container__body{padding:25px;background-color:#fff;display:flex;flex-direction:column;gap:15px}.flight-search-container__row{display:flex;align-items:center;box-sizing:border-box;gap:10px;width:100%}.flight-search-container__first-row{display:flex;justify-content:space-between;align-items:center;width:100%}.flight-search-container__trip-type-selector{width:auto;flex-grow:1;flex-shrink:0}.flight-search-container__miles{margin-right:25px}.flight-search-container__promo-code{width:auto;margin-left:auto;display:flex;align-items:center}.flight-search-container .promo-code__input{margin-right:100px;height:20px;padding:5px 10px;font-size:1rem;border:1px solid #ced4da;border-radius:2px}.flight-search-container__second-row{justify-content:flex-start;flex-wrap:wrap}.flight-search-container__date-range{width:600px}.flight-search-container__origin,.flight-search-container__destination{width:150px;margin-right:20px}\n"] }]
        }], ctorParameters: () => [] });

class FlightSearchComponent {
    _useCase = inject(GetFlightsUseCase);
    flights = [];
    ngOnInit() {
        this._useCase.initSubscription();
        this._useCase.flights$().subscribe({
            next: (response) => (this.flights = response),
        });
    }
    ngOnDestroy() {
        this._useCase.destroySubscription();
    }
    searchFlight(filters) {
        this._useCase.execute(filters);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FlightSearchComponent, isStandalone: true, selector: "lib-flight-search", ngImport: i0, template: "<lib-flight-search-form (filters)=\"searchFlight($event)\" />", dependencies: [{ kind: "component", type: FlightSearchFormComponent, selector: "lib-flight-search-form", outputs: ["filters"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-search', imports: [FlightSearchFormComponent], template: "<lib-flight-search-form (filters)=\"searchFlight($event)\" />" }]
        }] });

class HeroComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: HeroComponent, isStandalone: true, selector: "lib-hero", ngImport: i0, template: "<div class=\"app-carousel-container\">\n    <lib-carousel />\n\n    <!--    <lib-flight-search-form /> -->\n    <lib-flight-search />\n\n</div>", styles: ["lib-flight-search{position:absolute;top:70%;left:50%;transform:translate(-50%,-50%);width:80%;border-radius:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: CarouselComponent, selector: "lib-carousel" }, { kind: "component", type: FlightSearchComponent, selector: "lib-flight-search" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-hero', imports: [CommonModule, CarouselComponent, FlightSearchFormComponent, FlightSearchComponent], template: "<div class=\"app-carousel-container\">\n    <lib-carousel />\n\n    <!--    <lib-flight-search-form /> -->\n    <lib-flight-search />\n\n</div>", styles: ["lib-flight-search{position:absolute;top:70%;left:50%;transform:translate(-50%,-50%);width:80%;border-radius:10px}\n"] }]
        }] });

class FlightFilteringComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightFilteringComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FlightFilteringComponent, isStandalone: true, selector: "lib-flight-filtering", ngImport: i0, template: " <lib-hero/> \n", dependencies: [{ kind: "component", type: HeroComponent, selector: "lib-hero" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightFilteringComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-filtering', imports: [HeroComponent, FlightSearchFormComponent], template: " <lib-hero/> \n" }]
        }] });

const flightRoutes = [
    {
        path: 'search',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: FlightComponent
            },
        ]
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: FlightFilteringComponent
            },
        ]
    }
];

class GetFlightsSelectedUseCase {
    _state = inject(State);
    subscriptions;
    flight$() {
        return this._state.flightsSelected.$();
    }
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsSelectedUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsSelectedUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetFlightsSelectedUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/*
 * Public API Surface of flight
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GetFlightsSelectedUseCase, GetFlightsUseCase, flightRoutes };
//# sourceMappingURL=flight.mjs.map
