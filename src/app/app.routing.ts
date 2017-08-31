import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' }
];
