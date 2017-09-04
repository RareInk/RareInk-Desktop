import { Component, OnInit } from '@angular/core';
import { NgxElectronService } from '../core/ngx-electron';

@Component({
  selector: 'rareink-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public appVersion: string;

  constructor(private electron: NgxElectronService) {
    if (this.electron.isElectron) {
      this.appVersion = this.electron.remote.app.getVersion();
    }
  }

  ngOnInit() {
  }

}
