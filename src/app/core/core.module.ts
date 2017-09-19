import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxElectronService } from './ngx-electron';
import { TitleBarComponent } from './title-bar';
import { ProjectSwitcherComponent } from './project-switcher';
import { SplashScreenComponent } from './splash-screen';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TitleBarComponent,
    ProjectSwitcherComponent,
    SplashScreenComponent
  ],
  exports: [
    TitleBarComponent,
    ProjectSwitcherComponent,
    SplashScreenComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [NgxElectronService]
    };
  }

}
