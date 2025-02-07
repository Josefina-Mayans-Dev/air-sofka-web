import { Routes } from '@angular/router';

export const routes: Routes = [
    {
<<<<<<< HEAD
        path:'',
        loadChildren:() => import('seat-availability').then(m => m.seatRoutes)
=======
        path: '',
        loadChildren: () => import('auth').then(m => m.authRoutes)
    },
    {
        path: 'admin',
        loadChildren: () => import('admin').then(m => m.adminRoutes)
    },
    {
        path: "**",
        redirectTo: ""
>>>>>>> 69dfd2146fd6202a17bb55b20144f01c6d7b7641
    }
];
