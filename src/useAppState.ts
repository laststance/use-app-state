import { useContext } from 'react'
import Context from './Context'

export default function useAppState<S>(): [S, (appState: S) => void] {
  const { appState, setAppState } = useContext(Context)

  // Make exact same signature as useState() https://reactjs.org/docs/hooks-reference.html#basic-hooks
  return [appState, setAppState]
}
