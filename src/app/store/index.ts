import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromLayout from './layout/layout.reducer';
import { environment } from '../../environments';

// Define new stores here...
// tslint:disable-next-line:no-empty-interface
export interface State {
  layout: fromLayout.State;
}

// ...as well as its reducers here.
export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

// Log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
