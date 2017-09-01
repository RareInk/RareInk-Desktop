import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'rareink-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works!`;

  constructor(private electron: ElectronService) {
    if (this.electron.isElectronApp) {
      console.log('isElectron');
    } else {
      console.log('isWeb');
    }
  }

  doTheBeepBeep(): void {
    this.electron.shell.beep();
  }

  ngOnInit() {
  }

}
