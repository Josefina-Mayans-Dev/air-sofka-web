import { Component, inject, OnInit } from '@angular/core';
import { CreateFlightComponent } from '../../forms/create-flight/create-flight.component';
import { GetPlanesUseCase } from '../../../../application/get.plane.usecase';
import { IPlane } from '../../../../domain/model/plane';

@Component({
  selector: 'lib-create-flight-container',
  imports: [CreateFlightComponent],
  templateUrl: './create-flight-container.component.html',
})
export class CreateFlightContainerComponent implements OnInit {
  private readonly _planesUseCase = inject(GetPlanesUseCase);
  planes: IPlane[] = [];

  ngOnInit(): void {
    this._planesUseCase.initSubscription();
    this.getPlanes();

    this._planesUseCase.planes$().subscribe({
      next: (response) => {
        this.planes = response;
        console.log(response);
      },
    });
  }

  getPlanes(): void {
    this._planesUseCase.execute();
  }
}
