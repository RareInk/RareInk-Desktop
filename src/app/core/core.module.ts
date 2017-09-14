import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxElectronService } from './ngx-electron';
import { TitleBarComponent } from './title-bar';
import { ProjectSwitcherComponent } from './project-switcher/project-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TitleBarComponent,
    ProjectSwitcherComponent
  ],
  providers: [NgxElectronService],
  exports: [
    TitleBarComponent,
    ProjectSwitcherComponent
  ]
})
export class CoreModule { }
