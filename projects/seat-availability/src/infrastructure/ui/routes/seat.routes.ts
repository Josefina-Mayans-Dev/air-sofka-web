import { Routes } from "@angular/router";
import { SeatMapContainer } from "../containers/seat-map/seat-map.container";
import { SeatMapComponent } from "../components/seat-map/seat-map.component";


export const seatRoutes: Routes = [
    { path: 'seatSelection', component: SeatMapComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }

      
  ];