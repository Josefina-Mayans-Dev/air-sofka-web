import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('auth').then(m => m.authRoutes)
    },
    {
        path: 'admin',
        loadChildren: () => import('admin').then(m => m.adminRoutes)
    },
    {
        path: 'passenger',
        loadChildren: () => import('passenger').then(m => m.passengerRoutes)
    },
    {
        path: 'booking',
        loadChildren: () => import('booking').then(m => m.bookingRoutes)
    },
    {
        path: "**",
        redirectTo: ""
    }
];
