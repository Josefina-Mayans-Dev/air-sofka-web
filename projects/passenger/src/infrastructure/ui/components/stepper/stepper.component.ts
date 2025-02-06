import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit {

  @Input() steps: string[] = [];
  @Input() isNextButtonDisabled: boolean = false;
  @Output() stepChange = new EventEmitter<number>();
  @Output() complete = new EventEmitter<any>();
  @Output() formUpdated = new EventEmitter<any>();  // Nuevo Output para recibir valores
  
  currentStepIndex: number = 0;

  ngOnInit(): void {
  }

  goToPreviousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.stepChange.emit(this.currentStepIndex);
    }
  }

  goToNextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.stepChange.emit(this.currentStepIndex);
    } else {
      console.log("Formulario completado, y se ha mandado el valor");
      this.complete.emit();  // Emitimos los datos completos
    }
  }

}