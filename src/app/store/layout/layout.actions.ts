import { Action } from '@ngrx/store';

export const SHOW_TITLEBAR = 'layout/SHOW_TITLEBAR';
export const HIDE_TITLEBAR = 'layout/HIDE_TITLEBAR';
export const SET_ELECTRON_MODE = 'layout/SET_ELECTRON_MODE';
export const SET_WEB_MODE = 'layout/SET_WEB_MODE';

export class ShowTitlebarAction implements Action {
  readonly type = SHOW_TITLEBAR;
}

export class HideTitlebarAction implements Action {
  readonly type = HIDE_TITLEBAR;
}

export class SetElectronModeAction implements Action {
  readonly type = SET_ELECTRON_MODE;
}

export class SetWebModeAction implements Action {
  readonly type = SET_WEB_MODE;
}

export type Actions
  = SetElectronModeAction
  | SetWebModeAction;
