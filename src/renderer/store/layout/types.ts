import { Action } from 'redux'

export interface LayoutState {
  isMaximized: boolean
}

export interface SetWindowMaximizedStateAction extends Action {
  type: 'SET_WINDOW_MAXIMIZED_STATE'
  maximizedState: boolean
}
