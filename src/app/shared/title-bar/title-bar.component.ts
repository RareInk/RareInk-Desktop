import { Component, OnInit } from '@angular/core';
import { NgxElectronService } from '../../core/ngx-electron';

@Component({
  selector: 'rareink-ui-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  // TODO: Make this dynamic, probably?
  public title = 'RareInk'

  constructor(private electron: NgxElectronService) { }

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
