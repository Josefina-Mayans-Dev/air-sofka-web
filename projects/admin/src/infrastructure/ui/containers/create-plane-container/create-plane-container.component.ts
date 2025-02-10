import { Component, inject } from '@angular/core';
import { CreatePlaneComponent } from '../../forms/create-plane/create-plane.component';
import { CreatePlaneUseCase } from '../../../../application/create.plane.usecase';
import { PlaneRequest } from '../../../../domain/model/plane.request';
import { IPlane } from '../../../../domain/model/plane';

@Component({
  selector: 'lib-create-plane-container',
  imports: [CreatePlaneComponent],
  templateUrl: './create-plane-container.component.html',
})
export class CreatePlaneContainerComponent {
  private readonly _useCase = inject(CreatePlaneUseCase);
  planes: IPlane[] = [];

  ngOnInit(): void {
    this._useCase.initSubscription();

    this._useCase.planes$().subscribe({
      next: (response) => {
        this.planes = response;
      },
    });
  }

  createPlane(request: PlaneRequest): void {
    this._useCase.execute(request);
  }
}
