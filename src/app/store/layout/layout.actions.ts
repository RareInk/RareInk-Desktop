import { Action } from '@ngrx/store';

export const SHOW_TITLEBAR = 'layout/SHOW_TITLEBAR';
export const HIDE_TITLEBAR = 'layout/HIDE_TITLEBAR';
export const SET_ELECTRON_MODE = 'layout/SET_ELECTRON_MODE';
export const SET_WEB_MODE = 'layout/SET_WEB_MODE';
export const SET_PLATFORM = 'layout/SET_PLATFORM';
export const SET_WINDOW_MAXIMIZED_STATE = 'layout/SET_WINDOW_MAXIMIZED_STATE';

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

export class SetPlatformAction implements Action {
  readonly type = SET_PLATFORM;

  constructor (public payload: string) {}
}

export class SetWindowMaximizedStateAction implements Action {
  readonly type = SET_WINDOW_MAXIMIZED_STATE;

  constructor (public payload: boolean) {}
}

export type Actions
  = SetElectronModeAction
  | SetWebModeAction
  | SetPlatformAction
  | SetWindowMaximizedStateAction;
