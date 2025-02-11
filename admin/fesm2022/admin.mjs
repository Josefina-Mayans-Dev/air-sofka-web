import * as i0 from '@angular/core';
import { inject, input, output, Component, Injectable, EventEmitter, Output, Input, signal } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent, ButtonComponent, LoadingService, LoadingComponent, authGuard } from 'shared';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap, delay, finalize, Subject, filter, takeUntil, map } from 'rxjs';
import * as i1$1 from '@angular/router';
import { Router, RouterOutlet, NavigationEnd, RouterLink, ActivatedRoute } from '@angular/router';
import * as i1$2 from '@angular/common';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

class CreateFlightComponent {
    fb = inject(FormBuilder);
    planes = input([]);
    onSubmit = output();
    originInput = {
        id: 'origin',
        label: 'Origin',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'origin',
        required: true,
        disabled: false,
    };
    destinationInput = {
        id: 'destination',
        label: 'Destination',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'destination',
        required: true,
        disabled: false,
    };
    priceInput = {
        id: 'price',
        label: 'Price',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'price',
        required: true,
        disabled: false,
    };
    departureInput = {
        id: 'departure',
        label: 'Departure',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'departure',
        required: true,
        disabled: false,
    };
    arrivalInput = {
        id: 'arrival',
        label: 'Arrival',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'arrival',
        required: true,
        disabled: false,
    };
    form = this.fb.group({
        origin: ['', [Validators.required]],
        destination: ['', [Validators.required]],
        price: ['', [Validators.required]],
        plane: ['', [Validators.required]],
        departure: ['', [Validators.required]],
        arrival: ['', [Validators.required]],
    });
    submitButtonData = {
        class: 'dark',
        size: 'large',
        label: 'Create',
        disabled: true,
    };
    validateForm() {
        this.submitButtonData.disabled = this.form.invalid;
    }
    submit() {
        this.onSubmit.emit({
            origin: this.form.get('origin').value,
            destination: this.form.get('destination').value,
            price: this.form.get('price').value,
            idPlane: this.form.get('plane').value,
            departure: this.form.get('departure').value,
            arrival: this.form.get('arrival').value,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: CreateFlightComponent, isStandalone: true, selector: "lib-create-flight", inputs: { planes: { classPropertyName: "planes", publicName: "planes", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"form\">\n  <div>\n    <app-input\n      [inputData]=\"originInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"destinationInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"priceInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div class=\"form__group\">\n    <label for=\"plane\" class=\"form__label\">Plane</label>\n    <select\n      name=\"plane\"\n      id=\"plane\"\n      required\n      (change)=\"validateForm()\"\n      formControlName=\"plane\"\n      class=\"form__select\"\n    >\n      <option value=\"\" disabled selected>Select a plane</option>\n      @for (plane of planes(); track $index) {\n      <option [value]=\"plane.id\">{{ plane.model }}</option>\n      }\n    </select>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"departureInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"arrivalInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-flight', imports: [ReactiveFormsModule, InputComponent, ButtonComponent], template: "<form [formGroup]=\"form\" class=\"form\">\n  <div>\n    <app-input\n      [inputData]=\"originInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"destinationInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"priceInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div class=\"form__group\">\n    <label for=\"plane\" class=\"form__label\">Plane</label>\n    <select\n      name=\"plane\"\n      id=\"plane\"\n      required\n      (change)=\"validateForm()\"\n      formControlName=\"plane\"\n      class=\"form__select\"\n    >\n      <option value=\"\" disabled selected>Select a plane</option>\n      @for (plane of planes(); track $index) {\n      <option [value]=\"plane.id\">{{ plane.model }}</option>\n      }\n    </select>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"departureInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"arrivalInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"] }]
        }] });

class GetPlanesService {
    http = inject(HttpClient);
    get() {
        return this.http.get(`http://localhost:8080/planes`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
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

class PlanesState {
    _factory = inject(StateFactory);
    _planes$ = new BehaviorSubject([]);
    store() {
        return this._factory.state(this._planes$);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesState, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesState, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesState, decorators: [{
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

class State {
    _planes = inject(PlanesState);
    _flights = inject(FlightsState);
    get planes() {
        return this._planes.store();
    }
    get flights() {
        return this._flights.store();
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

class GetPlanesUseCase {
    _service = inject(GetPlanesService);
    _state = inject(State);
    subscriptions;
    planes$() {
        return this._state.planes.$();
    }
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    execute() {
        this.subscriptions.add(this._service
            .get()
            .pipe(tap((planes) => {
            this._state.planes.set(planes);
        }))
            .subscribe({}));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: GetPlanesUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateFlightService {
    http = inject(HttpClient);
    create(request) {
        return this.http.post('http://localhost:8080/flights', request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateFlightUseCase {
    _service = inject(CreateFlightService);
    _state = inject(State);
    _router = inject(Router);
    _loading = inject(LoadingService);
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
    execute(request) {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .create(request)
            .pipe(delay(2000), finalize(() => this._loading.setLoading(false)), tap((flight) => {
            this._state.flights.set([
                ...this._state.flights.snapshot(),
                flight,
            ]);
        }))
            .subscribe({
            next: () => {
                this._router.navigate(['/admin']);
            },
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateFlightContainerComponent {
    _planesUseCase = inject(GetPlanesUseCase);
    _flightUseCase = inject(CreateFlightUseCase);
    planes = [];
    ngOnInit() {
        this._planesUseCase.initSubscription();
        this._flightUseCase.initSubscription();
        this.getPlanes();
        this._planesUseCase.planes$().subscribe({
            next: (response) => {
                this.planes = response;
            },
        });
    }
    getPlanes() {
        this._planesUseCase.execute();
    }
    createFlight(request) {
        this._flightUseCase.execute(request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: CreateFlightContainerComponent, isStandalone: true, selector: "lib-create-flight-container", ngImport: i0, template: "<lib-create-flight [planes]=\"planes\" (onSubmit)=\"createFlight($event)\" />\n", dependencies: [{ kind: "component", type: CreateFlightComponent, selector: "lib-create-flight", inputs: ["planes"], outputs: ["onSubmit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateFlightContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-flight-container', imports: [CreateFlightComponent], template: "<lib-create-flight [planes]=\"planes\" (onSubmit)=\"createFlight($event)\" />\n" }]
        }] });

class FormLayoutComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FormLayoutComponent, isStandalone: true, selector: "lib-form-layout", ngImport: i0, template: "<main class=\"main\">\n  <div class=\"main__container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<lib-loading></lib-loading>\n", styles: [".main{min-height:100dvh;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6}.main__container{background-color:#fff;padding:20px;border-radius:10px;width:448px}\n"], dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: LoadingComponent, selector: "lib-loading" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FormLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-form-layout', imports: [RouterOutlet, LoadingComponent], template: "<main class=\"main\">\n  <div class=\"main__container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<lib-loading></lib-loading>\n", styles: [".main{min-height:100dvh;display:flex;align-items:center;justify-content:center;background-color:#f3f4f6}.main__container{background-color:#fff;padding:20px;border-radius:10px;width:448px}\n"] }]
        }] });

class AdminLayoutComponent {
    router = inject(Router);
    destroy$ = new Subject();
    isPlanes = false;
    ngOnInit() {
        this.isPlanes = this.router.url.includes('planes');
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.isPlanes = this.router.url.includes('planes');
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AdminLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: AdminLayoutComponent, isStandalone: true, selector: "lib-admin-layout", ngImport: i0, template: "<header class=\"header\">\n  <a [routerLink]=\"['/']\" class=\"header__button--secondary header__button\"\n    >Go home</a\n  >\n  @if (!isPlanes) {\n  <div class=\"header__links\">\n    <a\n      [routerLink]=\"['/admin/planes']\"\n      class=\"header__button--main header__button\"\n      >View planes</a\n    >\n    <a\n      [routerLink]=\"['/admin/create']\"\n      class=\"header__button--main header__button\"\n      >Create flight</a\n    >\n  </div>\n  } @else {\n  <div class=\"header__links\">\n    <a [routerLink]=\"['/admin']\" class=\"header__button--main header__button\"\n      >View flights</a\n    >\n    <a\n      [routerLink]=\"['/admin/create/planes']\"\n      class=\"header__button--main header__button\"\n      >Create plane</a\n    >\n    <a\n      [routerLink]=\"['/admin/create/maintenances']\"\n      class=\"header__button--main header__button\"\n      >Create maintenance</a\n    >\n  </div>\n  }\n</header>\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n<lib-loading></lib-loading>\n", styles: [".header{display:flex;justify-content:space-between;padding:16px;margin-bottom:20px}.header__links{display:flex;gap:8px}.header__button{text-decoration:none;align-content:center;text-align:center;height:46px;padding:8px 16px;border:1px solid;border-radius:14px;font-size:1rem;min-width:107px;font-weight:700;min-height:30px;transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out}.header__button--main{background:#2d69e1;border:transparent;color:#fff}.header__button--main:hover{background-color:#1f5cd6}.header__button--secondary{color:#2d69e1}.header__button--secondary:hover{background:#2d69e1;color:#fff}.header__button:hover{cursor:pointer}.main{margin:0 8px}\n"], dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name", "routerOutletData"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: LoadingComponent, selector: "lib-loading" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: AdminLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-admin-layout', imports: [RouterOutlet, RouterLink, LoadingComponent], template: "<header class=\"header\">\n  <a [routerLink]=\"['/']\" class=\"header__button--secondary header__button\"\n    >Go home</a\n  >\n  @if (!isPlanes) {\n  <div class=\"header__links\">\n    <a\n      [routerLink]=\"['/admin/planes']\"\n      class=\"header__button--main header__button\"\n      >View planes</a\n    >\n    <a\n      [routerLink]=\"['/admin/create']\"\n      class=\"header__button--main header__button\"\n      >Create flight</a\n    >\n  </div>\n  } @else {\n  <div class=\"header__links\">\n    <a [routerLink]=\"['/admin']\" class=\"header__button--main header__button\"\n      >View flights</a\n    >\n    <a\n      [routerLink]=\"['/admin/create/planes']\"\n      class=\"header__button--main header__button\"\n      >Create plane</a\n    >\n    <a\n      [routerLink]=\"['/admin/create/maintenances']\"\n      class=\"header__button--main header__button\"\n      >Create maintenance</a\n    >\n  </div>\n  }\n</header>\n<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n<lib-loading></lib-loading>\n", styles: [".header{display:flex;justify-content:space-between;padding:16px;margin-bottom:20px}.header__links{display:flex;gap:8px}.header__button{text-decoration:none;align-content:center;text-align:center;height:46px;padding:8px 16px;border:1px solid;border-radius:14px;font-size:1rem;min-width:107px;font-weight:700;min-height:30px;transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out}.header__button--main{background:#2d69e1;border:transparent;color:#fff}.header__button--main:hover{background-color:#1f5cd6}.header__button--secondary{color:#2d69e1}.header__button--secondary:hover{background:#2d69e1;color:#fff}.header__button:hover{cursor:pointer}.main{margin:0 8px}\n"] }]
        }] });

class GetFlightsService {
    http = inject(HttpClient);
    get() {
        return this.http.get(`http://localhost:8080/flights`);
    }
    getById(id) {
        return this.get().pipe(map((flights) => flights.find(flight => flight.id === id)));
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
    execute() {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .get()
            .pipe(finalize(() => this._loading.setLoading(false)))
            .pipe(tap((flights) => {
            this._state.flights.set(flights);
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

class FlightCardComponent {
    router;
    flight = input.required();
    edit = new EventEmitter();
    constructor(router) {
        this.router = router;
    }
    onEdit() {
        const flight = this.flight();
        if (flight) {
            this.edit.emit(flight);
            console.log('Edit flight', flight);
            // Navegar a la ruta de actualización con el ID del vuelo
            this.router.navigate(['/admin/update/flight', flight.id]); // Navegar con /admin/update/flight/:id
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: FlightCardComponent, isStandalone: true, selector: "lib-flight-card", inputs: { flight: { classPropertyName: "flight", publicName: "flight", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { edit: "edit" }, ngImport: i0, template: "<div class=\"card\">\n  <img src=\"assets/svgs/flight.svg\" alt=\"Flight\">\n  <div class=\"card__details\">\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Origin:</span>\n      <span>{{ flight().origin }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Destination:</span>\n      <span>{{ flight().destination }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Departure:</span>\n      <span>{{ flight().departure | date : \"short\" }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Arrival:</span>\n      <span>{{ flight().arrival | date : \"short\" }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Price:</span>\n      <span>{{ flight().price | currency : \"USD\" : \"symbol\" : \"1.0-2\"}}</span>\n    </div>\n\n    <!-- Bot\u00F3n de edici\u00F3n -->\n    <button class=\"card__details__edit-button\" (click)=\"onEdit()\">Edit</button>\n  </div>\n</div>", styles: [".card{background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000001a;width:300px;display:flex;flex-direction:column;align-items:center;gap:16px}.card img{width:80px}.card__details{display:flex;flex-direction:column;gap:8px;width:100%}.card__details__item{display:flex;justify-content:space-between;color:#555}.card__details__item--label{font-weight:700;color:#333}.card__details__edit-button{background-color:#007bff;color:#fff;padding:8px 12px;border:none;border-radius:4px;cursor:pointer;font-size:14px;transition:background-color .3s ease}.card__details__edit-button:hover{background-color:#0056b3}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }, { kind: "pipe", type: CurrencyPipe, name: "currency" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flight-card', imports: [DatePipe, CurrencyPipe], template: "<div class=\"card\">\n  <img src=\"assets/svgs/flight.svg\" alt=\"Flight\">\n  <div class=\"card__details\">\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Origin:</span>\n      <span>{{ flight().origin }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Destination:</span>\n      <span>{{ flight().destination }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Departure:</span>\n      <span>{{ flight().departure | date : \"short\" }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Arrival:</span>\n      <span>{{ flight().arrival | date : \"short\" }}</span>\n    </div>\n\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Price:</span>\n      <span>{{ flight().price | currency : \"USD\" : \"symbol\" : \"1.0-2\"}}</span>\n    </div>\n\n    <!-- Bot\u00F3n de edici\u00F3n -->\n    <button class=\"card__details__edit-button\" (click)=\"onEdit()\">Edit</button>\n  </div>\n</div>", styles: [".card{background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000001a;width:300px;display:flex;flex-direction:column;align-items:center;gap:16px}.card img{width:80px}.card__details{display:flex;flex-direction:column;gap:8px;width:100%}.card__details__item{display:flex;justify-content:space-between;color:#555}.card__details__item--label{font-weight:700;color:#333}.card__details__edit-button{background-color:#007bff;color:#fff;padding:8px 12px;border:none;border-radius:4px;cursor:pointer;font-size:14px;transition:background-color .3s ease}.card__details__edit-button:hover{background-color:#0056b3}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }], propDecorators: { edit: [{
                type: Output
            }] } });

class FlightsComponent {
    flights = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: FlightsComponent, isStandalone: true, selector: "lib-flights", inputs: { flights: { classPropertyName: "flights", publicName: "flights", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"flights\">\n  @for (flight of flights(); track $index) {\n  <lib-flight-card [flight]=\"flight\"></lib-flight-card>\n  }\n</div>\n", styles: [".flights{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}\n"], dependencies: [{ kind: "component", type: FlightCardComponent, selector: "lib-flight-card", inputs: ["flight"], outputs: ["edit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flights', imports: [FlightCardComponent], template: "<div class=\"flights\">\n  @for (flight of flights(); track $index) {\n  <lib-flight-card [flight]=\"flight\"></lib-flight-card>\n  }\n</div>\n", styles: [".flights{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}\n"] }]
        }] });

class FlightsContainerComponent {
    _useCase = inject(GetFlightsUseCase);
    flights = [];
    ngOnInit() {
        this._useCase.initSubscription();
        this.getFlights();
        this._useCase.flights$().subscribe({
            next: (response) => (this.flights = response),
        });
    }
    ngOnDestroy() {
        this._useCase.destroySubscription();
    }
    getFlights() {
        this._useCase.execute();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: FlightsContainerComponent, isStandalone: true, selector: "lib-flights-container", ngImport: i0, template: "<lib-flights [flights]=\"flights\"></lib-flights>\n", dependencies: [{ kind: "component", type: FlightsComponent, selector: "lib-flights", inputs: ["flights"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: FlightsContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-flights-container', imports: [FlightsComponent], template: "<lib-flights [flights]=\"flights\"></lib-flights>\n" }]
        }] });

class PlaneCardComponent {
    plane = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlaneCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.1.4", type: PlaneCardComponent, isStandalone: true, selector: "lib-plane-card", inputs: { plane: { classPropertyName: "plane", publicName: "plane", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"card\">\n  <img src=\"assets/svgs/airplane.svg\" alt=\"Airplane\">\n  <div class=\"card__details\">\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Model:</span>\n      <span>{{ plane().model }}</span>\n    </div>\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">State:</span>\n      <span\n        [ngClass]=\"\n          plane().state === 'DISABLED'\n            ? 'card__details__item--disabled'\n            : 'card__details__item--enabled'\n        \"\n        >{{ plane().state }}</span\n      >\n    </div>\n  </div>\n</div>\n", styles: [".card{background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000001a;width:300px;display:flex;flex-direction:column;align-items:center;gap:16px}.card img{width:80px}.card__details{display:flex;flex-direction:column;justify-content:space-between;gap:8px;width:100%}.card__details__item{display:flex;justify-content:space-between;color:#555}.card__details__item--label{font-weight:700;color:#333}.card__details__item--disabled{color:red}.card__details__item--enabled{color:green}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlaneCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-plane-card', imports: [CommonModule], template: "<div class=\"card\">\n  <img src=\"assets/svgs/airplane.svg\" alt=\"Airplane\">\n  <div class=\"card__details\">\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">Model:</span>\n      <span>{{ plane().model }}</span>\n    </div>\n    <div class=\"card__details__item\">\n      <span class=\"card__details__item--label\">State:</span>\n      <span\n        [ngClass]=\"\n          plane().state === 'DISABLED'\n            ? 'card__details__item--disabled'\n            : 'card__details__item--enabled'\n        \"\n        >{{ plane().state }}</span\n      >\n    </div>\n  </div>\n</div>\n", styles: [".card{background-color:#fff;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000001a;width:300px;display:flex;flex-direction:column;align-items:center;gap:16px}.card img{width:80px}.card__details{display:flex;flex-direction:column;justify-content:space-between;gap:8px;width:100%}.card__details__item{display:flex;justify-content:space-between;color:#555}.card__details__item--label{font-weight:700;color:#333}.card__details__item--disabled{color:red}.card__details__item--enabled{color:green}\n"] }]
        }] });

class PlanesComponent {
    planes = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: PlanesComponent, isStandalone: true, selector: "lib-planes", inputs: { planes: { classPropertyName: "planes", publicName: "planes", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"planes\">\n    @for (plane of planes(); track $index) {\n        <lib-plane-card [plane]=\"plane\"></lib-plane-card>\n    }\n</div>\n", styles: [".planes{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}\n"], dependencies: [{ kind: "component", type: PlaneCardComponent, selector: "lib-plane-card", inputs: ["plane"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-planes', imports: [PlaneCardComponent], template: "<div class=\"planes\">\n    @for (plane of planes(); track $index) {\n        <lib-plane-card [plane]=\"plane\"></lib-plane-card>\n    }\n</div>\n", styles: [".planes{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}\n"] }]
        }] });

class PlanesContainerComponent {
    _useCase = inject(GetPlanesUseCase);
    planes = [];
    ngOnInit() {
        this._useCase.initSubscription();
        this.getPlanes();
        this._useCase.planes$().subscribe({
            next: (response) => (this.planes = response),
        });
    }
    ngOnDestroy() {
        this._useCase.destroySubscription();
    }
    getPlanes() {
        this._useCase.execute();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: PlanesContainerComponent, isStandalone: true, selector: "lib-planes-container", ngImport: i0, template: "<lib-planes [planes]=\"planes\"></lib-planes>\n", dependencies: [{ kind: "component", type: PlanesComponent, selector: "lib-planes", inputs: ["planes"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: PlanesContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-planes-container', imports: [PlanesComponent], template: "<lib-planes [planes]=\"planes\"></lib-planes>\n" }]
        }] });

class CreatePlaneComponent {
    fb = inject(FormBuilder);
    onSubmit = output();
    modelInput = {
        id: 'model',
        label: 'Model',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'model',
        required: true,
        disabled: false,
    };
    form = this.fb.group({
        model: ['', [Validators.required]],
    });
    submitButtonData = {
        class: 'dark',
        size: 'large',
        label: 'Create',
        disabled: true,
    };
    validateForm() {
        this.submitButtonData.disabled = this.form.invalid;
    }
    submit() {
        this.onSubmit.emit({
            model: this.form.get('model').value,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: CreatePlaneComponent, isStandalone: true, selector: "lib-create-plane", outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"form\">\n  <div>\n    <app-input\n      [inputData]=\"modelInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-plane', imports: [ReactiveFormsModule, InputComponent, ButtonComponent], template: "<form [formGroup]=\"form\" class=\"form\">\n  <div>\n    <app-input\n      [inputData]=\"modelInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}\n"] }]
        }] });

class CreatePlaneService {
    http = inject(HttpClient);
    create(request) {
        return this.http.post('http://localhost:8080/planes', request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreatePlaneUseCase {
    _service = inject(CreatePlaneService);
    _state = inject(State);
    _router = inject(Router);
    _loading = inject(LoadingService);
    subscriptions;
    planes$() {
        return this._state.planes.$();
    }
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    execute(request) {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .create(request)
            .pipe(finalize(() => this._loading.setLoading(false)))
            .pipe(tap((Plane) => {
            this._state.planes.set([...this._state.planes.snapshot(), Plane]);
        }))
            .subscribe({
            next: () => {
                this._router.navigate(['/admin/planes']);
            },
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreatePlaneContainerComponent {
    _useCase = inject(CreatePlaneUseCase);
    planes = [];
    ngOnInit() {
        this._useCase.initSubscription();
        this._useCase.planes$().subscribe({
            next: (response) => {
                this.planes = response;
            },
        });
    }
    createPlane(request) {
        this._useCase.execute(request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: CreatePlaneContainerComponent, isStandalone: true, selector: "lib-create-plane-container", ngImport: i0, template: "<lib-create-plane (onSubmit)=\"createPlane($event)\"></lib-create-plane>\n", dependencies: [{ kind: "component", type: CreatePlaneComponent, selector: "lib-create-plane", outputs: ["onSubmit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreatePlaneContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-plane-container', imports: [CreatePlaneComponent], template: "<lib-create-plane (onSubmit)=\"createPlane($event)\"></lib-create-plane>\n" }]
        }] });

class CreateMaintenanceComponent {
    fb = inject(FormBuilder);
    planes = input([]);
    onSubmit = output();
    startInput = {
        id: 'start',
        label: 'Start',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'start',
        required: true,
        disabled: false,
    };
    endInput = {
        id: 'end',
        label: 'End',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'end',
        required: true,
        disabled: false,
    };
    form = this.fb.group({
        plane: ['', [Validators.required]],
        start: ['', [Validators.required]],
        end: ['', [Validators.required]],
    });
    submitButtonData = {
        class: 'dark',
        size: 'large',
        label: 'Create',
        disabled: true,
    };
    validateForm() {
        this.submitButtonData.disabled = this.form.invalid;
    }
    submit() {
        this.onSubmit.emit({
            idPlane: this.form.get('plane').value,
            start: this.form.get('start').value,
            end: this.form.get('end').value,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: CreateMaintenanceComponent, isStandalone: true, selector: "lib-create-maintenance", inputs: { planes: { classPropertyName: "planes", publicName: "planes", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"form\">\n  <div class=\"form__group\">\n    <label for=\"plane\" class=\"form__label\">Plane</label>\n    <select\n      name=\"plane\"\n      id=\"plane\"\n      required\n      (change)=\"validateForm()\"\n      formControlName=\"plane\"\n      class=\"form__select\"\n    >\n      <option value=\"\" disabled selected>Select a plane</option>\n      @for (plane of planes(); track $index) {\n      <option [value]=\"plane.id\">{{ plane.model }}</option>\n      }\n    </select>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"startInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"endInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-maintenance', imports: [ReactiveFormsModule, ButtonComponent, InputComponent], template: "<form [formGroup]=\"form\" class=\"form\">\n  <div class=\"form__group\">\n    <label for=\"plane\" class=\"form__label\">Plane</label>\n    <select\n      name=\"plane\"\n      id=\"plane\"\n      required\n      (change)=\"validateForm()\"\n      formControlName=\"plane\"\n      class=\"form__select\"\n    >\n      <option value=\"\" disabled selected>Select a plane</option>\n      @for (plane of planes(); track $index) {\n      <option [value]=\"plane.id\">{{ plane.model }}</option>\n      }\n    </select>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"startInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <div>\n    <app-input\n      [inputData]=\"endInput\"\n      [formGroup]=\"form\"\n      (outputData)=\"validateForm()\"\n    ></app-input>\n  </div>\n\n  <app-button\n    [buttonData]=\"submitButtonData\"\n    (clickEvent)=\"submit()\"\n  ></app-button>\n</form>\n", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"] }]
        }] });

class CreateMaintenanceService {
    http = inject(HttpClient);
    create(request) {
        return this.http.post('http://localhost:8080/maintenances', request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateMaintenanceUseCase {
    _service = inject(CreateMaintenanceService);
    _router = inject(Router);
    _loading = inject(LoadingService);
    subscriptions;
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    execute(request) {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .create(request)
            .pipe(finalize(() => this._loading.setLoading(false)))
            .subscribe({
            next: () => {
                this._router.navigate(['/admin/planes']);
            },
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class CreateMaintenanceContainerComponent {
    _planesUseCase = inject(GetPlanesUseCase);
    _maintenanceUseCase = inject(CreateMaintenanceUseCase);
    planes = [];
    ngOnInit() {
        this._planesUseCase.initSubscription();
        this._maintenanceUseCase.initSubscription();
        this.getPlanes();
        this._planesUseCase.planes$().subscribe({
            next: (response) => {
                this.planes = response;
            },
        });
    }
    getPlanes() {
        this._planesUseCase.execute();
    }
    createMaintenance(request) {
        this._maintenanceUseCase.execute(request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: CreateMaintenanceContainerComponent, isStandalone: true, selector: "lib-create-maintenance-container", ngImport: i0, template: "<lib-create-maintenance (onSubmit)=\"createMaintenance($event)\" [planes]=\"planes\"></lib-create-maintenance>\n", dependencies: [{ kind: "component", type: CreateMaintenanceComponent, selector: "lib-create-maintenance", inputs: ["planes"], outputs: ["onSubmit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: CreateMaintenanceContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-create-maintenance-container', imports: [CreateMaintenanceComponent], template: "<lib-create-maintenance (onSubmit)=\"createMaintenance($event)\" [planes]=\"planes\"></lib-create-maintenance>\n" }]
        }] });

class UpdateFlightService {
    http = inject(HttpClient);
    update(request) {
        return this.http.post('http://localhost:8080/flights/update', request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class UpdateFlightUseCase {
    _service = inject(UpdateFlightService);
    _state = inject(State);
    _router = inject(Router);
    _loading = inject(LoadingService);
    subscriptions;
    _alert = inject(ToastrService);
    flights$() {
        return this._state.flights.$();
    }
    initSubscription() {
        this.subscriptions = new Subscription();
    }
    destroySubscription() {
        this.subscriptions.unsubscribe();
    }
    execute(request) {
        this._loading.setLoading(true);
        this.subscriptions.add(this._service
            .update(request)
            .pipe(delay(2000), finalize(() => this._loading.setLoading(false)), tap((updatedFlight) => {
            const currentFlights = this._state.flights.snapshot();
            // Buscar si el vuelo ya existe, si sí, reemplazarlo
            const updatedFlights = currentFlights.map((flight) => flight.id === updatedFlight.id ? updatedFlight : flight);
            // Si no existe, agregarlo al final del array
            const isNewFlight = !currentFlights.some(flight => flight.id === updatedFlight.id);
            if (isNewFlight) {
                updatedFlights.push(updatedFlight);
            }
            // Actualizar el estado con los vuelos modificados
            this._state.flights.set(updatedFlights);
        }))
            .subscribe({
            next: () => {
                this._alert.success('Flight updated successfully');
                this._router.navigate(['/admin']);
            },
            error: error => {
                this._alert.error('Usuario o contraseña incorrectos');
            }
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightUseCase, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightUseCase, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightUseCase, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class UpdateFlightComponent {
    fb = inject(FormBuilder);
    planes = input([]);
    set flightData(flight) {
        if (flight) {
            this.form.patchValue({
                ...flight,
                plane: flight.idPlane, // Asumiendo que el vuelo tiene un objeto plane con id
            });
            this.validateForm();
        }
    }
    onSubmit = output();
    idInput = {
        id: 'id',
        label: 'Id',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'id',
        required: true,
        disabled: true,
    };
    originInput = {
        id: 'origin',
        label: 'Origin',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'origin',
        required: true,
        disabled: false,
    };
    destinationInput = {
        id: 'destination',
        label: 'Destination',
        placeholder: '',
        value: '',
        type: 'text',
        formControlName: 'destination',
        required: true,
        disabled: false,
    };
    priceInput = {
        id: 'price',
        label: 'Price',
        placeholder: '',
        value: '',
        type: 'number',
        formControlName: 'price',
        required: true,
        disabled: false,
    };
    departureInput = {
        id: 'departure',
        label: 'Departure',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'departure',
        required: true,
        disabled: false,
    };
    arrivalInput = {
        id: 'arrival',
        label: 'Arrival',
        placeholder: '',
        value: '',
        type: 'datetime-local',
        formControlName: 'arrival',
        required: true,
        disabled: false,
    };
    form = this.fb.group({
        id: ['', [Validators.required]],
        origin: ['', [Validators.required]],
        destination: ['', [Validators.required]],
        price: ['', [Validators.required]],
        plane: ['', [Validators.required]],
        departure: ['', [Validators.required]],
        arrival: ['', [Validators.required]],
    });
    submitButtonData = {
        class: 'dark',
        size: 'large',
        label: 'Update Flight',
        disabled: true,
    };
    validateForm() {
        this.submitButtonData.disabled = this.form.invalid;
    }
    submit() {
        console.log('Flight form submitted:', this.form.value);
        this.onSubmit.emit({
            id: this.form.get('id').value,
            origin: this.form.get('origin').value,
            destination: this.form.get('destination').value,
            price: this.form.get('price').value,
            idPlane: this.form.get('plane').value,
            departure: this.form.get('departure').value,
            arrival: this.form.get('arrival').value,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: UpdateFlightComponent, isStandalone: true, selector: "lib-update-flight", inputs: { planes: { classPropertyName: "planes", publicName: "planes", isSignal: true, isRequired: false, transformFunction: null }, flightData: { classPropertyName: "flightData", publicName: "flightData", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"form\">\n    <div>\n        <app-input [inputData]=\"idInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"originInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"destinationInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"priceInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div class=\"form__group\">\n        <label for=\"plane\" class=\"form__label\">Plane</label>\n        <select name=\"plane\" id=\"plane\" required (change)=\"validateForm()\" formControlName=\"plane\" class=\"form__select\">\n            <option value=\"\" disabled selected>Select a plane</option>\n            @for (plane of planes(); track $index) {\n            <option [value]=\"plane.id\">{{ plane.model }}</option>\n            }\n        </select>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"departureInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"arrivalInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <app-button [buttonData]=\"submitButtonData\" (clickEvent)=\"submit()\"></app-button>\n</form>", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: InputComponent, selector: "app-input", inputs: ["inputData", "formGroup"], outputs: ["outputData"] }, { kind: "component", type: ButtonComponent, selector: "app-button", inputs: ["buttonData"], outputs: ["clickEvent"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-update-flight', imports: [ReactiveFormsModule, InputComponent, ButtonComponent], template: "<form [formGroup]=\"form\" class=\"form\">\n    <div>\n        <app-input [inputData]=\"idInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"originInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"destinationInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"priceInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div class=\"form__group\">\n        <label for=\"plane\" class=\"form__label\">Plane</label>\n        <select name=\"plane\" id=\"plane\" required (change)=\"validateForm()\" formControlName=\"plane\" class=\"form__select\">\n            <option value=\"\" disabled selected>Select a plane</option>\n            @for (plane of planes(); track $index) {\n            <option [value]=\"plane.id\">{{ plane.model }}</option>\n            }\n        </select>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"departureInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <div>\n        <app-input [inputData]=\"arrivalInput\" [formGroup]=\"form\" (outputData)=\"validateForm()\"></app-input>\n    </div>\n\n    <app-button [buttonData]=\"submitButtonData\" (clickEvent)=\"submit()\"></app-button>\n</form>", styles: [".form{display:flex;flex-direction:column;gap:20px}.form__group{display:flex;flex-direction:column;gap:4px}.form__label{font-size:.75rem;color:#565656;margin-left:10px}.form__select{width:100%;padding:12px;border-radius:6px;border:1px solid rgba(138,138,138,.6862745098)}\n"] }]
        }], propDecorators: { flightData: [{
                type: Input
            }] } });

class UpdateFlightContainerComponent {
    flight = signal(null);
    _planesUseCase = inject(GetPlanesUseCase);
    _flightUseCase = inject(UpdateFlightUseCase);
    flightService = inject(GetFlightsService); // Inyecta el servicio
    route = inject(ActivatedRoute);
    router = inject(Router);
    planes = [];
    ngOnInit() {
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
    getPlanes() {
        this._planesUseCase.execute();
    }
    updateFlight(request) {
        this._flightUseCase.execute(request);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: UpdateFlightContainerComponent, isStandalone: true, selector: "lib-update-flight-container", ngImport: i0, template: "<lib-update-flight [planes]=\"planes\" [flightData]=\"flight()\" (onSubmit)=\"updateFlight($event)\" />", dependencies: [{ kind: "component", type: UpdateFlightComponent, selector: "lib-update-flight", inputs: ["planes", "flightData"], outputs: ["onSubmit"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: UpdateFlightContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-update-flight-container', imports: [UpdateFlightComponent], template: "<lib-update-flight [planes]=\"planes\" [flightData]=\"flight()\" (onSubmit)=\"updateFlight($event)\" />" }]
        }] });

const adminRoutes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: FlightsContainerComponent,
            },
            {
                path: 'planes',
                component: PlanesContainerComponent,
            },
        ],
    },
    {
        path: 'create',
        component: FormLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: CreateFlightContainerComponent,
            },
            {
                path: 'planes',
                component: CreatePlaneContainerComponent,
            },
            {
                path: 'maintenances',
                component: CreateMaintenanceContainerComponent,
            },
        ],
    },
    {
        path: 'update',
        component: FormLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'flight/:id',
                component: UpdateFlightContainerComponent,
            }
        ],
    },
];

/*
 * Public API Surface of admin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { adminRoutes };
//# sourceMappingURL=admin.mjs.map
