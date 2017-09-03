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
      this.electron.ipcRenderer.on(ELECTRON_CLIENT, (event: Electron.Event, msg: any) => {
        this.listenerSubject.next(msg);
      });
    }
  }

  public get isElectron(): boolean {
    return !!window.navigator.userAgent.match(/Electron/);
  }

  public send(data: any): void {
    if (this.ipcRenderer) this.ipcRenderer.send(ELECTRON_HOST, data);
  }

  public get ipcRenderer(): Electron.IpcRenderer | undefined {
    if (this.electron) return this.electron.ipcRenderer;
  }

  public get desktopCapturer(): Electron.DesktopCapturer | undefined {
    if (this.electron) return this.electron.desktopCapturer;
  }

  public get webFrame(): Electron.WebFrame | undefined {
    if (this.electron) return this.electron.webFrame;
  }

  public get remote(): Electron.Remote | undefined {
    if (this.electron) return this.electron.remote;
  }

  public get clipboard(): Electron.Clipboard | undefined {
    if (this.electron) return this.electron.clipboard;
  }

  public get crashReporter(): Electron.CrashReporter | undefined {
    if (this.electron) return this.electron.crashReporter;
  }

  public get nativeImage(): Electron.NativeImage | undefined {
    if (this.electron) return this.electron.nativeImage as any;
  }

  public get screen(): Electron.Screen | undefined {
    if (this.electron) return this.electron.screen;
  }

  public get shell(): Electron.Shell | undefined {
    if (this.electron) return this.electron.shell;
  }

  private get electron(): Electron.RendererInterface | undefined {
    if (!this._electron) {
      if (window && window.require) {
        this._electron = window.require('electron');
        return this._electron;
      }
      return undefined;
    }
    return this._electron;
  }

}
