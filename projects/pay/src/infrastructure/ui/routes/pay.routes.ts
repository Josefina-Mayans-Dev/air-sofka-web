import { Routes } from '@angular/router';
import { PaymentComponent } from '../containers/payment/payment.component';
import { DefaultLayoutComponent } from 'shared';

export const payRoutes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: PaymentComponent,
      },
    ],
  },
];
