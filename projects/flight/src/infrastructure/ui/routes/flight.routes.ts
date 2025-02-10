import { Routes } from "@angular/router";
import { BookingLayoutComponent, DefaultLayoutComponent } from "shared";
import { FlightComponent } from "../containers/flight/flight.component";
import { FlightFilteringComponent } from "../containers/flight-filtering/flight-filtering.component";


export const flightRoutes: Routes = [
    {
        path: 'search',
        component: BookingLayoutComponent,
        children: [
            {
                path: '',
                component: FlightComponent
            },
        ]

    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: FlightFilteringComponent
            },
        ]
    }
];