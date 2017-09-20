import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { NgxElectronService } from '../../core/ngx-electron';

import * as fromRoot from '../../store';
import * as fromLayout from '../../store/layout/layout.reducer';
import * as layout from '../../store/layout/layout.actions';

@Component({
  selector: 'rareink-ui-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit, OnDestroy {

  // TODO: Make this dynamic, probably?
  public title = 'RareInk';
  @Input() public maximized: boolean;
  public subscription$: Subscription;

  @HostBinding('class.hidden') public hidden: boolean;

  constructor(private electron: NgxElectronService) { }

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


  ngOnDestroy() {
    // Unsubscribe our subscription to prevent memory leaks.
    this.subscription$.unsubscribe();
  }
}
