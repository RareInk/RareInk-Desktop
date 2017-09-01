import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import * as Electron from 'electron';

const ELECTRON_HOST = 'ELECTRON_BRIDGE_HOST';
const ELECTRON_CLIENT = 'ELECTRON_BRIDGE_CLIENT';

@Injectable()
export class NgxElectronService {

  private _electron: Electron.RendererInterface;

  private listenerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  listener$: Observable<any>;

  constructor() {
    this.listener$ = this.listenerSubject.asObservable();
    if (this.electron) {
      this.electron.ipcRenderer.on(ELECTRON_CLIENT, (event, msg) => {
        this.listenerSubject.next(msg);
      });
    }
  }

  public get isElectron(): boolean {
    return !!window.navigator.userAgent.match(/Electron/);
  }

  public send(data: any): void {
    this.ipcRenderer.send(ELECTRON_HOST, data);
  }

  public get ipcRenderer(): Electron.IpcRenderer {
    return this.electron.ipcRenderer || null;
  }

  public get desktopCapturer(): Electron.DesktopCapturer {
    return this.electron.desktopCapturer || null;
  }

  public get webFrame(): Electron.WebFrame {
    return this.electron.webFrame || null;
  }

  public get remote(): Electron.Remote {
    return this.electron.remote || null;
  }

  public get clipboard(): Electron.Clipboard {
    return this.electron.clipboard || null;
  }

  public get crashReporter(): Electron.CrashReporter {
    return this.electron.crashReporter || null;
  }

  public get nativeImage(): Electron.NativeImage {
    return <any>this.electron.nativeImage || null;
  }

  public get screen(): Electron.Screen {
    return this.electron.screen || null;
  }

  public get shell(): Electron.Shell {
    return this.electron.shell || null;
  }

  private get electron(): Electron.RendererInterface {
    if (!this._electron) {
      if (window && window.require) {
        this._electron = window.require('electron');
        return this._electron;
      }
      return null;
    }
    return this._electron;
  }

}
