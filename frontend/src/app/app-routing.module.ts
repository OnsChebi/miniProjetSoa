import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget/forget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'studentList', component: StudentsListComponent },
  { path: 'navigation', component: NavigationComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
