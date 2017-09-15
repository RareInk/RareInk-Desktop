import { createSelector, createFeatureSelector } from '@ngrx/store';
import {
  SHOW_TITLEBAR,
  HIDE_TITLEBAR,
  SET_ELECTRON_MODE,
  SET_WEB_MODE,
  Actions
} from './layout.actions';

export interface State {
  showTitleBar: boolean;
  isElectron: boolean;
}

const initialState: State = {
  showTitleBar: true,
  isElectron: true
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case SHOW_TITLEBAR: {
      return {
        ...state,
        showTitleBar: true
      };
    }
    case HIDE_TITLEBAR: {
      return {
        ...state,
        showTitleBar: false
      };
    }
    case SET_ELECTRON_MODE: {
      return {
        ...state,
        isElectron: true
      };
    }
    case SET_WEB_MODE: {
      return {
        ...state,
        isElectron: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getLayoutState = createFeatureSelector<State>('layout');

export const getIsElectron = createSelector(
  getLayoutState,
  (state: State) => state.isElectron
);
