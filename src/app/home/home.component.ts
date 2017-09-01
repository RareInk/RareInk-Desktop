import { Component, OnInit } from '@angular/core';
import { NgxElectronService } from '../core/ngx-electron';

@Component({
  selector: 'rareink-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works!`;

  constructor(private electron: NgxElectronService) {}

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
