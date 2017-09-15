import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { NgxElectronService } from '../../core/ngx-electron';

import * as fromRoot from '../../store';
import * as fromLayout from '../../store/layout/layout.reducer';

@Component({
  selector: 'rareink-ui-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  // TODO: Make this dynamic, probably?
  public title = 'RareInk';
  public subscription$: Subscription;
  public isElectron$: Observable<boolean>;

  @HostBinding('class.hidden') public hidden: boolean;

  constructor(
    private electron: NgxElectronService,
    private store: Store<fromRoot.State>
  ) {
    this.isElectron$ = this.store.select(fromLayout.getIsElectron);
    this.subscription$ = this.isElectron$.subscribe(hide => {
      // we don't want to show the titlebar on a non-Electron environment, so we flip the boolean.
      this.hidden = !hide;
    });
  }

  onHamburgerMenuClick() {
    if (this.electron.isElectron) {
      const { remote } = this.electron;
      const menu = remote.Menu.getApplicationMenu();
      menu.popup(remote.getCurrentWindow(), {});
    }
  }

  onCloseClick() {
    if (this.electron.isElectron) {
      this.electron.send('rareink:window:close');
    }
  }

  onMaximizeClick() {
    if (this.electron.isElectron) {
      this.electron.send('rareink:window:maximize');
    }
  }

  onMinimizeClick() {
    if (this.electron.isElectron) {
      this.electron.send('rareink:window:minimize');
    }
  }

  ngOnInit() {
  }

}
