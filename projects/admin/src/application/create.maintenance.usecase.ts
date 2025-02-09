import { inject, Injectable } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingService } from 'shared';
import { CreateMaintenanceService } from '../infrastructure/services/create-maintenance.service';
import { MaintenanceRequest } from '../domain/model/maintenance.request';

@Injectable({
  providedIn: 'root',
})
export class CreateMaintenanceUseCase {
  private readonly _service = inject(CreateMaintenanceService);
  private readonly _router = inject(Router);
  private readonly _loading = inject(LoadingService);
  private subscriptions!: Subscription;

  initSubscription(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscription(): void {
    this.subscriptions.unsubscribe();
  }

  execute(request: MaintenanceRequest): void {
    this._loading.setLoading(true);
    this.subscriptions.add(
      this._service
        .create(request)
        .pipe(finalize(() => this._loading.setLoading(false)))
        .subscribe({
          next: () => {
            this._router.navigate(['/admin/planes']);
          },
        })
    );
  }
}
