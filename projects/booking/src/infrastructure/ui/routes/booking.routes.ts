import { Routes } from "@angular/router";
import { ResumeCardContainerComponent } from "../containers/resume-card-container/resume-card-container.component";
import { BookingResumeLayoutComponent } from "../layouts/booking-resume-layout/booking-resume-layout.component";
import { BookingLayoutComponent } from "shared";




export const bookingRoutes: Routes= [
    {
        path: '',
        component:BookingLayoutComponent,
        children:[
            {
                path: '',
                component: BookingResumeLayoutComponent,
            }
        ]

    }
];