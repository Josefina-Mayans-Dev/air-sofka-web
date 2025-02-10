import { Routes } from '@angular/router';
import { PaymentComponent } from '../containers/payment/payment.component';
import { BookingLayoutComponent, DefaultLayoutComponent } from 'shared';

export const payRoutes: Routes = [
  {
    path: '',
    component: BookingLayoutComponent,
    children: [
      {
        path: '',
        component: PaymentComponent,
      },
    ],
  },
];
