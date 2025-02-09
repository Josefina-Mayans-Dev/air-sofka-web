import { Routes } from "@angular/router";
import { PassengersComponent } from "../containers/passengers/passengers.component";
import { BookingLayoutComponent, DefaultLayoutComponent } from "shared";

export const passengerRoutes: Routes = [
      {
          path: '',
          component: BookingLayoutComponent,
          children: [
              {
                  path: '',
                  component: PassengersComponent
              }
          ]
  
      }
  ];
  