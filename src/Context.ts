import { createContext } from 'react'
import { AppState, SetAppState } from './Provider'

export interface API {
  appState: AppState
  setAppState: SetAppState
}

const Context = createContext<API>(null)

export default Context
