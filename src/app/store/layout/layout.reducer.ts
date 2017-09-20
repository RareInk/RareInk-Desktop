import { createSelector, createFeatureSelector } from '@ngrx/store';
import {
  SET_ELECTRON_MODE,
  SET_WEB_MODE,
  SET_PLATFORM,
  SET_WINDOW_MAXIMIZED_STATE,
  Actions
} from './layout.actions';

// States + initial states

export interface State {
  isElectron: boolean;
  platform: string;
  isMaximized: boolean;
}

const initialState: State = {
  isElectron: false,
  platform: '',
  isMaximized: false
};

// Reducer

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
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
    case SET_PLATFORM: {
      return {
        ...state,
        platform: action.payload
      };
    }
    case SET_WINDOW_MAXIMIZED_STATE: {
      return {
        ...state,
        isMaximized: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

// Selectors

export const getLayoutState = createFeatureSelector<State>('layout');

export const getIsElectron = createSelector(
  getLayoutState,
  (state: State) => state.isElectron
);
