import { Routes } from "@angular/router";
import { FormLayoutComponent } from "../layouts/form-layout/form-layout.component";
import { RegisterLayoutComponent } from "../layouts/register-layout/register-layout.component";


export const userRoutes: Routes= [
    {
        path: '',
        component: FormLayoutComponent,
        children: [
            {
                path: '',
                component:  RegisterLayoutComponent
            },
        ]

    }
];