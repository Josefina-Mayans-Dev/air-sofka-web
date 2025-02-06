import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "shared";


export const adminRoutes: Routes= [
    {
        path: '',
        component: DefaultLayoutComponent,
/*         children: [
            {
                path: '',
                component: HomeComponent
            }
        ] */

    }
];