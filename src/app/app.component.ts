import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NgxElectronService } from './core/ngx-electron';
import * as fromRoot from './store';
import * as fromLayout from './store/layout/layout.reducer';
import * as layout from './store/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public isElectron: boolean;
  public platform: string;
  public maximized: boolean;
  public subscription$: Subscription;

  constructor(
    private electron: NgxElectronService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    if (this.electron.isElectron) {
      console.log('Running as an Electron app.');
      this.store.dispatch(new layout.SetElectronModeAction());
      this.electron.send('rareink:window:requestmaximizedstate');
      this.electron.listener$.subscribe(message => {
        if (message === 'rareink:menu:open-about') {
          this.router.navigate(['/about']);
        }
        if (message === 'rareink:window:ismaximized') {
          this.store.dispatch(new layout.SetWindowMaximizedStateAction(true));
        }
        if (message === 'rareink:window:isunmaximized') {
          this.store.dispatch(new layout.SetWindowMaximizedStateAction(false));
        }
      });
    } else {
      console.log('Running as a web app.');
      this.store.dispatch(new layout.SetWebModeAction());
    }

    this.determinePlatform();

    // Selectors can be applied with the `select` operator which passes the
    // state tree to the provided selector.
    this.subscription$ = this.store.subscribe(subscribedStore => {
      this.isElectron = subscribedStore.layout.isElectron;
      this.platform = subscribedStore.layout.platform;
      this.maximized = subscribedStore.layout.isMaximized;
    });
  }

  public ngOnDestroy() {
    // Unsubscribe our subscription to prevent memory leaks.
    this.subscription$.unsubscribe();
  }

  /**
   * Determines the platform the Electron app is running on.
   *
   * @private
   * @memberof AppComponent
   */
  private determinePlatform() {
    if (this.electron.isElectron) {
      this.store.dispatch(new layout.SetPlatformAction(this.electron.remote.getGlobal('platform')));
    } else {
      this.store.dispatch(new layout.SetPlatformAction('web'));
    }
  }
}
