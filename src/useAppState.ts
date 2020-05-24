import { useContext } from 'react'
import Context, { API } from './Context'
import { SetAppState } from './Provider'

export default function useAppState<S>(): [S, SetAppState] {
  const api: API = useContext(Context)

  // Make exact same signature as useState() https://reactjs.org/docs/hooks-reference.html#basic-hooks
  return [api.appState as S, api.setAppState]
}
