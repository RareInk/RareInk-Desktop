import { Action } from 'redux';

export interface LayoutState {
  isMaximized: boolean;
}

export interface SetWindowMaximizedStateAction extends Action {
  payload: boolean;
  type: '@@layout/SET_WINDOW_MAXIMIZED_STATE';
}

export type KnownAction = SetWindowMaximizedStateAction;
