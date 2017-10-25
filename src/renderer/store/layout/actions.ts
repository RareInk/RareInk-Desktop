import { ActionCreator } from 'redux';
import { SetWindowMaximizedStateAction } from './types';

export const setWindowMaximizedState: ActionCreator<SetWindowMaximizedStateAction> =
  (maximizedState: boolean) => ({
    maximizedState,
    type: 'SET_WINDOW_MAXIMIZED_STATE'
  });
