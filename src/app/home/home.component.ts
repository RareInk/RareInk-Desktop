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
    this.runmode = this.electron.isElectron
      ? 'Running as an Electron app.'
      : 'Running as a web app.';
  }

  doTheBeepBeep(): void {
    if (this.electron.isElectron) {
      this.electron.send('ping');
      this.electron.listener$.subscribe(message => {
        if (message === 'pong') {
          this.electron.shell.beep();
        }
      });
    }
  }

  ngOnInit() {
  }

}
