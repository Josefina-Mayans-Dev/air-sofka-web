import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BookingResumeLayoutComponent } from "../../layouts/booking-resume-layout/booking-resume-layout.component";
import { ResumePassengerCardComponent } from '../../components/resume-passenger-card/resume-passenger-card.component';
import { IPassenger, IPassengerContact, PassengerContactUseCase, PassengerSaveUseCase } from 'passenger';
import { map, Observable, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'lib-passenger-card-container',
  imports: [ResumePassengerCardComponent],
  templateUrl: './passenger-card-container.component.html',
})
export class PassengerCardContainerComponent implements OnInit, OnDestroy {
  
  private readonly _passengerSave  = inject(PassengerSaveUseCase);
  private readonly _passengerContact  = inject(PassengerContactUseCase);
  public contactSave$: Observable<IPassengerContact>;
  public listPassengers$: Observable<IPassenger[]>;
  passengers: IPassenger[] = [];
  contact:  IPassengerContact;

  ngOnInit(): void {
    this._passengerSave.initSubscriptions();
    this._passengerContact.initSubscriptions();
    this.listPassengers$ = this._passengerSave.getListPassengers$();
    this.contactSave$ = this._passengerContact.passengerContact$();

    this.getPassengers();




  }

  getPassengers(){
    this._passengerSave.getListPassengers$().pipe(
      map(data => data.map(passenger => {
        this.passengers.push(passenger);
        
      })) 
    )
    .subscribe();

    this._passengerContact.passengerContact$().pipe(
      map(contact => {
        this.contact = contact;
        
      }) 
    )
    .subscribe();
  }
  ngOnDestroy(): void {
    this._passengerSave.destroySubscriptions();
    this._passengerContact.destroySubscriptions();
  }
  

}
