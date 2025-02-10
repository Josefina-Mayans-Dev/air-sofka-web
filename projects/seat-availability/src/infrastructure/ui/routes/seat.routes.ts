import { Routes } from "@angular/router";
import { SeatMapContainer } from "../containers/seat-map/seat-map-container.component";
import { DefaultLayoutComponent } from "shared";



export const seatRoutes: Routes = [

       {
                path: '',
                component: DefaultLayoutComponent,
                children: [
                  { path: '', component: SeatMapContainer }
                ]
        
            },

            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' },
      
  ];