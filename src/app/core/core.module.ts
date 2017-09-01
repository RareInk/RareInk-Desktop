import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxElectronService } from './ngx-electron';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [NgxElectronService]
})
export class CoreModule { }
