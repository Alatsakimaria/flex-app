import { Routes  } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Plan } from './pages/plan/plan';
import { Trainers } from './pages/trainers/trainers';
import { Profile } from './pages/profile/profile';
import { WeeklyPlanComponent } from './pages/weekly-plan/weekly-plan';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'plan', component: Plan},
    {path: 'weekly-plan', component: WeeklyPlanComponent},
    {path: 'trainers', component: Trainers},
    {path: 'profile', component: Profile}
];