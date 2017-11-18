import { Reducer, AnyAction } from 'redux';
import { LayoutState } from './types';

const initialState: LayoutState = {
  isMaximized: false
};

export const reducer: Reducer<LayoutState> =
  (state: LayoutState = initialState, action: AnyAction) => {
    switch (action.type) {
      case '@@layout/SET_WINDOW_MAXIMIZED_STATE':
        return { ...state, isMaximized: action.payload };
      default:
        return state;
    }
  };
