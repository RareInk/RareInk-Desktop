import { ActionCreator } from 'redux';
import { SetWindowMaximizedStateAction } from './layout.types';

const setWindowMaximizedState: ActionCreator<SetWindowMaximizedStateAction> =
  (payload: boolean) => ({
    payload,
    type: '@@layout/SET_WINDOW_MAXIMIZED_STATE'
  });

export const actionCreators = {
  setWindowMaximizedState
};
