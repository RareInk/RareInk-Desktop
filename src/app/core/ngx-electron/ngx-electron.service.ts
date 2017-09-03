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

  public get ipcRenderer(): Electron.IpcRenderer {
    return (this.electron as Electron.RendererInterface).ipcRenderer;
  }

  public get desktopCapturer(): Electron.DesktopCapturer {
    return (this.electron as Electron.RendererInterface).desktopCapturer;
  }

  public get webFrame(): Electron.WebFrame {
    return (this.electron as Electron.RendererInterface).webFrame;
  }

  public get remote(): Electron.Remote {
    return (this.electron as Electron.RendererInterface).remote;
  }

  public get clipboard(): Electron.Clipboard {
    return (this.electron as Electron.RendererInterface).clipboard;
  }

  public get crashReporter(): Electron.CrashReporter {
    return (this.electron as Electron.RendererInterface).crashReporter;
  }

  public get nativeImage(): Electron.NativeImage {
    return (this.electron as Electron.RendererInterface).nativeImage as any;
  }

  public get screen(): Electron.Screen {
    return (this.electron as Electron.RendererInterface).screen;
  }

  public get shell(): Electron.Shell {
    return (this.electron as Electron.RendererInterface).shell;
  }

  private get electron(): Electron.RendererInterface | null {
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
