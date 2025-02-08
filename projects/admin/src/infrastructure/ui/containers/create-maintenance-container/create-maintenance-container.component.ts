import { Component, inject } from '@angular/core';
import { CreateMaintenanceComponent } from '../../forms/create-maintenance/create-maintenance.component';
import { IPlane } from '../../../../domain/model/plane';
import { GetPlanesUseCase } from '../../../../application/get.plane.usecase';
import { MaintenanceRequest } from '../../../../domain/model/maintenance.request';
import { CreateMaintenanceUseCase } from '../../../../application/create.maintenance.usecase';

@Component({
  selector: 'lib-create-maintenance-container',
  imports: [CreateMaintenanceComponent],
  templateUrl: './create-maintenance-container.component.html',
})
export class CreateMaintenanceContainerComponent {
  private readonly _planesUseCase = inject(GetPlanesUseCase);
  private readonly _maintenanceUseCase = inject(CreateMaintenanceUseCase);
  planes: IPlane[] = [];

  ngOnInit(): void {
    this._planesUseCase.initSubscription();
    this._maintenanceUseCase.initSubscription();
    this.getPlanes();

    this._planesUseCase.planes$().subscribe({
      next: (response) => {
        this.planes = response;
      },
    });
  }

  getPlanes(): void {
    this._planesUseCase.execute();
  }

  createMaintenance(request: MaintenanceRequest): void {
    this._maintenanceUseCase.execute(request);
  }
}
