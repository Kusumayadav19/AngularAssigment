import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { GetAppComponent } from './api/get-app/get-app.component';
import { PostAppComponent } from './api/post-app/post-app.component';
import { PutAppComponent } from './api/put-app/put-app.component';
import { DeleteAppComponent } from './api/delete-app/delete-app.component';
import { authGuard } from './pages/service/auth.guard';

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
        canActivate : [authGuard],
        children:[
            {
                path:'dashboard',
                loadComponent:()=> import("./pages/dashboard/dashboard.component").then(m => m.DashboardComponent)
            },
    
        {
            path:'employee',
            loadComponent:()=> import("./pages/employee/employee.component").then(m => m.EmployeeComponent),
        },
        {
            path:'project',
            component:ProjectComponent
        },
        {
            path:'forms',
            loadComponent:()=> import("./pages/forms/forms.component").then(m => m.FormsComponent),
        },
        {
            path:'reactiveForm',
            loadComponent:()=> import("./pages/reactive-forms/reactive-forms.component").then(m=> m.ReactiveFormsComponent),
        },
        {
            path:'get-app',
            loadComponent:()=> import("./api/get-app/get-app.component").then(m => m.GetAppComponent),
        },
        {
            path:'post-app',
            loadComponent:()=> import("./api/post-app/post-app.component").then(m => m.PostAppComponent),
        },
        {
            path:'put-app',
            loadComponent:()=> import("./api/put-app/put-app.component").then(m => m.PutAppComponent),
        },
        {
            path:'delete-app',
            loadComponent:()=> import("./api/delete-app/delete-app.component").then(m => m.DeleteAppComponent),
        }
        ]
    }
];
