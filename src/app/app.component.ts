import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxElectronService } from './core/ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private electron: NgxElectronService, private router: Router) {
    if (this.electron.isElectron) {
      console.log('Running as an Electron app.');
      this.electron.ipcRenderer.on('ELECTRON_BRIDGE_CLIENT', (event: Electron.Event, msg: any) => {
        if (msg === 'rareink:menu:open-about') {
          this.router.navigate(['/about']);
        }
      });
    } else {
      console.log('Running as a web app.');
    }
  }
}
