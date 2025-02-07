import { Routes } from "@angular/router";
import { BookingLayoutComponent } from "shared";
import { FlightComponent } from "../containers/flight/flight.component";


export const flightRoutes: Routes= [
    {
        path: '',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: FlightComponent
            }
        ]

    }
];