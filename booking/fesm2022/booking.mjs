import * as i0 from '@angular/core';
import { input, Component, inject, Injectable, output } from '@angular/core';
import { RouteFlightComponent, DetailFlightComponent, BookingHeaderService, BookingLayoutComponent } from 'shared';
import { GetFlightsSelectedUseCase, GetFlightsUseCase } from 'flight';
import { switchMap, map, tap, BehaviorSubject, Subscription, combineLatest, of } from 'rxjs';
import { PassengerSaveUseCase, PassengerContactUseCase } from 'passenger';
import { DecimalPipe } from '@angular/common';
import { SelectSeatUseCase } from 'seat-availability';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MethodPayUseCase } from 'pay';

class FlightLegComponent {
    leg = input.required();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightLegComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FlightLegComponent, isStandalone: true, selector: "lib-flight-leg", inputs: { leg: { classPropertyName: "leg", publicName: "leg", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<div class=\"flight-leg\">\n  <div class=\"flight-leg__departure\">\n    <span class=\"flight-leg__time\">{{ leg().departureTime }}</span>\n    <span class=\"flight-leg__airport\">{{ leg().departureAirportCode }}</span>\n  </div>\n\n  <div class=\"flight-leg__stop\">\n    @if (leg().stopAirportCode) {\n    <span class=\"flight-leg__stop-airport\">{{ leg().stopAirportCode }}</span>\n    <span class=\"flight-leg__stop-dot\"></span>\n    <span class=\"flight-leg__stop-duration\">{{ leg().stopDuration }}</span>\n    }\n  </div>\n  <div class=\"flight-leg__arrow\">\n    <span class=\"flight-leg__arrow--start\"></span>\n    <hr />\n    <span class=\"flight-leg__arrow--end\"></span>\n  </div>\n\n\n\n  <div class=\"flight-leg__arrival\">\n    <span class=\"flight-leg__time\">{{ leg().arrivalTime }}</span>\n    <span class=\"flight-leg__airport\">{{ leg().arrivalAirportCode }}</span>\n  </div>\n</div>", styles: [".flight-leg{display:flex;align-items:center;justify-content:space-between;padding:16px 0;position:relative}.flight-leg__departure,.flight-leg__arrival{text-align:center;width:20%}.flight-leg__time{font-size:1.25rem;font-weight:700;color:#333;display:block;margin-bottom:4px}.flight-leg__airport{font-size:.875rem;color:#777}.flight-leg__stop{gap:15px;position:absolute;left:50%;transform:translate(-50%);text-align:center;z-index:2;display:flex;flex-direction:column;align-items:center}.flight-leg__stop-airport{font-size:.75rem;color:#555;margin-bottom:2px}.flight-leg__stop-duration{font-size:.75rem;color:#888}.flight-leg__stop-dot{position:absolute;top:50%;transform:translate(-50%);width:10px;height:10px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight-leg__arrow{flex-grow:1;display:flex;align-items:center}.flight-leg__arrow hr{border:none;border-top:1px solid #9ca3af;width:100%}.flight-leg__arrow--start,.flight-leg__arrow--end{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight-leg__arrow--end{left:80%}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightLegComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-leg', imports: [], template: "<div class=\"flight-leg\">\n  <div class=\"flight-leg__departure\">\n    <span class=\"flight-leg__time\">{{ leg().departureTime }}</span>\n    <span class=\"flight-leg__airport\">{{ leg().departureAirportCode }}</span>\n  </div>\n\n  <div class=\"flight-leg__stop\">\n    @if (leg().stopAirportCode) {\n    <span class=\"flight-leg__stop-airport\">{{ leg().stopAirportCode }}</span>\n    <span class=\"flight-leg__stop-dot\"></span>\n    <span class=\"flight-leg__stop-duration\">{{ leg().stopDuration }}</span>\n    }\n  </div>\n  <div class=\"flight-leg__arrow\">\n    <span class=\"flight-leg__arrow--start\"></span>\n    <hr />\n    <span class=\"flight-leg__arrow--end\"></span>\n  </div>\n\n\n\n  <div class=\"flight-leg__arrival\">\n    <span class=\"flight-leg__time\">{{ leg().arrivalTime }}</span>\n    <span class=\"flight-leg__airport\">{{ leg().arrivalAirportCode }}</span>\n  </div>\n</div>", styles: [".flight-leg{display:flex;align-items:center;justify-content:space-between;padding:16px 0;position:relative}.flight-leg__departure,.flight-leg__arrival{text-align:center;width:20%}.flight-leg__time{font-size:1.25rem;font-weight:700;color:#333;display:block;margin-bottom:4px}.flight-leg__airport{font-size:.875rem;color:#777}.flight-leg__stop{gap:15px;position:absolute;left:50%;transform:translate(-50%);text-align:center;z-index:2;display:flex;flex-direction:column;align-items:center}.flight-leg__stop-airport{font-size:.75rem;color:#555;margin-bottom:2px}.flight-leg__stop-duration{font-size:.75rem;color:#888}.flight-leg__stop-dot{position:absolute;top:50%;transform:translate(-50%);width:10px;height:10px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight-leg__arrow{flex-grow:1;display:flex;align-items:center}.flight-leg__arrow hr{border:none;border-top:1px solid #9ca3af;width:100%}.flight-leg__arrow--start,.flight-leg__arrow--end{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background-color:#0f2367;transform:translateY(-50%)}.flight-leg__arrow--end{left:80%}\n"] }]
        }] });

class FlightCardComponent {
    title = input.required();
    date = input.required();
    legs = input.required();
    duration = input('15 h 55 min');
    operatedBy = input('Air Europa');
    details = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FlightCardComponent, isStandalone: true, selector: "lib-flight-card", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: true, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: true, transformFunction: null }, legs: { classPropertyName: "legs", publicName: "legs", isSignal: true, isRequired: true, transformFunction: null }, duration: { classPropertyName: "duration", publicName: "duration", isSignal: true, isRequired: false, transformFunction: null }, operatedBy: { classPropertyName: "operatedBy", publicName: "operatedBy", isSignal: true, isRequired: false, transformFunction: null }, details: { classPropertyName: "details", publicName: "details", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flight-card\">\n  <div class=\"flight-card__header\">\n    <h2 class=\"flight-card__title\">{{ title() }}</h2>\n    <p class=\"flight-card__date\">{{ date() }}</p>\n  </div>\n  <div class=\"flight-card__separator\"></div>\n  <div class=\"flight-card__content\">\n\n    <div class=\"flight-card__legs\">\n      @for (leg of legs(); track $index) {\n        <lib-route-flight [routeData]=\"leg\"></lib-route-flight>\n      }\n    </div>\n\n    <div class=\"flight-card__right\">\n      <lib-detail-flight [detailsData]=\"details()\"></lib-detail-flight>\n    </div>\n\n  </div>\n\n\n</div>", styles: [".flight-card{background-color:#fff;border:1px solid #eee;border-radius:12px;padding:24px;width:100%;box-shadow:0 2px 4px #0000000d;margin-bottom:20px}.flight-card__header{margin-bottom:8px}.flight-card__title{font-size:24px;font-weight:bolder;color:#0d0d0d;margin-bottom:8px}.flight-card__date{font-size:12px;color:#0d0d0d}.flight-card__legs{margin-bottom:24px;width:70%}.flight-card__duration,.flight-card__operator{margin-bottom:8px}.flight-card__details-link{color:#007bff;text-decoration:none;font-weight:700}.flight-card__details-link:hover{text-decoration:underline}.flight-card__content{display:flex;justify-content:space-between;gap:5%}.flight-card__separator{width:100%;height:1px;color:#ccc;margin-bottom:10px;border:1px dashed}\n"], dependencies: [{ kind: "component", type: RouteFlightComponent, selector: "lib-route-flight", inputs: ["routeData"] }, { kind: "component", type: DetailFlightComponent, selector: "lib-detail-flight", inputs: ["detailsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-card', imports: [FlightLegComponent, RouteFlightComponent, DetailFlightComponent], template: "<div class=\"flight-card\">\n  <div class=\"flight-card__header\">\n    <h2 class=\"flight-card__title\">{{ title() }}</h2>\n    <p class=\"flight-card__date\">{{ date() }}</p>\n  </div>\n  <div class=\"flight-card__separator\"></div>\n  <div class=\"flight-card__content\">\n\n    <div class=\"flight-card__legs\">\n      @for (leg of legs(); track $index) {\n        <lib-route-flight [routeData]=\"leg\"></lib-route-flight>\n      }\n    </div>\n\n    <div class=\"flight-card__right\">\n      <lib-detail-flight [detailsData]=\"details()\"></lib-detail-flight>\n    </div>\n\n  </div>\n\n\n</div>", styles: [".flight-card{background-color:#fff;border:1px solid #eee;border-radius:12px;padding:24px;width:100%;box-shadow:0 2px 4px #0000000d;margin-bottom:20px}.flight-card__header{margin-bottom:8px}.flight-card__title{font-size:24px;font-weight:bolder;color:#0d0d0d;margin-bottom:8px}.flight-card__date{font-size:12px;color:#0d0d0d}.flight-card__legs{margin-bottom:24px;width:70%}.flight-card__duration,.flight-card__operator{margin-bottom:8px}.flight-card__details-link{color:#007bff;text-decoration:none;font-weight:700}.flight-card__details-link:hover{text-decoration:underline}.flight-card__content{display:flex;justify-content:space-between;gap:5%}.flight-card__separator{width:100%;height:1px;color:#ccc;margin-bottom:10px;border:1px dashed}\n"] }]
        }] });

class FlightCardContainerComponent {
    flights = [];
    _getFlightSelected = inject(GetFlightsSelectedUseCase);
    _getFlight = inject(GetFlightsUseCase);
    constructor() { }
    ngOnInit() {
        this._getFlightSelected.initSubscription();
        this.getFlightData();
    }
    ngOnDestroy() {
        this._getFlightSelected.destroySubscription();
    }
    maptoFlightLegs(flight) {
        const departureTime = new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const arrivalTime = new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const departureDate = new Date(flight.departure);
        const arrivalDate = new Date(flight.arrival);
        let durationMs = arrivalDate.getTime() - departureDate.getTime();
        let durationMinutes = Math.floor(durationMs / (60 * 1000));
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
        const duration = `${hours}h ${minutes}m`;
        const diffInDays = Math.floor((arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));
        const days = `+${diffInDays}`;
        const leg = {
            departureTime: departureTime,
            departureAirportCode: flight?.origin,
            stopAirportCode: flight?.destination,
            stopDuration: '2h35m',
            arrivalTime: arrivalTime,
            arrivalAirportCode: flight?.destination,
            days: days
        };
        return {
            title: 'From ' + flight?.origin + ' to ' + flight?.destination,
            date: departureDate.toLocaleDateString('en-US', {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            legs: [leg],
            detail: {
                detail: [`Duration: ${duration}`, `Operated by Air-Sofka`],
                ref: 'See itinerary details'
            }
        };
    }
    getFlightData() {
        this._getFlightSelected.flight$().pipe(switchMap((flight) => this._getFlight.flights$().pipe(map(flights => flights.filter(f => f.id === flight.origin.id || f.id === flight.destination.id ||
            (flight.origin.id === flight.destination.id && f.id === flight.origin.id))))), tap(filteredFlights => {
            this.flights = filteredFlights.map(f => this.maptoFlightLegs(f));
        })).subscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FlightCardContainerComponent, isStandalone: true, selector: "lib-flight-card-container", ngImport: i0, template: "<h1 class=\"title-h1\">Your Flight</h1>\n@for (item of flights; track $index) {\n<lib-flight-card\n  [title]=\"item.title\"\n  [date]=\"item.date\"\n  [legs]=\"item.legs\"\n  [details]=\"item.detail\"\n></lib-flight-card>\n\n}\n", dependencies: [{ kind: "component", type: FlightCardComponent, selector: "lib-flight-card", inputs: ["title", "date", "legs", "duration", "operatedBy", "details"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-card-container', imports: [FlightCardComponent], template: "<h1 class=\"title-h1\">Your Flight</h1>\n@for (item of flights; track $index) {\n<lib-flight-card\n  [title]=\"item.title\"\n  [date]=\"item.date\"\n  [legs]=\"item.legs\"\n  [details]=\"item.detail\"\n></lib-flight-card>\n\n}\n" }]
        }], ctorParameters: () => [] });

class ResumePassengerCardComponent {
    icon = input('person');
    name = input.required();
    email = input('');
    phone = input('');
    type = input('');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumePassengerCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: ResumePassengerCardComponent, isStandalone: true, selector: "lib-resume-passenger-card", inputs: { icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: true, transformFunction: null }, email: { classPropertyName: "email", publicName: "email", isSignal: true, isRequired: false, transformFunction: null }, phone: { classPropertyName: "phone", publicName: "phone", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"passenger-card\">\n  <div class=\"passenger-card__details\">\n    <div class=\"passenger-card__icon\">\n      <span>\n        <svg width=\"28\" height=\"28\">\n          <use xlink:href=\"assets/svgs/person-svgrepo-com.svg#person-adult\"></use>\n        </svg>\n      </span>\n\n    </div>\n    <div class=\"passenger-card__info\">\n      <h3 class=\"passenger-card__name\">{{ name() }}</h3>\n      @if (email()) {\n      <p class=\"passenger-card__email\">{{ email() }}</p>\n      }\n      @if (phone()) {\n      <p class=\"passenger-card__phone\">{{ phone() }}</p>\n      }\n      @if (type()) {\n      <p class=\"passenger-card__type\">{{ type() }}</p>\n      }\n    </div>\n  </div>\n</div>", styles: [".passenger-card{margin-top:20px;background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000000d;border:1px solid #eee}.passenger-card__details{display:flex;align-items:flex-start}.passenger-card__icon{margin-right:12px;color:#777;font-size:1.2rem}.passenger-card__info{flex-grow:1}.passenger-card__name{font-size:1rem;font-weight:700;margin-bottom:4px;color:#333}.passenger-card__email,.passenger-card__phone,.passenger-card__type{font-size:.875rem;color:#666;margin-bottom:2px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumePassengerCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-resume-passenger-card', imports: [], template: "<div class=\"passenger-card\">\n  <div class=\"passenger-card__details\">\n    <div class=\"passenger-card__icon\">\n      <span>\n        <svg width=\"28\" height=\"28\">\n          <use xlink:href=\"assets/svgs/person-svgrepo-com.svg#person-adult\"></use>\n        </svg>\n      </span>\n\n    </div>\n    <div class=\"passenger-card__info\">\n      <h3 class=\"passenger-card__name\">{{ name() }}</h3>\n      @if (email()) {\n      <p class=\"passenger-card__email\">{{ email() }}</p>\n      }\n      @if (phone()) {\n      <p class=\"passenger-card__phone\">{{ phone() }}</p>\n      }\n      @if (type()) {\n      <p class=\"passenger-card__type\">{{ type() }}</p>\n      }\n    </div>\n  </div>\n</div>", styles: [".passenger-card{margin-top:20px;background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000000d;border:1px solid #eee}.passenger-card__details{display:flex;align-items:flex-start}.passenger-card__icon{margin-right:12px;color:#777;font-size:1.2rem}.passenger-card__info{flex-grow:1}.passenger-card__name{font-size:1rem;font-weight:700;margin-bottom:4px;color:#333}.passenger-card__email,.passenger-card__phone,.passenger-card__type{font-size:.875rem;color:#666;margin-bottom:2px}\n"] }]
        }] });

class PassengerCardContainerComponent {
    _passengerSave = inject(PassengerSaveUseCase);
    _passengerContact = inject(PassengerContactUseCase);
    contactSave$;
    listPassengers$;
    passengers = [];
    contact;
    ngOnInit() {
        this._passengerSave.initSubscriptions();
        this._passengerContact.initSubscriptions();
        this.listPassengers$ = this._passengerSave.getListPassengers$();
        this.contactSave$ = this._passengerContact.passengerContact$();
        this.getPassengers();
    }
    getPassengers() {
        this._passengerSave.getListPassengers$().pipe(map(data => data.map(passenger => {
            this.passengers.push(passenger);
        })))
            .subscribe();
        this._passengerContact.passengerContact$().pipe(map(contact => {
            this.contact = contact;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this._passengerSave.destroySubscriptions();
        this._passengerContact.destroySubscriptions();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerCardContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PassengerCardContainerComponent, isStandalone: true, selector: "lib-passenger-card-container", ngImport: i0, template: "<h1  class=\"title-h1\">Passenger</h1>\n<lib-resume-passenger-card\n  [name]=\"passengers[0]?.treatment+' '+passengers[0]?.name+' '+passengers[0]?.lastName\"\n  [email]=\"contact?.email\"\n  [phone]=\"contact?.prefix+' '+contact?.telephoneNumber\"\n  type=\"Adult\"\n/>\n@for (item of passengers; track $index) {\n  <lib-resume-passenger-card\n  [name]=\"item?.treatment+' '+item?.name+' '+item?.lastName\"\n  [email]=\"\"\n  [phone]=\"\"\n  [type]=\"\"\n/>\n}\n", dependencies: [{ kind: "component", type: ResumePassengerCardComponent, selector: "lib-resume-passenger-card", inputs: ["icon", "name", "email", "phone", "type"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PassengerCardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-passenger-card-container', imports: [ResumePassengerCardComponent], template: "<h1  class=\"title-h1\">Passenger</h1>\n<lib-resume-passenger-card\n  [name]=\"passengers[0]?.treatment+' '+passengers[0]?.name+' '+passengers[0]?.lastName\"\n  [email]=\"contact?.email\"\n  [phone]=\"contact?.prefix+' '+contact?.telephoneNumber\"\n  type=\"Adult\"\n/>\n@for (item of passengers; track $index) {\n  <lib-resume-passenger-card\n  [name]=\"item?.treatment+' '+item?.name+' '+item?.lastName\"\n  [email]=\"\"\n  [phone]=\"\"\n  [type]=\"\"\n/>\n}\n" }]
        }] });

class PriceBreakdownCardComponent {
    title = input('Price breakdown');
    totalPrice = input.required();
    currency = input('USD');
    details = input([]);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceBreakdownCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PriceBreakdownCardComponent, isStandalone: true, selector: "lib-price-breakdown-card", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, totalPrice: { classPropertyName: "totalPrice", publicName: "totalPrice", isSignal: true, isRequired: true, transformFunction: null }, currency: { classPropertyName: "currency", publicName: "currency", isSignal: true, isRequired: false, transformFunction: null }, details: { classPropertyName: "details", publicName: "details", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"price-breakdown\">\n    <h2 class=\"price-breakdown__title\">{{ title() }}</h2>\n    <div class=\"price-breakdown__separator\"></div>\n  \n    <div class=\"price-breakdown__details\">\n      @for (detail of details(); track detail) {\n        <div class=\"price-breakdown__item\">\n          <span class=\"price-breakdown__label\">{{ detail.label }}</span>\n          <span class=\"price-breakdown__amount\">{{ detail.amount | number: '1.2-2' }} {{ currency() }}</span>\n        </div>\n      }\n    </div>\n  \n    <div class=\"price-breakdown__total\">\n      <span class=\"price-breakdown__label\">Total Price</span>\n      <span class=\"price-breakdown__amount\">{{ totalPrice() | number: '1.2-2' }} {{ currency() }}</span>\n    </div>\n  </div>", styles: [".price-breakdown{margin-top:20px;background-color:#fff;border:1px solid #eee;border-radius:8px;padding:16px;font-family:sans-serif}.price-breakdown__title{font-size:1.2rem;font-weight:700;margin-bottom:16px;color:#333}.price-breakdown__details{margin-bottom:16px}.price-breakdown__item{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #eee}.price-breakdown__item:last-child{border-bottom:none}.price-breakdown__label{color:#555;font-size:.9rem}.price-breakdown__amount{font-weight:700;color:#333;font-size:.9rem}.price-breakdown__total{display:flex;justify-content:space-between;padding-top:16px;font-weight:700;border-top:1px solid #eee;color:#007bff}.price-breakdown__separator{width:100%;height:1px;color:#ccc;margin-bottom:10px;border:1px dashed}\n"], dependencies: [{ kind: "pipe", type: DecimalPipe, name: "number" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceBreakdownCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-price-breakdown-card', imports: [DecimalPipe], template: "<div class=\"price-breakdown\">\n    <h2 class=\"price-breakdown__title\">{{ title() }}</h2>\n    <div class=\"price-breakdown__separator\"></div>\n  \n    <div class=\"price-breakdown__details\">\n      @for (detail of details(); track detail) {\n        <div class=\"price-breakdown__item\">\n          <span class=\"price-breakdown__label\">{{ detail.label }}</span>\n          <span class=\"price-breakdown__amount\">{{ detail.amount | number: '1.2-2' }} {{ currency() }}</span>\n        </div>\n      }\n    </div>\n  \n    <div class=\"price-breakdown__total\">\n      <span class=\"price-breakdown__label\">Total Price</span>\n      <span class=\"price-breakdown__amount\">{{ totalPrice() | number: '1.2-2' }} {{ currency() }}</span>\n    </div>\n  </div>", styles: [".price-breakdown{margin-top:20px;background-color:#fff;border:1px solid #eee;border-radius:8px;padding:16px;font-family:sans-serif}.price-breakdown__title{font-size:1.2rem;font-weight:700;margin-bottom:16px;color:#333}.price-breakdown__details{margin-bottom:16px}.price-breakdown__item{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #eee}.price-breakdown__item:last-child{border-bottom:none}.price-breakdown__label{color:#555;font-size:.9rem}.price-breakdown__amount{font-weight:700;color:#333;font-size:.9rem}.price-breakdown__total{display:flex;justify-content:space-between;padding-top:16px;font-weight:700;border-top:1px solid #eee;color:#007bff}.price-breakdown__separator{width:100%;height:1px;color:#ccc;margin-bottom:10px;border:1px dashed}\n"] }]
        }] });

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

class BookingState {
    _factory = inject(StateFactory);
    costBreakdown$ = new BehaviorSubject(null);
    booking$ = new BehaviorSubject(null);
    store() {
        return {
            costBreakdown: this._factory.state(this.costBreakdown$),
            booking: this._factory.state(this.booking$)
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingState, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class State {
    _booking = inject(BookingState);
    get booking() {
        return this._booking.store();
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

class BookingService {
    mainUrl = 'http://localhost:8080/booking';
    http = inject(HttpClient);
    getCostBreakdown(costRequest) {
        return this.http.post(`${this.mainUrl}/cost`, costRequest);
    }
    makeBooking(request) {
        return this.http.post(`${this.mainUrl}`, request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class GetCostBreakdownUsecase {
    _service = inject(BookingService);
    _state = inject(State);
    subscriptions;
    constBreadown$() {
        return this._state.booking.costBreakdown.$();
    }
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(costRequest) {
        const userId = localStorage.getItem('id');
        this.subscriptions.add(this._service
            .getCostBreakdown({ ...costRequest, userId })
            .pipe(tap({
            next: (costBreakdown) => {
                this._state.booking.costBreakdown.set(costBreakdown);
            },
            error: (error) => {
                console.error('Error getting cost breakdown:', error);
            }
        }))
            .subscribe());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetCostBreakdownUsecase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetCostBreakdownUsecase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetCostBreakdownUsecase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PriceBreakdownContainerComponent {
    _selectedSeatsUsecase = inject(SelectSeatUseCase);
    _getCostBreakdown = inject(GetCostBreakdownUsecase);
    listSeatsIds;
    seatsIds = [];
    priceDetails = [];
    totalPrice = 0;
    currency = 'USD';
    ngOnInit() {
        this._selectedSeatsUsecase.initSubscriptions();
        this._getCostBreakdown.initSubscriptions();
        this.getSeatsIds();
    }
    ngOnDestroy() {
        this._getCostBreakdown.destroySubscriptions();
        this._selectedSeatsUsecase.destroySubscriptions();
    }
    getSeatsIds() {
        this._selectedSeatsUsecase
            .selectedSeatsId$()
            .pipe(tap((ids) => this.seatsIds = ids), tap(() => {
            this.getCostBreakdown();
        }))
            .subscribe();
    }
    getCostBreakdown() {
        this._getCostBreakdown.execute({
            passengers: this.seatsIds.map((id) => {
                return { seatId: id };
            }),
            userId: null,
        });
        this._getCostBreakdown.constBreadown$().pipe(tap((costBreakdown) => {
            if (costBreakdown) {
                this.updatePriceDetails(costBreakdown);
            }
            else {
                console.error('No cost breakdown found in state');
            }
        })).subscribe();
    }
    updatePriceDetails(costBreakdown) {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceBreakdownContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: PriceBreakdownContainerComponent, isStandalone: true, selector: "lib-price-breakdown-container", ngImport: i0, template: "<h1  class=\"title-h1\">Price Breakdown</h1>\n<lib-price-breakdown-card\n  [totalPrice]=\"totalPrice\"\n  [currency]=\"currency\"\n  [details]=\"priceDetails\"\n></lib-price-breakdown-card>\n", dependencies: [{ kind: "component", type: PriceBreakdownCardComponent, selector: "lib-price-breakdown-card", inputs: ["title", "totalPrice", "currency", "details"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceBreakdownContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-price-breakdown-container', imports: [PriceBreakdownCardComponent], template: "<h1  class=\"title-h1\">Price Breakdown</h1>\n<lib-price-breakdown-card\n  [totalPrice]=\"totalPrice\"\n  [currency]=\"currency\"\n  [details]=\"priceDetails\"\n></lib-price-breakdown-card>\n" }]
        }] });

class FlightDetailComponent {
    segmentLabel = input('');
    date = input('');
    flight = input({ origin: '', originTime: '', destination: '', destinationTime: '' });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightDetailComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: FlightDetailComponent, isStandalone: true, selector: "lib-flight-detail", inputs: { segmentLabel: { classPropertyName: "segmentLabel", publicName: "segmentLabel", isSignal: true, isRequired: false, transformFunction: null }, date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null }, flight: { classPropertyName: "flight", publicName: "flight", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flight-detail\">\n    <div class=\"flight-detail__header\">\n      <span class=\"flight-detail__label\">{{ segmentLabel() }}</span>\n      <span class=\"flight-detail__date\">{{ date() }}</span>\n    </div>\n  \n    <div class=\"flight-detail__times\">\n      <div class=\"flight-detail__time\">\n        <span class=\"flight-detail__airport\">{{ flight().origin }}</span>\n        <span class=\"flight-detail__time-value\">{{ flight().originTime }}</span>\n      </div>\n  \n      <div class=\"flight-detail__arrow\">\n        <hr />\n      </div>\n  \n      <div class=\"flight-detail__time\">\n        <span class=\"flight-detail__airport\">{{ flight().destination }}</span>\n        <span class=\"flight-detail__time-value\">{{ flight().destinationTime }}</span>\n      </div>\n    </div>\n  </div>", styles: [".flight-detail{padding:16px}.flight-detail__header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;font-size:.875rem}.flight-detail__label{font-weight:700}.flight-detail__date{color:#6b7280}.flight-detail__times{display:flex;justify-content:space-around;align-items:center}.flight-detail__time{text-align:center}.flight-detail__airport{font-weight:700;display:block}.flight-detail__time-value{display:block;font-size:1rem}.flight-detail__arrow{flex-grow:1;display:flex;align-items:center}.flight-detail__arrow hr{border:none;border-top:1px solid #9ca3af;width:100%}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightDetailComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-detail', imports: [], template: "<div class=\"flight-detail\">\n    <div class=\"flight-detail__header\">\n      <span class=\"flight-detail__label\">{{ segmentLabel() }}</span>\n      <span class=\"flight-detail__date\">{{ date() }}</span>\n    </div>\n  \n    <div class=\"flight-detail__times\">\n      <div class=\"flight-detail__time\">\n        <span class=\"flight-detail__airport\">{{ flight().origin }}</span>\n        <span class=\"flight-detail__time-value\">{{ flight().originTime }}</span>\n      </div>\n  \n      <div class=\"flight-detail__arrow\">\n        <hr />\n      </div>\n  \n      <div class=\"flight-detail__time\">\n        <span class=\"flight-detail__airport\">{{ flight().destination }}</span>\n        <span class=\"flight-detail__time-value\">{{ flight().destinationTime }}</span>\n      </div>\n    </div>\n  </div>", styles: [".flight-detail{padding:16px}.flight-detail__header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;font-size:.875rem}.flight-detail__label{font-weight:700}.flight-detail__date{color:#6b7280}.flight-detail__times{display:flex;justify-content:space-around;align-items:center}.flight-detail__time{text-align:center}.flight-detail__airport{font-weight:700;display:block}.flight-detail__time-value{display:block;font-size:1rem}.flight-detail__arrow{flex-grow:1;display:flex;align-items:center}.flight-detail__arrow hr{border:none;border-top:1px solid #9ca3af;width:100%}\n"] }]
        }] });

class PriceRowComponent {
    label = input('');
    price = input(0);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: PriceRowComponent, isStandalone: true, selector: "lib-price-row", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, price: { classPropertyName: "price", publicName: "price", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"price-row\">\n    <span class=\"price-row__label\">{{ label() }}</span>\n    <span class=\"price-row__price\">{{ price() }}</span>\n  </div>", styles: [".price-row{padding-left:16px;padding-right:16px;display:flex;justify-content:space-between;align-items:center;margin-bottom:.25rem}.price-row__label,.price-row__price{font-size:1rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PriceRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-price-row', imports: [], template: "<div class=\"price-row\">\n    <span class=\"price-row__label\">{{ label() }}</span>\n    <span class=\"price-row__price\">{{ price() }}</span>\n  </div>", styles: [".price-row{padding-left:16px;padding-right:16px;display:flex;justify-content:space-between;align-items:center;margin-bottom:.25rem}.price-row__label,.price-row__price{font-size:1rem}\n"] }]
        }] });

class TotalPriceComponent {
    totalPrice = input(0);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TotalPriceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: TotalPriceComponent, isStandalone: true, selector: "lib-total-price", inputs: { totalPrice: { classPropertyName: "totalPrice", publicName: "totalPrice", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"total-price\">\n    <span class=\"total-price__label\">Total price:</span>\n    <span class=\"total-price__price\">{{ totalPrice() }} USD</span>\n  </div>", styles: [".total-price{background-color:#1e3a8a;color:#fff;padding:.75rem;display:flex;justify-content:space-between;align-items:center}.total-price__label{font-weight:700;font-size:1.125rem}.total-price__price{font-size:1.125rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TotalPriceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-total-price', imports: [], template: "<div class=\"total-price\">\n    <span class=\"total-price__label\">Total price:</span>\n    <span class=\"total-price__price\">{{ totalPrice() }} USD</span>\n  </div>", styles: [".total-price{background-color:#1e3a8a;color:#fff;padding:.75rem;display:flex;justify-content:space-between;align-items:center}.total-price__label{font-weight:700;font-size:1.125rem}.total-price__price{font-size:1.125rem}\n"] }]
        }] });

class ResumeCardComponent {
    title = input('Flight Resume');
    departureDate = input('');
    returnDate = input('');
    outboundFlight = input({ origin: '', originTime: '', destination: '', destinationTime: '' });
    returnFlight = input({ origin: '', originTime: '', destination: '', destinationTime: '' });
    flightPrice = input(0);
    adultTicketPrice = input(0);
    totalPrice = input(0);
    disclaimerText = input('');
    passengers = input(0);
    confirmClicked = output();
    onConfirmClick() {
        this.confirmClicked.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumeCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: ResumeCardComponent, isStandalone: true, selector: "lib-resume-card", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, departureDate: { classPropertyName: "departureDate", publicName: "departureDate", isSignal: true, isRequired: false, transformFunction: null }, returnDate: { classPropertyName: "returnDate", publicName: "returnDate", isSignal: true, isRequired: false, transformFunction: null }, outboundFlight: { classPropertyName: "outboundFlight", publicName: "outboundFlight", isSignal: true, isRequired: false, transformFunction: null }, returnFlight: { classPropertyName: "returnFlight", publicName: "returnFlight", isSignal: true, isRequired: false, transformFunction: null }, flightPrice: { classPropertyName: "flightPrice", publicName: "flightPrice", isSignal: true, isRequired: false, transformFunction: null }, adultTicketPrice: { classPropertyName: "adultTicketPrice", publicName: "adultTicketPrice", isSignal: true, isRequired: false, transformFunction: null }, totalPrice: { classPropertyName: "totalPrice", publicName: "totalPrice", isSignal: true, isRequired: false, transformFunction: null }, disclaimerText: { classPropertyName: "disclaimerText", publicName: "disclaimerText", isSignal: true, isRequired: false, transformFunction: null }, passengers: { classPropertyName: "passengers", publicName: "passengers", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { confirmClicked: "confirmClicked" }, ngImport: i0, template: "<div class=\"flight\">\n  <section class=\"flight__header\">\n    <h2 class=\"flight__title\">{{ title() }}</h2>\n  </section>\n\n  <div class=\"flight__flight-segment\">\n    <lib-flight-detail\n      [segmentLabel]=\"'Go to'\"\n      [date]=\"departureDate()\"\n      [flight]=\"outboundFlight()\"\n    ></lib-flight-detail>\n  </div>\n\n  <div class=\"flight__flight-segment\">\n    <lib-flight-detail\n      [segmentLabel]=\"'Return'\"\n      [date]=\"returnDate()\"\n      [flight]=\"returnFlight()\"\n    ></lib-flight-detail>\n  </div>\n\n  <div class=\"flight__prices\">\n    <lib-price-row label=\"Flights\" [price]=\"flightPrice()\"></lib-price-row>\n    <lib-price-row\n      [label]=\"passengers() + ' ' + 'Adult'\"\n      [price]=\"adultTicketPrice()\"\n    ></lib-price-row>\n  </div>\n\n  <div class=\"flight__total\">\n    <lib-total-price [totalPrice]=\"totalPrice()\"></lib-total-price>\n  </div>\n\n  <div class=\"flight__disclaimer\">\n    <span>{{ disclaimerText() }}</span>\n  </div>\n  <div style=\"padding: 16px\">\n    <button class=\"flight__button\" (click)=\"onConfirmClick()\">Continuar</button>\n  </div>\n</div>\n", styles: [".flight{max-width:300px;border-radius:10px;background-color:#fff;box-shadow:0 2px 4px #0000001a;font-family:sans-serif;color:#1e293b}.flight__header{background-color:#3b82f6;color:#fff;padding:10px;border-radius:10px 10px 0 0;margin-bottom:10px}.flight__title{font-size:1.25rem;margin:0;font-weight:500;text-align:center}.flight__flight-segment,.flight__prices,.flight__total{margin-bottom:1rem}.flight__disclaimer{font-size:1rem;color:#6b7280;text-align:center;padding:10px}.flight__button{background-color:#9f21d3;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:10px;cursor:pointer;font-size:1rem;display:block;width:100%;text-align:center}.flight__button:hover{background-color:#7c0ea5}\n"], dependencies: [{ kind: "component", type: FlightDetailComponent, selector: "lib-flight-detail", inputs: ["segmentLabel", "date", "flight"] }, { kind: "component", type: PriceRowComponent, selector: "lib-price-row", inputs: ["label", "price"] }, { kind: "component", type: TotalPriceComponent, selector: "lib-total-price", inputs: ["totalPrice"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumeCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-resume-card', imports: [FlightDetailComponent, PriceRowComponent, TotalPriceComponent], template: "<div class=\"flight\">\n  <section class=\"flight__header\">\n    <h2 class=\"flight__title\">{{ title() }}</h2>\n  </section>\n\n  <div class=\"flight__flight-segment\">\n    <lib-flight-detail\n      [segmentLabel]=\"'Go to'\"\n      [date]=\"departureDate()\"\n      [flight]=\"outboundFlight()\"\n    ></lib-flight-detail>\n  </div>\n\n  <div class=\"flight__flight-segment\">\n    <lib-flight-detail\n      [segmentLabel]=\"'Return'\"\n      [date]=\"returnDate()\"\n      [flight]=\"returnFlight()\"\n    ></lib-flight-detail>\n  </div>\n\n  <div class=\"flight__prices\">\n    <lib-price-row label=\"Flights\" [price]=\"flightPrice()\"></lib-price-row>\n    <lib-price-row\n      [label]=\"passengers() + ' ' + 'Adult'\"\n      [price]=\"adultTicketPrice()\"\n    ></lib-price-row>\n  </div>\n\n  <div class=\"flight__total\">\n    <lib-total-price [totalPrice]=\"totalPrice()\"></lib-total-price>\n  </div>\n\n  <div class=\"flight__disclaimer\">\n    <span>{{ disclaimerText() }}</span>\n  </div>\n  <div style=\"padding: 16px\">\n    <button class=\"flight__button\" (click)=\"onConfirmClick()\">Continuar</button>\n  </div>\n</div>\n", styles: [".flight{max-width:300px;border-radius:10px;background-color:#fff;box-shadow:0 2px 4px #0000001a;font-family:sans-serif;color:#1e293b}.flight__header{background-color:#3b82f6;color:#fff;padding:10px;border-radius:10px 10px 0 0;margin-bottom:10px}.flight__title{font-size:1.25rem;margin:0;font-weight:500;text-align:center}.flight__flight-segment,.flight__prices,.flight__total{margin-bottom:1rem}.flight__disclaimer{font-size:1rem;color:#6b7280;text-align:center;padding:10px}.flight__button{background-color:#9f21d3;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:10px;cursor:pointer;font-size:1rem;display:block;width:100%;text-align:center}.flight__button:hover{background-color:#7c0ea5}\n"] }]
        }] });

class CreateBookingUsecase {
    _service = inject(BookingService);
    _state = inject(State);
    _router = inject(Router);
    subscriptions;
    booking$() {
        return this._state.booking.booking.$();
    }
    initSubscriptions() {
        this.subscriptions = new Subscription();
    }
    destroySubscriptions() {
        this.subscriptions.unsubscribe();
    }
    execute(request) {
        const userId = localStorage.getItem('id');
        this.subscriptions.add(this._service
            .makeBooking({ ...request, userId })
            .pipe(tap({
            next: (booking) => {
                this._state.booking.booking.set(booking);
                this._router.navigate(['']);
            },
            error: (error) => {
                console.error('Error getting cost breakdown:', error);
            }
        }))
            .subscribe());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateBookingUsecase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateBookingUsecase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateBookingUsecase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class ResumeCardContainerComponent {
    _passengerSave = inject(PassengerSaveUseCase);
    _passengerContact = inject(PassengerContactUseCase);
    _selectedSeatsUsecase = inject(SelectSeatUseCase);
    _getCostBreakdown = inject(GetCostBreakdownUsecase);
    _getFlightSelected = inject(GetFlightsSelectedUseCase);
    _createBookingUseCase = inject(CreateBookingUsecase);
    _createPay = inject(MethodPayUseCase);
    contactSave$;
    listPassengers$;
    selectedSeatsId$;
    request;
    flightSumary = {
        title: 'Flight summary',
        departureDate: '',
        returnDate: '',
        outboundFlight: {
            origin: '',
            originTime: '',
            destination: '',
            destinationTime: ''
        },
        returnFlight: {
            origin: '',
            originTime: '',
            destination: '',
            destinationTime: ''
        },
        flightPrice: 0,
        adultTicketPrice: 0,
        totalPrice: 0,
        disclaimerText: 'Taxes, surcharges and discounts are included in the final price.',
        passengers: 0
    };
    onContinue() {
        this._createBookingUseCase.execute(this.request);
    }
    ngOnInit() {
        this._passengerSave.initSubscriptions();
        this._passengerContact.initSubscriptions();
        this._selectedSeatsUsecase.initSubscriptions();
        this._getCostBreakdown.initSubscriptions();
        this._getFlightSelected.initSubscription();
        this._createPay.initSubscriptions();
        this._createBookingUseCase.initSubscriptions();
        this.buildBookingRequest();
    }
    ngOnDestroy() {
        this._passengerSave.destroySubscriptions();
        this._passengerContact.destroySubscriptions();
        this._selectedSeatsUsecase.destroySubscriptions();
        this._getCostBreakdown.destroySubscriptions();
        this._getFlightSelected.destroySubscription();
        this._createBookingUseCase.destroySubscriptions();
        this._createPay.destroySubscriptions();
    }
    buildBookingRequest() {
        const passengers$ = this._passengerSave.getListPassengers$();
        const seatIds$ = this._selectedSeatsUsecase.selectedSeatsId$();
        const costBreakdown$ = this._getCostBreakdown.constBreadown$();
        const contact$ = this._passengerContact.passengerContact$();
        const flights$ = this._getFlightSelected.flight$();
        const methodPay$ = this._createPay.getMethodPay$();
        combineLatest([passengers$, seatIds$, costBreakdown$, contact$, flights$, methodPay$]).pipe(switchMap(([passengers, seatIds, costBreakdown, contact, flight, methodPay]) => {
            if (!passengers || !seatIds || !costBreakdown || !contact ||
                !passengers.length || !seatIds.length || !flight || !methodPay) {
                return of(null);
            }
            const passengersWithSeats = passengers.map((passenger, index) => ({
                passengerTitle: passenger?.treatment,
                passengerName: passenger?.name,
                passengerLastName: passenger?.lastName,
                passengerType: 'ADULT',
                seatId: seatIds[index] || null,
            }));
            this.flightSumary = {
                title: 'Flight summary',
                departureDate: flight?.origin.departure,
                returnDate: flight?.origin.arrival,
                outboundFlight: {
                    origin: flight?.origin.origin,
                    originTime: flight?.origin.departure,
                    destination: flight?.origin.destination,
                    destinationTime: flight?.origin.arrival
                },
                returnFlight: {
                    origin: flight?.destination.origin,
                    originTime: flight?.destination.departure,
                    destination: flight?.destination.destination,
                    destinationTime: flight?.destination.arrival
                },
                flightPrice: costBreakdown?.totalAmount,
                adultTicketPrice: costBreakdown?.ticketPrice,
                totalPrice: costBreakdown?.totalAmount,
                disclaimerText: 'Taxes, surcharges and discounts are included in the final price.',
                passengers: passengersWithSeats.length
            };
            const request = {
                bookingStatus: 'CONFIRMED',
                bookingPrice: costBreakdown?.ticketPrice,
                discount: costBreakdown?.discount,
                flightId: flight?.origin.id,
                userId: null,
                paymentMethod: methodPay,
                email: contact?.email,
                prefix: contact?.prefix,
                phoneNumber: contact?.telephoneNumber,
                departureCity: flight?.origin.origin,
                arrivalCity: flight?.origin.destination,
                departureDate: flight?.origin.departure,
                arrivalDate: flight?.origin.arrival,
                airportTax: costBreakdown?.airportTax,
                additionalCharges: costBreakdown?.additionalCharges,
                fuelInsurance: costBreakdown?.fuelInsurance,
                bookingFee: costBreakdown?.bookingFee,
                totalAmount: costBreakdown?.totalAmount,
                ticketPrice: costBreakdown?.ticketPrice,
                keyNotes: 'Hold you things  pls',
                passengers: passengersWithSeats
            };
            return of(request);
        }), tap(request => {
            if (request) {
                this.request = request;
            }
        })).subscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumeCardContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: ResumeCardContainerComponent, isStandalone: true, selector: "lib-resume-card-container", ngImport: i0, template: "<lib-resume-card\n  [title]=\"flightSumary.title\"\n  [departureDate]=\"flightSumary.departureDate\"\n  [returnDate]=\"flightSumary.returnDate\"\n  [outboundFlight]=\"flightSumary.outboundFlight\"\n  [returnFlight]=\"flightSumary.returnFlight\"\n  [flightPrice]=\"flightSumary.flightPrice\"\n  [adultTicketPrice]=\"flightSumary.adultTicketPrice\"\n  [totalPrice]=\"flightSumary.totalPrice\"\n  [passengers]=\"flightSumary.passengers\"\n  [disclaimerText]=\"flightSumary.disclaimerText\"\n  (confirmClicked)=\"onContinue()\"\n>\n</lib-resume-card>\n", dependencies: [{ kind: "component", type: ResumeCardComponent, selector: "lib-resume-card", inputs: ["title", "departureDate", "returnDate", "outboundFlight", "returnFlight", "flightPrice", "adultTicketPrice", "totalPrice", "disclaimerText", "passengers"], outputs: ["confirmClicked"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ResumeCardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-resume-card-container', imports: [ResumeCardComponent], template: "<lib-resume-card\n  [title]=\"flightSumary.title\"\n  [departureDate]=\"flightSumary.departureDate\"\n  [returnDate]=\"flightSumary.returnDate\"\n  [outboundFlight]=\"flightSumary.outboundFlight\"\n  [returnFlight]=\"flightSumary.returnFlight\"\n  [flightPrice]=\"flightSumary.flightPrice\"\n  [adultTicketPrice]=\"flightSumary.adultTicketPrice\"\n  [totalPrice]=\"flightSumary.totalPrice\"\n  [passengers]=\"flightSumary.passengers\"\n  [disclaimerText]=\"flightSumary.disclaimerText\"\n  (confirmClicked)=\"onContinue()\"\n>\n</lib-resume-card>\n" }]
        }] });

class BookingResumeLayoutComponent {
    _bookingHeaderService = inject(BookingHeaderService);
    ngOnInit() {
        this._bookingHeaderService.sendBookingHeader({
            title: 'Booking',
            subtitle: 'Make your reservation here'
        });
    }
    onDetailsClick() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingResumeLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: BookingResumeLayoutComponent, isStandalone: true, selector: "lib-booking-resume-layout", ngImport: i0, template: "<section class=\"booking-resume-layout\">\n  <div class=\"booking-resume-layout__flights\">\n    <lib-flight-card-container></lib-flight-card-container>\n    <lib-passenger-card-container></lib-passenger-card-container>\n    <lib-price-breakdown-container></lib-price-breakdown-container>\n  </div>\n\n  <div class=\"booking-resume-layout__resume\">\n    <lib-resume-card-container></lib-resume-card-container>\n  </div>\n</section>\n", styles: [".booking-resume-layout{background-color:#f8f9fa;display:flex;margin:0 auto;width:930px;padding-top:20px}.booking-resume-layout__flights{width:70%;padding-right:20px}.booking-resume-layout__resume{width:30%;position:sticky;top:17%;height:fit-content}\n"], dependencies: [{ kind: "component", type: FlightCardContainerComponent, selector: "lib-flight-card-container" }, { kind: "component", type: PassengerCardContainerComponent, selector: "lib-passenger-card-container" }, { kind: "component", type: PriceBreakdownContainerComponent, selector: "lib-price-breakdown-container" }, { kind: "component", type: ResumeCardContainerComponent, selector: "lib-resume-card-container" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BookingResumeLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-booking-resume-layout', imports: [
                        FlightCardContainerComponent,
                        PassengerCardContainerComponent,
                        PriceBreakdownContainerComponent,
                        ResumeCardContainerComponent
                    ], template: "<section class=\"booking-resume-layout\">\n  <div class=\"booking-resume-layout__flights\">\n    <lib-flight-card-container></lib-flight-card-container>\n    <lib-passenger-card-container></lib-passenger-card-container>\n    <lib-price-breakdown-container></lib-price-breakdown-container>\n  </div>\n\n  <div class=\"booking-resume-layout__resume\">\n    <lib-resume-card-container></lib-resume-card-container>\n  </div>\n</section>\n", styles: [".booking-resume-layout{background-color:#f8f9fa;display:flex;margin:0 auto;width:930px;padding-top:20px}.booking-resume-layout__flights{width:70%;padding-right:20px}.booking-resume-layout__resume{width:30%;position:sticky;top:17%;height:fit-content}\n"] }]
        }] });

const bookingRoutes = [
    {
        path: '',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: BookingResumeLayoutComponent,
            }
        ]
    }
];

/**
 * Generated bundle index. Do not edit.
 */

export { bookingRoutes };
//# sourceMappingURL=booking.mjs.map
