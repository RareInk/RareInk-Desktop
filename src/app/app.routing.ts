import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];
