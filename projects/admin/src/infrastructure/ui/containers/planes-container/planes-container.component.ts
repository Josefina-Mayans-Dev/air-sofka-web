import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PlanesComponent } from '../../components/planes/planes.component';
import { GetPlanesUseCase } from '../../../../application/get.plane.usecase';
import { IPlane } from '../../../../domain/model/plane';

@Component({
  selector: 'lib-planes-container',
  imports: [PlanesComponent],
  templateUrl: './planes-container.component.html',
})
export class PlanesContainerComponent implements OnInit, OnDestroy {
  private readonly _useCase = inject(GetPlanesUseCase);
  planes: IPlane[] = [];

  ngOnInit(): void {
    this._useCase.initSubscription();
    this.getPlanes();

    this._useCase.planes$().subscribe({
      next: (response) => (this.planes = response),
    });
  }

  ngOnDestroy(): void {
    this._useCase.destroySubscription();
  }

  getPlanes() {
    this._useCase.execute();
  }
}
