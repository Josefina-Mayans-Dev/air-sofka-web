import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "shared";
import { HomeComponent } from "../containers/home/home.component";


export const authRoutes: Routes= [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]

    }
];