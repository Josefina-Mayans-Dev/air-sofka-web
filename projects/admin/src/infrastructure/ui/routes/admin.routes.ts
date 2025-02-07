import { Routes } from '@angular/router';
import { CreateFlightContainerComponent } from '../containers/create-flight-container/create-flight-container.component';
import { FormLayoutComponent } from '../layouts/form-layout/form-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { FlightsContainerComponent } from '../containers/flights-container/flights-container.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: FlightsContainerComponent,
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
    ],
  },
];
