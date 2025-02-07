import { Routes } from "@angular/router";
import { PassengersComponent } from "../containers/passengers/passengers.component";
import { DefaultLayoutComponent } from "shared";

export const passengerRoutes: Routes = [
      {
          path: '',
          component: DefaultLayoutComponent,
          children: [
              {
                  path: '',
                  component: PassengersComponent
              }
          ]
  
      }
  ];
  