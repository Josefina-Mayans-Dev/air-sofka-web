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
        path:  'users',
        loadChildren:  () => import('users').then(m => m.userRoutes)
    },
    {
        path: "**",
        redirectTo: ""
    }
];
