import { Reducer } from 'redux'
import { LayoutState, SetWindowMaximizedStateAction } from './types'

type KnownAction = SetWindowMaximizedStateAction

const initialState: LayoutState = {
  isMaximized: false
}

const reducer: Reducer<LayoutState> = (state = initialState, action: KnownAction) => {
  switch (action.type) {
    case 'SET_WINDOW_MAXIMIZED_STATE':
      return { isMaximized: state.isMaximized }
    default:
      return state
  }
}

export default reducer
