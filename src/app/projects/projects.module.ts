import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { routes } from './projects.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
