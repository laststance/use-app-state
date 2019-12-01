import { useContext } from 'react'
import Context from './Context'

export default function useAppState<S>(): [S, (appState: S) => void] {
  const { appState, setAppState } = useContext(Context)

  return [appState, setAppState]
}
