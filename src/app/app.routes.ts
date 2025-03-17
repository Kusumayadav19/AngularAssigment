import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeeComponent } from './pages/project-employee/project-employee.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { GetAppComponent } from './api/get-app/get-app.component';
import { PostAppComponent } from './api/post-app/post-app.component';
import { PutAppComponent } from './api/put-app/put-app.component';
import { DeleteAppComponent } from './api/delete-app/delete-app.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
    
        {
            path:'employee',
            component:EmployeeComponent
        },
        {
            path:'project',
            component:ProjectComponent
        },
        {
            path:'projectEmployee',
            component:ProjectEmployeeComponent
        },
        {
            path:'forms',
            component:FormsComponent
        },
        {
            path:'reactiveForm',
            component:ReactiveFormsComponent
        },
        {
            path:'get-app',
            component:GetAppComponent
        },
        {
            path:'post-app',
            component:PostAppComponent
        },
        {
            path:'put-app',
            component:PutAppComponent
        },
        {
            path:'delete-app',
            component:DeleteAppComponent
        }
        ]
    }
];
