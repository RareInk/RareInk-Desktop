import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TopNavigationComponent } from './top-navigation';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    TitleBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopNavigationComponent,
    TitleBarComponent
  ]
})
export class SharedModule { }
