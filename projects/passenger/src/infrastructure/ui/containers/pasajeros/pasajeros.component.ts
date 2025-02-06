import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { StepperComponent } from "../../components/stepper/stepper.component";
import { PasajerosFormComponent } from "../../forms/pasajeros-form/pasajeros-form.component";
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-pasajeros',
  imports: [StepperComponent, PasajerosFormComponent],
  templateUrl: './pasajeros.component.html',
  styleUrl: './pasajeros.component.scss'
})

export class PasajerosComponent{

  stepLabels = ['Adulto 1', 'Adulto 2'];
  currentStepIndex: number = 0;
  formData:any[] = [];
  passengerForms: FormGroup[] = [];
  isNextButtonDisabled: boolean = true;

  onFormReady(form: FormGroup, index: number) {
      this.passengerForms[index] = form;
      this.checkIfValid(index);
  }

  onStepChange(index: number) {
    this.currentStepIndex = index;
    this.checkIfValid(index);
    console.log('Step changed:', index);
  }

  onComplete(data: any[]) {
    console.log('Stepper completed:', data);
  }

  updateStep(event: any) {
    this.isNextButtonDisabled = !event.valid;
    console.log("Data de formulario:", event.values);

  }
  
  checkIfValid(index : number){
        if(this.passengerForms[index]){
            this.isNextButtonDisabled = !this.passengerForms[index].valid;
        }
}
}
  