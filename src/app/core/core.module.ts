import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxElectronService } from './ngx-electron';
import { TitleBarComponent } from './title-bar';
import { ProjectSwitcherComponent } from './project-switcher/project-switcher.component';

@NgModule({
  imports: [
    CommonModule
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
