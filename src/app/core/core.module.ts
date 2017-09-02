import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxElectronService } from './ngx-electron';
import { TitleBarComponent } from './title-bar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleBarComponent
  ],
  providers: [NgxElectronService],
  exports: [
    TitleBarComponent
  ]
})
export class CoreModule { }
