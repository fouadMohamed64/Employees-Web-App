import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, title: 'Login Page' },
    {path: 'home', component: EmployeesComponent, title: 'Home Page', canActivate: [authGuard] },

    {path: '**', component: NotFoundComponent, title: 'NotFound'}
    
];
