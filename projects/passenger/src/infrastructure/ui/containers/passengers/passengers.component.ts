import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { PassengerFormComponent } from '../../forms/passenger-form/passenger-form.component';
import { Form, FormGroup } from '@angular/forms';
import { PassengerContactUseCase } from '../../../../application/passenger-contact-save.usecase';
import { PassengerSaveUseCase } from '../../../../application/passenger-save.usecase';
import { PassengerUpdateUseCase } from '../../../../application/passenger-update.usecase';
import { Observable, of, switchMap, tap } from 'rxjs';
import { IPassenger } from '../../../../domain/model/passenger.model';
import { IPassengerContact } from '../../../../domain/model/passenger-contact.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BookingHeaderService } from 'shared';
import { GetFlightsSelectedUseCase, GetFlightsUseCase, IFlight, IFlightSelected } from 'flight';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-pasajeros',
  imports: [AsyncPipe, StepperComponent, PassengerFormComponent, CommonModule],
  templateUrl: './passengers.component.html',
})
export class PassengersComponent implements OnInit, OnDestroy {
  private readonly _useCaseContact = inject(PassengerContactUseCase);
  private readonly _useCasePassengerSave = inject(PassengerSaveUseCase);
  private readonly _useCasePassengerUpdate = inject(PassengerUpdateUseCase);
  private readonly _useCaseFlightSelected = inject(GetFlightsSelectedUseCase);

  private headerService = inject(BookingHeaderService);
  private readonly _router = inject(Router);

  public contactSave$: Observable<IPassengerContact>;
  public listPassengers$: Observable<IPassenger[]>;
  public flight$: Observable<IFlightSelected>;

  stepLabels: string[] = [];
  currentStepIndex: number = 0;
  formData: any[] = [];
  passengerForms: FormGroup[] = [];
  isNextButtonDisabled: boolean = true;
  contact: IPassengerContact;
  passenger: IPassenger;

  constructor() {
    this.headerService.sendBookingHeader({
      title: 'Pasajeros',
      subtitle: 'Informacion de contacto y pasajeros',
    });
  }

  onFormReady(form: FormGroup, index: number) {
    this.passengerForms[index] = form;
    this.checkIfValid(index);
  }

  onStepChange(index: number) {
    this.currentStepIndex = index;
    this.checkIfValid(index);
  }

  onComplete(data: any[]) {
    console.log('Stepper completed:', data);
    this._router.navigate(['/seats']);

  }

  updateStep(event: any) {
    this.isNextButtonDisabled = !event.valid;

    if (event.valid && this.currentStepIndex === 0) {
      this.contact = {
        email: event.values.correo,
        confirmEmail: event.values.correoConfirmar,
        prefix: event.values.prefijoTelefono,
        telephoneNumber: event.values.numeroTelefono,
      };
      this.passenger = {
        id: this.currentStepIndex,
        treatment: event.values.tratamiento,
        name: event.values.nombre,
        lastName: event.values.apellido,
      };

      of(this._useCaseContact.execute(this.contact))
        .pipe(switchMap(() => this.contactSave$))
        .subscribe();

      of(this._useCasePassengerSave.execute(this.passenger))
        .pipe(switchMap(() => this.listPassengers$))
        .subscribe();
    } else if (event.valid && this.currentStepIndex != 0) {
      this.passenger = {
        id: this.currentStepIndex,
        treatment: event.values.tratamiento,
        name: event.values.nombre,
        lastName: event.values.apellido,
      };

      of(this._useCasePassengerSave.execute(this.passenger))
        .pipe(switchMap(() => this.listPassengers$))
        .subscribe();
    }
  }

  checkIfValid(index: number) {
    if (this.passengerForms[index]) {
      this.isNextButtonDisabled = !this.passengerForms[index].valid;
    }
  }

  ngOnDestroy(): void {
    this._useCaseContact.destroySubscriptions();
    this._useCasePassengerSave.destroySubscriptions();
    this._useCasePassengerUpdate.destroySubscriptions();
    this._useCaseFlightSelected.destroySubscription();
  }

  ngOnInit(): void {
    this._useCaseContact.initSubscriptions();
    this._useCasePassengerSave.initSubscriptions();
    this._useCasePassengerUpdate.initSubscriptions();
    this._useCaseFlightSelected.initSubscription();
    this.contactSave$ = this._useCaseContact.passengerContact$();
    this.listPassengers$ = this._useCasePassengerSave.getListPassengers$();
    this.flight$ = this._useCaseFlightSelected.flight$();
    this.flight$.subscribe((flight) => {
      console.log('Vuelos:', flight.filters);
      let passengers = flight.filters?.adults;

      for (let i = 0; i < passengers; i++) {
        this.stepLabels.push(`Adulto ${i + 1}`);
      }
    });
   
  }
}
