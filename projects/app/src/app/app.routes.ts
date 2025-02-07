import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:() => import('seat-availability').then(m => m.seatRoutes)
    }
];
