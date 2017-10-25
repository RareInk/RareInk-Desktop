import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store
} from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { ApplicationState, reducers } from './store'

export default function configureStore() {
  const middlewares = applyMiddleware(thunk)

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = combineReducers({
    ...reducers,
    router: routerReducer
  })
  const store = createStore(allReducers, middlewares) as Store<ApplicationState>

  return store
}
