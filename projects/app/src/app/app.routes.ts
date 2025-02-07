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
        path: 'flight',
        loadChildren: () => import('flight').then(m => m.flightRoutes)
    },
    {
        path: "**",
        redirectTo: ""
    }
];
