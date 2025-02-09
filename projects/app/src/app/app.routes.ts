import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'seats',
        loadChildren:() => import('seat-availability').then(m => m.seatRoutes)
    },
    {
        path: '',
        loadChildren: () => import('auth').then(m => m.authRoutes)
    },
    {
        path: 'admin',
        loadChildren: () => import('admin').then(m => m.adminRoutes)
    },
    {
        path:  'users',
        loadChildren:  () => import('users').then(m => m.userRoutes)
    },
    {
        path: 'passenger',
        loadChildren: () => import('passenger').then(m => m.passengerRoutes)
    },
    {
        path: 'pay',
        loadChildren: () => import('pay').then(m => m.payRoutes)
    },
    {
        path: 'flight',
        loadChildren: () => import('flight').then(m => m.flightRoutes)
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
