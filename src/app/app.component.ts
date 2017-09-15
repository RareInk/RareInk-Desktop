import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NgxElectronService } from './core/ngx-electron';
import * as fromRoot from './store';
import * as fromLayout from './store/layout/layout.reducer';
import * as layout from './store/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isElectron$: Observable<boolean>;

  constructor(
    private electron: NgxElectronService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
    if (this.electron.isElectron) {
      console.log('Running as an Electron app.');
      this.store.dispatch(new layout.SetElectronModeAction());
      this.electron.ipcRenderer.on('ELECTRON_BRIDGE_CLIENT', (event: Electron.Event, msg: any) => {
        if (msg === 'rareink:menu:open-about') {
          this.router.navigate(['/about']);
        }
      });
    } else {
      console.log('Running as a web app.');
      this.store.dispatch(new layout.SetWebModeAction());
    }

    // Selectors can be applied with the `select` operator which passes the
    // state tree to the provided selector.
    this.isElectron$ = this.store.select(fromLayout.getIsElectron);
  }
}
