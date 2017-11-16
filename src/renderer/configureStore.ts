import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
  GenericStoreEnhancer
} from 'redux';
import thunk from 'redux-thunk';
import { History } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { ApplicationState, reducers } from './store';

export default function configureStore(history: History) {
  // Build middleware. These are functions that can process the actions before they reach the store.
  const windowIfDefined = typeof window === 'undefined' ? null : window as any;

  const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  ) as GenericStoreEnhancer;

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(reducers);
  const store = createStore<ApplicationState>(allReducers, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./store', () => {
      const nextRootReducer = require('./store');
      store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
    });
  }

  return store;
}

function buildRootReducer(allReducers: any) {
  return combineReducers<ApplicationState>({
    ...allReducers,
    routing: routerReducer
  });
}
