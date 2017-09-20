import { Component, OnInit } from '@angular/core';

import { NgxElectronService } from '../core/ngx-electron';

@Component({
  selector: 'rareink-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public readonly title = `App works!`;
  public runmode: string;

  constructor(private electron: NgxElectronService) {
    if (this.electron.isElectron) {
      const os = this.electron.remote.require('os');
      this.runmode = `Running as an Electron app on ${os.platform()}.`;
    } else {
      this.runmode = 'Running as a web app.';
    }
  }

  doTheBeepBeep(): void {
    if (this.electron.isElectron) {
      this.electron.send('rareink:generic:ping');
      this.electron.listener$.subscribe(message => {
        if (message === 'rareink:generic:pong') {
          this.electron.shell.beep();
        }
      });
    }
  }

  ngOnInit() {
  }

}
