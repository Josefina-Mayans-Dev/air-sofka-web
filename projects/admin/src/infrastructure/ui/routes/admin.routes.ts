import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "shared";
import { CreateFlightContainerComponent } from "../containers/create-flight-container/create-flight-container.component";
import { FormLayoutComponent } from "../layouts/form-layout/form-layout.component";


export const adminRoutes: Routes= [
    {
        path: '',
        component: FormLayoutComponent,
        children: [
            {
                path: '',
                component: CreateFlightContainerComponent
            }
        ]

    }
];