import { Routes } from '@angular/router';
import { CreateFlightContainerComponent } from '../containers/create-flight-container/create-flight-container.component';
import { FormLayoutComponent } from '../layouts/form-layout/form-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { FlightsContainerComponent } from '../containers/flights-container/flights-container.component';
import { PlanesContainerComponent } from '../containers/planes-container/planes-container.component';
import { CreatePlaneContainerComponent } from '../containers/create-plane-container/create-plane-container.component';
import { CreateMaintenanceContainerComponent } from '../containers/create-maintenance-container/create-maintenance-container.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
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
];
