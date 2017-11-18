import { ActionCreator } from 'redux';
import { SetWindowMaximizedStateAction } from './types';

export const setWindowMaximizedState: ActionCreator<SetWindowMaximizedStateAction> =
  (payload: boolean) => ({
    payload,
    type: '@@layout/SET_WINDOW_MAXIMIZED_STATE'
  });
